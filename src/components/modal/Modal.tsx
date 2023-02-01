import React from 'react'
import "./style.css"

export default function Modal({func, children}) {

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="video-container">
            <span className="close" onClick={func}>&times;</span>
            {children}
        </div>
      </div>
    </div>
  )
}
