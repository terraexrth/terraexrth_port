import React, { useEffect, useRef, useState } from "react";
import "./ZoomPic.css";

const ZoomPic = ({ imgUrl,width }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const imageRef = useRef(null);

  const handleZoomIn = () => {
    setScale((scale) => scale + 0.1);
  };

  const handleZoomOut = () => {
   const newScale = scale - 0.1

	if(newScale >=1.0){
		setScale(newScale)
	}
  };

  useEffect(() => {
    const image = imageRef.current;
    let isDragging = false;
    let prevPosition = { x: 0, y: 0 };

    const handleMouseDown = (e) => {
      isDragging = true;
      prevPosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevPosition.x;
      const deltaY = e.clientY - prevPosition.y;

      prevPosition = { x: e.clientX, y: e.clientY };
      setPosition((position) => ({
        x: position.x + deltaX,
        y: position.y + deltaY,
      }));
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    image?.addEventListener("mousedown", handleMouseDown);
    image?.addEventListener("mousemove", handleMouseMove);
    image?.addEventListener("mouseup", handleMouseUp);

    return () => {
      image?.removeEventListener("mousedown", handleMouseDown);
      image?.removeEventListener("mousemove", handleMouseMove);
      image?.removeEventListener("mouseup", handleMouseUp);
    };
  }, [imageRef, scale]);

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
		marginBottom:'10px',
      }}
    >
      <div className="btn-container">
        <button onClick={handleZoomIn}>
          <span style={{ fontSize: 24 }}>+</span>
        </button>
        <button onClick={handleZoomOut}>
          <span style={{ fontSize: 24 }}>-</span>
        </button>
      </div>

      <img
        alt=""
        ref={imageRef}
        style={{
          width: width,
          height: "auto",
          cursor: "move",
          transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
        }}
        src={
         imgUrl
        }
        draggable={false}
      />
    </div>
  );
};

export default ZoomPic;
