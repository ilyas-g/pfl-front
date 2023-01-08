import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Menu from '../burgerMenu/Menu';
import Text from '../text/Text'
import WrapMenu from '../wrapMenu/WrapMenu';
import "./style.css"
import useDeviceDetect from "../../utils/useDeviceDetect";
import logo from '../../assets/pfl-logo.png';
import AnnouncementBlock from '../announcementBlock/AnnouncementBlock';
import 'react-i18next'

export default function Header({rankingFunc}) {

  const [burger, setBurger] = useState<boolean>(false)

  const { isMobile } = useDeviceDetect();

  return (
    <header>
      <div style={{display: 'flex'}}>
      <img src={logo} alt="Parisienne Fighting Ligue by Yuzu Gaming & NSxC" width={115} />
      <div className='main-nav'>
          <WrapMenu />
        </div>
      </div>
      {/* {!isMobile && <Text text='Prochains rankings : 13/01 10/02 17/02 10/03 17/03' />} */}

      <div className='header-navigation'>
        <span className='icon-menu' onClick={() => { setBurger(true) }}></span>
        {burger === true && <Menu func={() => { setBurger(false) }} />}

        <button onClick={rankingFunc}>Ranking</button>

      {!isMobile && <AnnouncementBlock />}


        {/* <nav className='nav-lang'>
            <ul role="list">
              <li role="listitem" className="navlink"><Link to="/">EN</Link></li>
              <li role="listitem" className="navlink"><Link to="/">FR</Link></li>
            </ul>
          </nav> */}
      </div>
    </header>
  )
}
