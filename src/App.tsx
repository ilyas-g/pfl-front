import React, {useState} from 'react';
import './App.css'

import { Routes, Route, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Card from './components/card/Card';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Ranking from './pages/ranking/Ranking';
import SocialMedias from './components/socialMedias/SocialMedias';
import Spinner from './components/spinner/Spinner';
import Modal from "./components/modal/Modal";

import { AnimatePresence } from "framer-motion";

import {useTranslation} from 'react-i18next'
import './i18n'

import useDeviceDetect from "./utils/useDeviceDetect";
import {STANDING_QUERY} from "./queries/queries"
import { Footer } from './components/footer/Footer';
import AccessMap from './components/accessmap/AccessMap';

function App() {
  const [isModal, setIsModal] = useState(false)
  const [isBracket, setIsBracket] = useState(false)
  const location = useLocation();
  const { isMobile } = useDeviceDetect();

  const { data, loading, error } = useQuery(STANDING_QUERY);

  const currentYear = new Date().getFullYear();

  const [ranking, setRanking] = useState<boolean>(false)
  
  const { t, i18n } = useTranslation();

  const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Français' }
  };

  if (loading) return <Spinner />;
  if (error) return <pre>{error.message}</pre>

  return (
  <>
    <div>
      {/* {isMobile && <AnnouncementBlock text={t('register')} func={() => setIsBracket(true)} />} */}
      <Header 
      rankingFunc={() => {{ranking === false ? setRanking(true) :  setRanking(false)}}}
      bracketFunc={() => setIsBracket(true)}
      classAnnouncement={ranking === true ? 'gly-rotate-180' : ''}
      langName={t('langTitle')}>

        <ul>
            {Object.keys(lngs).map((lng) => (
            <li key={lng} className={i18n.resolvedLanguage === lng ? 'f-bold' : '' } onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </li>
            ))}
        </ul>
      </Header>

      {/* {ranking === true ?  */}
        <Card cardSkin={`secondGame classement ${ranking === true ? 'active' : ''}`} title={t('standingGGST')}>
          <ul className="cards__front__classement">
            {data.league.standings.nodes.map((participant, index) => {
              return <li key={index}>{participant.entrant.name}</li>
            })}
          </ul>
        </Card>
         {/* : ""} */}

      {!isMobile && <SocialMedias func={() => {setIsModal(true)}} /> }
      {/* <SocialMedias func={() => {setIsModal(true)}} /> */}
      {isModal === true && 
        <Modal func={() => {setIsModal(false)}}>
            <iframe className="video" src="https://www.youtube.com/embed/FZgkhis5Cdg" 
            title="PFL Trailer" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal>
      }

      {isBracket === true && 
        <Modal func={() => {setIsBracket(false)}}>
          <div className='embedt'>
            <iframe className='register' src={import.meta.env.VITE_REGISTER_IFRAME_LINK}></iframe>
          </div>
        </Modal>
      }

      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/ranking" element={<Ranking />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/product/:productId" element={<Product />} /> */}
        </Routes>
      </AnimatePresence>

      <AccessMap title={t('venueTitle')} text={t('venueText')} />

      <Footer>
        <p>{t('copyright')} 2021 - {currentYear}. {t('rights')}</p>
        <p>{t('websiteby')} <a href="https://twitter.com/iamarktall" target="_blank">Arktall (@iamarktall)</a>. {t('photosby')} <a href="https://twitter.com/nestie__z" target="_blank">Nestie (@nestie__z)</a>.
        </p>
      </Footer>

      </div>
    </>
  )
}

export default App
