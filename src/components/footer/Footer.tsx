import React from 'react'
import './style.css'

import yuzuLogo from '../../assets/logo-yuzu.svg';
import nsxcLogo from '../../assets/nsxc-logo.svg';
import logo256 from '../../assets/level_256_paris_logobis_noirbleu.svg';

type Props = {  
  children?: JSX.Element | JSX.Element[];
};

export const Footer = ({children}: Props) => {
  return (
    <footer className='container-footer'>
        <div className='footer-images'>
            <img src={yuzuLogo} alt="Yuzu Gaming" />
            <img src={nsxcLogo} alt="NSxC" />
            <img src={logo256} alt="NSxC"/>
        </div>
        <div>{children}</div>
    </footer>
  )
}
