import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from "@apollo/client";

import AnimatePage from '../../components/animatePage/AnimatePage';
import Card from '../../components/card/Card'
import Spinner from '../../components/spinner/Spinner';
import Text from '../../components/text/Text'

import evoLogo from '../../assets/evo720.png';
import pflYN from '../../assets/pfl-by-yn.png';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img8 from '../../assets/8.jpg';
import img9 from '../../assets/9.jpg';
import img13 from '../../assets/13.jpg';
import img14 from '../../assets/14.jpg';

import './style.css'
import { motion } from "framer-motion";

import useDeviceDetect from "../../utils/useDeviceDetect";
import {STANDING_QUERY} from "../../queries/queries"

import {useTranslation} from 'react-i18next'

interface AppProps {
  lang?: 'en' | 'fr'
}

const Home:React.FC<AppProps> = (props) => {

  const { data, loading, error } = useQuery(STANDING_QUERY);

  const { isMobile } = useDeviceDetect();

  const { t, i18n } = useTranslation();

  const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Français' }
  };

if (loading) return <Spinner />;
if (error) return <pre>{error.message}</pre>
  return (
    <AnimatePage>
      <div className='homepage'>

        <div>
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
        <div className='firstSection'>
        {isMobile && <Text text='Prochains rankings : 13/01 10/02 17/02 10/03 17/03' />}
          <img src={pflYN} className="pfl-logo" alt="Parisienne Fighting Ligue by Yuzu Gaming & NSxC" />
        </div>
        <div>
          <Card cardSkin="secondGame width360" title="Classement Guilty Gear Strive">
            <ul className="cards__front__classement">
              {data.league.standings.nodes.map((participant, index) => {
                return <li key={index}>{participant.entrant.name}</li>
              })}
            </ul>
          </Card>
          <p className='roadTo'>Road to</p>
          <img src={evoLogo} alt="EVO 2023" className='evo'/>
        </div>
      </div>
      <div className='secondSection'>
        <div className='mb-30 d-flex'>
          <div>
            <p>{t('offline')}</p>
            <p>{t('online')}</p>
          </div>
          <div>
            <img src={img7} alt="img7" />
            <img src={img14} alt="img10" className='img-crop mmt50'/>
          </div>
        </div>

        <div className='mb-30 d-flex'>
          <div>
            <img src={img8} alt="img7" />
            <img src={img13} alt="img10" className='img-crop'/>
          </div>
          <div>
            <p>{t('top7')}</p>
            <p>{t('lcq')}</p>
          </div>
        </div>
        <div className='mb-30 d-flex'>
          <div>
            <p>{t('winner')}</p>
          </div>
          <div>
            <img src={img9} alt="img7" />
            <img src={img6} alt="img10" className='img-crop'/>
          </div>
        </div>
      </div>
    </AnimatePage>
  )
}

export default Home;
