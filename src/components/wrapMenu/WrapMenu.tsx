import React from 'react'
import { Link } from "react-router-dom";
import "./style.css"

import SocialMedias from "../../components/socialMedias/SocialMedias";

import {useTranslation} from 'react-i18next'

export default function WrapMenu({menuFunc}) {
    const { t } = useTranslation();

    return (
        <div className='d-flex'>
            <nav className='main-menu'>
                <ul role="list">
                    <li role="listitem" className="onglets" onClick={menuFunc}><Link to="/" onClick={menuFunc}>{t('menuHome')}</Link></li>
                    <li role="listitem" className="onglets" onClick={menuFunc}><Link to="/ranking" onClick={menuFunc}>{t('menuRanking')}</Link></li>
                </ul>
            <SocialMedias />
            </nav>
        </div>
    )
}
