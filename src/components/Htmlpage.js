import React from "react";
import "./work.css";

const Htmlpage = () => {
  return (
    <>
      <div className="workshop test">
        <a href="https://terraexrth-portfolio.web.app/" target="_blank" rel="noreferrer">
          <div className="wrk1">
            <div className="github">
              <img className="git_logo" src="./image/html_black.png" alt="" />
            </div>
            <img src="./image/folder.png" alt="" />
            <span>College Of Computing</span>
          </div>
        </a>
        <a href="https://mobileweb-a36af.web.app/" target="_blank" rel="noreferrer">
          <div className="wrk1">
            <div className="github">
              <img className="git_logo" src="./image/html_black.png" alt="" />
            </div>
            <img src="./image/folder.png" alt="" />
            <span>Web Application</span>
          </div>
        </a>

        <a
          href="http://202.28.94.18/wdt64/cs/sec1/633020033-2/html/index.html"
          target="_blank"
		  rel="noreferrer"
        >
          <div className="wrk1">
            <div className="github">
              <img className="git_logo" src="./image/html_black.png" alt="" />
            </div>
            <img src="./image/folder.png" alt="" />
            <span>Portfolio (draft1)</span>
          </div>
        </a>
      </div>
    </>
  );
};

export default Htmlpage;
