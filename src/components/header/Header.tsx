import React, { useState } from 'react';
import { Link } from "react-router-dom";
import BurgerMenu from '../burgerMenu/BurgerMenu';
import "./style.css"

export default function Header() {

  const [burger, setBurger] = useState<boolean>(false)

  return (
    <header>
        <img src="https://yuzugaming.com/site/templates/assets/ope/pfl/pfl-logo-crop.png" width={115}/>
        <div className='header-navigation'>
          <span className='icon-menu' onClick={() => {setBurger(!burger)}}></span>
          {burger === true ? <BurgerMenu /> : ''}

          <nav className='main-navigation'>
            <ul role="list">
              <li role="listitem" className="onglets"><Link to="/">Accueil</Link></li>
              <li role="listitem" className="onglets"><Link to="/">Ranking</Link></li>
              <li role="listitem" className="onglets"><Link to="/">Contact</Link></li>
            </ul>
          </nav>
          <nav className='nav-lang'>
            <ul role="list">
              <li role="listitem" className="onglets"><Link to="/">EN</Link></li>
              <li role="listitem" className="onglets"><Link to="/">FR</Link></li>
            </ul>
          </nav>
        </div>
    </header>
  )
}
