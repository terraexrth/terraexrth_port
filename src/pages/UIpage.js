import React, { useState } from "react";
import "./work.css";
import PicPreview from "./FiveM";
import Museek1 from "./Museek1";
import Museek2 from "./Museek2";

const UIpage = () => {
  const [isOffcanva1Active, setOffcanva1Active] = useState(false);
  const [isOffcanva2Active, setOffcanva2Active] = useState(false);
  const [isOffcanva3Active, setOffcanva3Active] = useState(false);
  const [isFiveMActive, setIsFiveMActive] = useState(false);
  const offcanva1toggle = () => {
    setOffcanva1Active(!isOffcanva1Active);
  };
  const offcanva2toggle = () => {
    setOffcanva2Active(!isOffcanva2Active);
  };
  const offcanva3toggle = () => {
    setOffcanva3Active(!isOffcanva3Active);
  };
  const fiveMpageToggle = () => {
    setIsFiveMActive(!isFiveMActive);
  };
  const resetAllCanvasStates = () => {
    setOffcanva1Active(false);
    setOffcanva2Active(false);
    setOffcanva3Active(false);
    setIsFiveMActive(false);
  };
  return (
    <>
      <div style={{ flex: 1, flexDirection: "row" }}>
        <div className="breadcrumb">
          <p>
            {" "}
            <span
              class="bcHover"
              style={{ cursor: "pointer" }}
              onClick={() => resetAllCanvasStates()}
            >
              UI /{" "}
            </span>
            {isOffcanva1Active && "Museek V.1"}
            {isOffcanva2Active && "Museek V.2"}
            {isFiveMActive && "FiveM"}
          </p>
        </div>
		{!isFiveMActive && !isOffcanva1Active && !isOffcanva2Active ? (<div className="workshop test">
			 <div className="wrk1" onClick={offcanva1toggle}>
			   <img src="./image/folder.png" alt="" />
			   <span>Museek V.1</span>
			 </div>
			 <div className="wrk1" onClick={offcanva2toggle}>
			   <img src="./image/folder.png" alt="" />
			   <span>Museek V.2</span>
			 </div>
			 <div className="wrk1" onClick={fiveMpageToggle}>
			   <img src="./image/folder.png" alt="" />
			   <span>FiveM</span>
			 </div>
		   </div>)
		   :(<></>)}
        {!isOffcanva1Active ? (
           <>
		   
		 </>
        ) : (
          <>
            <Museek1 />
          </>
        )}
		 {!isOffcanva2Active ? (
           <>
		   
		 </>
        ) : (
          <>
            <Museek2 />
          </>
        )}
        {!isFiveMActive ? (
          <>
          
          </>
        ) : (
          <>
            <PicPreview />
          </>
        )}
      </div>
    </>
  );
};

export default UIpage;
