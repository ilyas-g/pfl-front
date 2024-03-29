import React from 'react'
import "./style.css"

interface Props_Modal {
  func: React.MouseEventHandler<HTMLButtonElement> | DetailedHTMLProps<HTMLAttributes<HTMLDivElement>>;
  children?: JSX.Element | JSX.Element[];
}

export default function Modal({func, children}: Props_Modal) {

  return (
    <div className="modal" onClick={func}>
      <div className="modal-content">
        <div className="video-container">
            <span className="close" onClick={func}>&times;</span>
            {children}
        </div>
      </div>
    </div>
  )
}
