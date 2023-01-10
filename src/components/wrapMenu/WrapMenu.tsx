import React from 'react'
import { Link } from "react-router-dom";
import "./style.css"

import SocialMedias from "../../components/socialMedias/SocialMedias";

import {useTranslation} from 'react-i18next'

export default function WrapMenu() {

  const { t } = useTranslation();

    return (
        <div className='d-flex'>
            <nav className='main-menu'>
                <ul role="list">
                    <li role="listitem" className="onglets"><Link to="/">{t('menuHome')}</Link></li>
                    <li role="listitem" className="onglets"><Link to="/ranking">{t('menuRanking')}</Link></li>
                    {/* <li role="listitem" className="onglets"><Link to="/">Contact</Link></li> */}
                </ul>
            <SocialMedias func={() => {console.log('okokok')}} />
            </nav>

      {/* {isMobile === false ? <SocialMedias func={() => {setIsModal(true)}} /> : '' } */}

        </div>
    )
}
