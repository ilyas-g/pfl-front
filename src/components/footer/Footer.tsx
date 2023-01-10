import React from 'react'
import './style.css'

import yuzuLogo from '../../assets/logo-yuzu.svg';
import nsxcLogo from '../../assets/nsxc-logo.svg';

export const Footer = ({children}) => {
  return (
    <footer>
        <div className='footer-images'>
            <img src={yuzuLogo} alt="Yuzu Gaming" />
            <img src={nsxcLogo} alt="NSxC" />
        </div>
        <div>{children}</div>
    </footer>
  )
}
