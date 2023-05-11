import React from 'react'
import { Link } from "react-router-dom";
import "./style.css"

import SocialMedias from "../../components/socialMedias/SocialMedias";

import {useTranslation} from 'react-i18next'

type PropsSocial = {
    menuFunc?: React.MouseEventHandler<HTMLLIElement>
  }

export default function WrapMenu({menuFunc}: PropsSocial) {
    const { t } = useTranslation();

    return (
        <div className='d-flex'>
            <nav className='main-menu'>
                <ul role="list">
                    <li role="listitem" className="onglets" onClick={menuFunc}><Link to="/">{t('menuHome')}</Link></li>
                    <li role="listitem" className="onglets" onClick={menuFunc}><Link to="/ranking">{t('menuRanking')}</Link></li>
                    <li role="listitem" className="onglets" onClick={menuFunc}><Link to="/finales">Finales</Link></li>
                    {/* <li role="listitem" className="onglets" onClick={menuFunc}><Link to="/pflwinter2023">Winter</Link></li> */}
                </ul>
            <SocialMedias />
            </nav>
        </div>
    )
}
