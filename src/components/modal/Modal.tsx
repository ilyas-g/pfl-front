import React from 'react'
import "./style.css"

export default function Modal({func}) {

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
          <span className="close" onClick={func}>&times;</span>
        <div className="video-container">
          <iframe
            className="video"
            //  src="https://www.youtube.com/embed/eFfrU5vCaqc"
            src="https://www.youtube.com/embed/eFfrU5vCaqc"
            title="YouTube video player"
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  )
}
