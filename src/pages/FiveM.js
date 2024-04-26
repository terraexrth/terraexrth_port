import React, { useState } from "react";
import "./work.css";
import imageData from "../json/fiveM.json";
import ZoomPic from "../component/ZoomPic";

const PicPreview = () => {
  const [images, setImages] = useState(imageData);

  const [selectedImage, setSelectedImage] = useState({
    path: null,
    name: null,
    fileType: null,
    desc: null,
  });

  const handleImageClick = (path, name, desc) => {
    const splitPath = path.split(".");
    const fileSplit =
      splitPath.length > 1 ? splitPath[splitPath.length - 1] : null;
    const fileType = fileSplit ? fileSplit.toUpperCase() : null;

    setSelectedImage({ path, name, fileType, desc });
  };
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        className="picList"
        style={{
          width: "50%",
          marginLeft: 10,
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          fontFamily: "Roboto",
          fontWeight: 300,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="fileHover"
            style={{ marginBottom: 5, alignItems: "center" }}
            onClick={() =>
              handleImageClick(image.src, image.name, image.description)
            }
          >
            <img
              style={{ width: "3%", marginRight: 5 }}
              src={image.src}
              alt=""
            />
            <span>
              {image.name === "Readme"
                ? `${image.name}.txt`
                : `${image.name}.${
                    selectedImage.fileType
                      ? selectedImage.fileType.toLowerCase()
                      : "png"
                  }`}
            </span>
          </div>
        ))}
      </div>
      <div className="previewSection" style={{ width: "60%" }}>
        <ZoomPic imgUrl={selectedImage.path} width={"28vw"} />
        {selectedImage && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "90%" }}>
                <span style={{ fontWeight: 400, fontSize: 18 }}>
                  {selectedImage.name}
                </span>
              </div>
            </div>
            {selectedImage.fileType && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "90%" }}>
                  <span
                    style={{
                      fontWeight: 400,
                      color: "rgba(0,0,0,0.5)",
                      fontSize: 18,
                      marginTop: 5,
                    }}
                  >
                    {selectedImage.fileType} image - 1.1 MB
                  </span>
                </div>
              </div>
            )}
            {selectedImage.fileType && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "90%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 400,
                      fontSize: 18,

                      marginTop: 10,
                    }}
                  >
                    Information
                  </span>
                  <span
                    style={{
                      fontWeight: 400,
                      fontSize: 14,
                      color: "rgb(10,132,255)",

                      marginTop: 10,
                      cursor: "pointer",
                    }}
                  >
                    Show More
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    width: "90%",
                    fontWeight: 300,
                    marginTop: 10,
                  }}
                >
                  <span>{selectedImage.desc}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PicPreview;
