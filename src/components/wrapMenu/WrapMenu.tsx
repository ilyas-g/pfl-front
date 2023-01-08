import React from 'react'
import { useState } from "react";

import { Link } from "react-router-dom";
import "./style.css"
import useDeviceDetect from "../../utils/useDeviceDetect";

import SocialMedias from "../../components/socialMedias/SocialMedias";

export default function WrapMenu() {

    return (
        <div style={{display: 'flex'}}>
        <nav className='main-menu'>
            <ul role="list">
                <li role="listitem" className="onglets"><Link to="/">Accueil</Link></li>
                <li role="listitem" className="onglets"><Link to="/ranking">Ranking</Link></li>
                <li role="listitem" className="onglets"><Link to="/">Contact</Link></li>
            </ul>
        <SocialMedias func={() => {console.log('okokok')}} />
        </nav>
        <div className="dropdown">
            <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
      {/* {isMobile === false ? <SocialMedias func={() => {setIsModal(true)}} /> : '' } */}



        </div>
    )
}
