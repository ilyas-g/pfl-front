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

import {useTranslation} from 'react-i18next'

const Header = ({rankingFunc, bracketFunc, langFunc, langName, children, classAnnouncement}) => {

  const [burger, setBurger] = useState<boolean>(false)

  const { isMobile } = useDeviceDetect();

  const { t } = useTranslation();

  return (
    <header>
      <div className='d-flex-center'>
      <img src={logo} alt="Parisienne Fighting Ligue by Yuzu Gaming & NSxC" width={115} />

      <div className='d-flex-center'>
      <DropdownMenu 
        nameMenu={langName} 
        func={langFunc}>
        {children}
      </DropdownMenu>

      <div className='main-nav'>
          <WrapMenu />
        </div>
        </div>
      </div>
      {/* {!isMobile && <Text text='Prochains rankings : 13/01 10/02 17/02 10/03 17/03' />} */}

      <div className='header-navigation'>
        <span className='icon-menu' onClick={() => { setBurger(true) }}></span>
        {burger === true && <Menu func={() => { setBurger(false) }} />}

        {/* <button className='announcement' onClick={rankingFunc}><span className='textButton'>
          {t('rankingButton')}</span> <i className={`icon-arrow-down ${classAnnouncement}`}></i> */}

        {!isMobile && import.meta.env.VITE_REGISTER_IFRAME_LINK !== "" && <AnnouncementBlock func={bracketFunc} text={t('register')} />}

        <button className='announcement' onClick={rankingFunc}>
          <span><i className='icon-list1'></i></span> 
          <span className='textButton'>{t('rankingButton')} <i className={`icon-arrow-down ${classAnnouncement}`}></i></span>
        </button>

      </div>
    </header>
  )
}

export default Header;
