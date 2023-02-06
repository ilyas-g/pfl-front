import React, { useState } from 'react';
import 'react-i18next'
import "./style.css"

import Menu from '../burgerMenu/Menu';
import WrapMenu from '../wrapMenu/WrapMenu';
import AnnouncementBlock from '../announcementBlock/AnnouncementBlock';
import DropdownMenu from '../dropdownMenu/DropdownMenu';

import useDeviceDetect from "../../utils/useDeviceDetect";
import logo from '../../assets/pfl-logo.png';

import {useTranslation} from 'react-i18next'

interface Props_Header {
  rankingFunc?: React.MouseEventHandler<HTMLButtonElement>;
  bracketFunc?: React.MouseEventHandler<HTMLButtonElement>;
  langFunc?: React.MouseEventHandler<HTMLButtonElement>;
  children?: JSX.Element | JSX.Element[];
  classAnnouncement?: string;
  langName?: string | DefaultTFuncReturn;
}

const Header = ({rankingFunc, bracketFunc, langFunc, langName, children, classAnnouncement}: Props_Header) => {

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
            <WrapMenu menuFunc={() => { setBurger(false) }}/>
          </div>
        </div>
      </div>

      <div className='header-navigation'>
        <span className='icon-menu' onClick={() => { setBurger(true) }}></span>
        {burger === true && <Menu func={() => { setBurger(false) }} />}

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
