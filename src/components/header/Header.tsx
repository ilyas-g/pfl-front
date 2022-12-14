import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Menu from '../burgerMenu/Menu';
import WrapMenu from '../wrapMenu/WrapMenu';
import "./style.css"

export default function Header() {

  const [burger, setBurger] = useState<boolean>(false)

  return (
    <header>
        <img src="https://yuzugaming.com/site/templates/assets/ope/pfl/pfl-logo-crop.png" width={115}/>
        <div className='header-navigation'>
          <span className='icon-menu' onClick={() => {setBurger(true)}}></span>
          {burger === true && <Menu func={() => {setBurger(false)}} />}

          <div className='main-nav'>
            <WrapMenu />
          </div>
          <nav className='nav-lang'>
            <ul role="list">
              <li role="listitem" className="navlink"><Link to="/">EN</Link></li>
              <li role="listitem" className="navlink"><Link to="/">FR</Link></li>
            </ul>
          </nav>
        </div>
    </header>
  )
}
