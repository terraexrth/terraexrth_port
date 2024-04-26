import { useState, useEffect } from "react";

import "./App.css";
import Androidpage from "./pages/Androidpage";
import Etcpage from "./pages/Etcpage";
import Htmlpage from "./pages/Htmlpage";
import UIpage from "./pages/UIpage";
import Modal from "./modal/Modal";

function App() {
  const [isUiActive, setUiActive] = useState(true);
  const [isHtmlActive, setHtmlActive] = useState(false);
  const [isAndroidActive, setAndroidActive] = useState(false);
  const [isEtcActive, setEtcActive] = useState(false);
  const [isPortraitModalOpen, setIsPortraitModalOpen] = useState(false);


  useEffect(() => {
    const handleOrientationChange = () => {

     setIsPortraitModalOpen(window.innerWidth < window.innerHeight);
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    handleOrientationChange(); // Check initial orientation

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  const toggleUi = () => {
    setUiActive(true);
    setHtmlActive(false);
    setAndroidActive(false);
    setEtcActive(false);
  };
  const toggleHtml = () => {
    setUiActive(false);
    setHtmlActive(true);
    setAndroidActive(false);
    setEtcActive(false);
  };
  const toggleAndroid = () => {
    setUiActive(false);
    setHtmlActive(false);
    setAndroidActive(true);
    setEtcActive(false);
  };
  const toggleEtc = () => {
    setUiActive(false);
    setHtmlActive(false);
    setAndroidActive(false);
    setEtcActive(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="leftContent">
            <h1>
              terraexrth <span>🌍</span>
            </h1>
            <p className="port_text">portfolio.</p>
            <div className="profile_text">
              <h1>Jirapat Chunskul</h1>
            </div>
            <div className="profile_text">
              <p>
                I'm a fresh graduate from Computer Science College of Computing,
                Khon Kaen University. I'm interested in Web and Mobile
                Development
              </p>
            </div>
            <div className="profile_text">
              <h1>Tech Stack</h1>
            </div>
            <div className="profile_text">
              <ul className="skill">
                <li>ReactJS</li>
                <li>NodeJs (Express.JS)</li>
                <li>MUI</li>
                <li style={{ display: "block" }}>MongoDB & Firebase</li>

                <li>
                  Kotlin, Java,React Native, Expo<span>(for android development)</span>
                </li>
              </ul>
            </div>
            <div className="profile_text">
              <h1>Tools</h1>
            </div>
            <div className="profile_text">
              <ul className="skill" style={{ marginBottom: 20 }}>
                <li style={{ display: "block" }}>Postman & Thunder Client</li>
                <li style={{ display: "block" }}>Git</li>
                <li style={{ display: "block" }}>Figma & XD</li>
                <li style={{ display: "block" }}>Photoshop</li>
              </ul>
            </div>
            <div className="profile_text" style={{ marginTop: 30 }}>
              <h1>Contact</h1>
            </div>
            <div className="profile_text">
              <ul className="contact">
                <li>
                  <img src="/image/email.png" alt="" /> jirapat.ch@kkumail.com
                </li>
                <li>
                  <img src="/image/telephone.png" alt="" />
                  +66968158260
                </li>
                <a
                  href="https://linktr.ee/terraexrth"
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>
                    <img src="/image/link.png" alt="" />
                    linktr.ee/terraexrth
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="rightContent">
            <div className="workpanel">
              <div className="menubar">
                <svg className="close_bar" height="40" width="100">
                  <circle cx="20" cy="20" r="8" fill="#FF605C"></circle>
                  <circle cx="45" cy="20" r="8" fill="#FFBD44"></circle>
                  <circle cx="70" cy="20" r="8" fill="#00CA4E"></circle>
                </svg>
                <p id="favor">Favorite</p>
                <div className="menucontainer">
                  <div
                    className={isUiActive ? "choice active" : "choice"}
                    onClick={toggleUi}
                  >
                    <span>
                      <img src="/image/file.png" alt="file_icon" />
                    </span>{" "}
                    <p>UI Design</p>
                  </div>
                  <div
                    className={isHtmlActive ? "choice active" : "choice"}
                    onClick={toggleHtml}
                  >
                    <span>
                      <img src="/image/html.png" alt="file_icon" />
                    </span>{" "}
                    <p>Web Dev</p>
                  </div>
                  <div
                    className={isAndroidActive ? "choice active" : "choice"}
                    onClick={toggleAndroid}
                  >
                    <span>
                      <img src="/image/android.png" alt="file_icon" />
                    </span>{" "}
                    <p>Android</p>
                  </div>
                  <div
                    className={isEtcActive ? "choice active" : "choice"}
                    onClick={toggleEtc}
                  >
                    <span>
                      <img src="/image/ellipsis.png" alt="file_icon" />
                    </span>{" "}
                    <p>ETC</p>
                  </div>
                </div>
              </div>
            </div>

            {isUiActive ? <UIpage /> : null}
            {isHtmlActive ? <Htmlpage /> : null}
            {isAndroidActive ? <Androidpage /> : null}
            {isEtcActive ? <Etcpage /> : null}
          </div>
        </div>
      </header>
      {isPortraitModalOpen && <Modal />}
    </div>
  );
}

export default App;
