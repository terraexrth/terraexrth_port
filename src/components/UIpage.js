import React, { useState } from "react";
import "./work.css";

const UIpage = () => {
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
          <img src="./image/folder.png" alt="" />
          <span>Museek V.1</span>
        </div>
        <div className="wrk1" onClick={offcanva2toggle}>
          <img src="./image/folder.png" alt="" />
          <span>Museek V.2</span>
        </div>
        <div className="wrk1" onClick={offcanva3toggle}>
          <img src="./image/folder.png" alt="" />
          <span>FiveM</span>
        </div>
      </div>

      {isOffcanva1Active ? (
        <>
          <div className="offcanva1 slidein">
            <div className="close_btn" onClick={offcanva1toggle}>
              <span className="close_text"> x </span>
            </div>
            <div className="info">
              <div className="ui_info">
                <img src="/image/adobexd.png" alt="" />
                <p>Museek UI Design</p>
              </div>
              <div className="subtitle">
                <p>
                  • A Streaming Application Mini Project for Programming for
                  Mobile Application.
                </p>
                <p>• Using Adobe XD in part of design.</p>
              </div>
              <div className="ui_show">
                <img src="/image/mussek1.png" alt="" />
              </div>
              <div className="link_button">
                <button className="button-39">
                  <img src="/image/adobexd.png" alt="" />
                  <p>More Design</p>
                </button>
              </div>
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
      {isOffcanva2Active ? (
        <>
          <div className="offcanva1 slidein">
            <div className="close_btn" onClick={offcanva2toggle}>
              <span className="close_text"> x </span>
            </div>
            <div className="info">
              <div className="ui_info">
                <img src="/image/figma.png" alt="" />
                <p>Museek UI Redesign</p>
              </div>
              <div className="subtitle">
                <p>
                  • A Streaming Application Mini Project for Programming for
                  Mobile Application.
                </p>
                <p>• Using Figma in part of design.</p>
              </div>
              <div className="ui_show">
                <img src="/image/museek2.png" alt="" />
              </div>
              <a
                href="https://www.figma.com/proto/f0Vb40VxWkiB4L04INPgZ5/Museek-App?page-id=0%3A1&node-id=339%3A3&viewport=-338%2C227%2C0.24&scaling=scale-down&starting-point-node-id=339%3A2"
                target="_blank"
              >
                <div className="link_button">
                  <button className="button-39" type="button">
                    <img src="/image/figma.png" alt="" />
                    <p>More Design & Prototype</p>
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
      {isOffcanva3Active ? (
        <>
          <div className="offcanva1 slidein">
            <div className="close_btn" onClick={offcanva3toggle}>
              <span className="close_text"> x </span>
            </div>
            <div className="info">
              <div className="ui_info">
                <img src="/image/figma.png" alt="" />
                <p>Five M UI Design</p>
              </div>
              <div className="subtitle">
                <p>
                  • A Part Time Job for design an user interface for Grand Theft
                  Auto V Online Local Server
                </p>
                <p>• Using Figma in part of design.</p>
              </div>
              <div className="ui_show">
                <img src="/image/fivem.png" alt="fivem" />
              </div>
              <a
                href="https://www.figma.com/file/D8IojdcHma7wZK0TsbgpYF/FiveMUI?node-id=0%3A1&t=ngR4Ky1j6FtV3qHi-1"
                target="_blank"
				rel="noreferrer"
              >
                <div className="link_button">
                  <button className="button-39" type="button">
                    <img src="/image/figma.png" alt="" />
                    <p>More Design & Prototype</p>
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

export default UIpage;
