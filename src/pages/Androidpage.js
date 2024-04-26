import React from 'react';
import "./work.css";

const Androidpage = () => {
  return (
	<>
	  <div className="workshop test">
        <a href="https://github.com/terraexrth/Museek" target="_blank" rel="noreferrer">
          <div className="wrk1">
		  <div className="github">
				<img className='git_logo' src="./image/github.png" alt="" />
			</div>
            <img src="./image/folder.png" alt="" />
            <span>Museek.apk</span>
          </div>
        </a>
        <a href="https://github.com/terraexrth/SC-Music-Room-Booking" target="_blank" rel="noreferrer">
          <div className="wrk1">
			<div className="github">
				<img className='git_logo' src="./image/github.png" alt="" />
			</div>
            <img src="./image/folder.png" alt="" />
            <span>SCBooking.apk</span>
          </div>
        </a>
      </div>

	</>
  )
}

export default Androidpage
