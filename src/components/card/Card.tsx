import React from "react";
import "./style.css"

interface Props {
  cardSkin: string;
  children: JSX.Element,
  link?: string | undefined
  linkPhotos?: string
  title: string
}

function Card({cardSkin, children, title, link}: Props): JSX.Element | null {
  return (
    <div className={`cards__single ${cardSkin}`}>
        <div className="cards__front">
          <div className="cards__front__header">
            <h3>{title}</h3>
            {children}
          </div>
          {link && 
            <div className="cards__front__footer">
              <a className="btn" href={link} target="_blank" rel="noreferrer">Bracket</a>
            </div>
          }
        </div>
    </div> 
  );
}

export default Card;
