import React from 'react'
import { useState } from "react";

import { Link } from "react-router-dom";
import "./style.css"
import useDeviceDetect from "../../utils/useDeviceDetect";

import SocialMedias from "../../components/socialMedias/SocialMedias";

export default function WrapMenu() {
  const [isModal, setIsModal] = useState(false)
  const { isMobile } = useDeviceDetect();

    return (
        <div>
        <nav className='main-menu'>
            <ul role="list">
                <li role="listitem" className="onglets"><Link to="/">Accueil</Link></li>
                <li role="listitem" className="onglets"><Link to="/ranking">Ranking</Link></li>
                <li role="listitem" className="onglets"><Link to="/">Contact</Link></li>
            </ul>
        <SocialMedias func={() => {console.log('okokok')}} />
        </nav>
      {/* {isMobile === false ? <SocialMedias func={() => {setIsModal(true)}} /> : '' } */}

        </div>
    )
}
