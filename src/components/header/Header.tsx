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
import DropdownMenu from '../dropdownMenu/DropdownMenu';

const Header = ({rankingFunc, bracketFunc, langFunc, children}) => {

  const [burger, setBurger] = useState<boolean>(false)

  const { isMobile } = useDeviceDetect();

  return (
    <header>
      <div style={{display: 'flex'}}>
      <img src={logo} alt="Parisienne Fighting Ligue by Yuzu Gaming & NSxC" width={115} />

      <DropdownMenu 
        nameMenu='lang' 
        func={langFunc}>
        {children}
      </DropdownMenu>

      <div className='main-nav'>
          <WrapMenu />
        </div>
      </div>
      {/* {!isMobile && <Text text='Prochains rankings : 13/01 10/02 17/02 10/03 17/03' />} */}

      <div className='header-navigation'>
        <span className='icon-menu' onClick={() => { setBurger(true) }}></span>
        {burger === true && <Menu func={() => { setBurger(false) }} />}

        <button onClick={rankingFunc}>Ranking</button>

        {!isMobile && <AnnouncementBlock func={bracketFunc} />}
      </div>
    </header>
  )
}

export default Header;
