import React, { useState } from "react";
import "./work.css";

const Htmlpage = () => {
  const [isOffcanva1Active, setOffcanva1Active] = useState(false);
  const [isOffcanva2Active, setOffcanva2Active] = useState(false);
  const [isOffcanva3Active, setOffcanva3Active] = useState(false);
  const offcanva1toggle = () => {
    setOffcanva1Active(!isOffcanva1Active);
  };
  const offcanva2toggle = () => {
    setOffcanva2Active(!isOffcanva2Active);
  };
  const offcanva3toggle = () => {
    setOffcanva3Active(!isOffcanva3Active);
  };
  return (
    <>


      <div className="workshop test">
          <div className="wrk1" onClick={offcanva1toggle}>
            <div className="github">
              <img className="git_logo" src="./image/html_black.png" alt="" />
            </div>
            <img src="./image/folder.png" alt="" />
            <span>College Of Computing</span>
          </div>
		  <a href="https://youtu.be/QXZUkACCU7w" target="_blank" rel="noreferrer">
		  <div className="wrk1" onClick={offcanva1toggle}> 
            <div className="github">
              <img className="git_logo" src="./image/html_black.png" alt="" />
            </div>
            <img src="./image/folder.png" alt="" />
            <span>Graduation Verification System</span>
          </div>
		  </a>
		  <a href="https://github.com/terraexrth/Gloom" target="_blank" rel="noreferrer">
		  <div className="wrk1" onClick={offcanva1toggle}> 
            <div className="github">
              <img className="git_logo" src="./image/html_black.png" alt="" />
            </div>
            <img src="./image/folder.png" alt="" />
            <span>Gloom</span>
          </div>
		  </a>
		 
      </div>

	  {isOffcanva1Active ? (
        <>
          <div className="offcanva1 slidein">
            <div className="close_btn" onClick={offcanva1toggle}>
              <span className="close_text"> x </span>
            </div>
            <div className="info">
              <div className="ui_info">
                <img src="/image/html_black.png" alt="" />
                <p>College of Computing</p>
              </div>
              <div className="subtitle">
                <p>
                  • College of Computing Website is a part of Web Design Technologies.
				  
                </p>
                <p>• Use Bootstrap 5 , HTML, CSS.</p>
              </div>
              <div className="ui_show">
                <img src="/image/web.png" alt="web" />
              </div>
			  <a
                  href="https://terraexrth-portfolio.web.app/"
                  target="_blank"
                  rel="noreferrer"
                > 
              <div className="link_button" id="web_btn">
              
                  <button className="button-39">
                    <img src="/image/html_black.png" alt="" />
                    <p>Go to Website</p>
                  </button>
                
              </div>
			  </a>
            </div>
          </div>
          <div className="blackpage fadein"></div>
        </>
      ) : (
        <>
          <div className="offcanva1 slideout"></div>
          <div className="blackpage fadeout"></div>
        </>
      )}
    </>
  );
};

export default Htmlpage;
