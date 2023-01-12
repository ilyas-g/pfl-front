import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from "@apollo/client";

import AnimatePage from '../../components/animatePage/AnimatePage';
import Spinner from '../../components/spinner/Spinner';

import evoLogo from '../../assets/evo720.png';
import pfl from '../../assets/pfl-logo.png';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img8 from '../../assets/8.jpg';
import img9 from '../../assets/9.jpg';
import img13 from '../../assets/13.jpg';
import img14 from '../../assets/14.jpg';
import yuzuLogo from '../../assets/logo-yuzu.svg';
import nsxcLogo from '../../assets/nsxc-logo.svg';

import './style.css'
import { motion } from "framer-motion";

import useDeviceDetect from "../../utils/useDeviceDetect";
import {STANDING_QUERY} from "../../queries/queries"

import {useTranslation} from 'react-i18next'

const Home = () => {

  const { data, loading, error } = useQuery(STANDING_QUERY);

  const { isMobile } = useDeviceDetect();

  const { t } = useTranslation();

  if (loading) return <Spinner />;
  if (error) return <pre>{error.message}</pre>

  return (
    <AnimatePage>
      <div className='homepage'>
        <section className='firstSection'>

          <div>
            <h1>{t('mainTitle')}</h1>
            <div className="presentation">

              <p>{t('pflPresentation')}</p>

              <div className='logoSection'>
                <div className='logos'>
                  <img src={yuzuLogo} alt="Yuzu Gaming" className='evo logoYuzu'/>
                  <img src={nsxcLogo} alt="NSxC" className='evo logoNSXC'/>
                </div>

                <div>
                  <img src={evoLogo} alt="EVO 2023" className='evo'/>
                </div>
              </div>
            </div>

            {/* <p className='roadTo'>Road to</p>
            <img src={evoLogo} alt="EVO 2023" className='evo'/> */}
          </div>

          {/* {isMobile && <Text text='Prochains rankings : 13/01 10/02 17/02 10/03 17/03' />} */}
          <img src={pfl} className="pfl-logo" alt="Parisienne Fighting Ligue by Yuzu Gaming & NSxC" />
        </section>
      </div>

      <section className='secondSection'>
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
            <img src={img13} alt="img10" className='img-crop mmt50'/>
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
            <img src={img6} alt="img10" className='img-crop mmt50'/>
          </div>
        </div>
      </section>
    </AnimatePage>
  )
}

export default Home;
