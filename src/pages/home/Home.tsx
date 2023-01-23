import React, { useState } from 'react';
import { useQuery } from "@apollo/client";

import AnimatePage from '../../components/animatePage/AnimatePage';
import Spinner from '../../components/spinner/Spinner';
import Modal from '../../components/modal/Modal';
import Text from '../../components/text/Text';
import AnimatedText from '../../components/animatedText/AnimatedText';
import AnnouncementBlock from '../../components/announcementBlock/AnnouncementBlock';

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

import useDeviceDetect from "../../utils/useDeviceDetect";
import {STANDING_QUERY} from "../../queries/queries"

import {useTranslation} from 'react-i18next'
import { motion } from "framer-motion";
import AnimateModal from '../../components/animateModal/AnimateModal';

const Home = () => {

  const { data, loading, error } = useQuery(STANDING_QUERY);

  const { isMobile } = useDeviceDetect();

  const [isBracket, setIsBracket] = useState(false)

  const { t } = useTranslation();

  if (loading) return <Spinner />;
  if (error) return <pre>{error.message}</pre>

  // const [modalOpen, setModalOpen] = useState(false);

  const close = () => setIsBracket(false);
  const open = () => setIsBracket(true);

  return (
    <>

      <div className='homepage'>
      <Text text={t('nextRanking')} />
        <section className='firstSection'>

          <div>
            <h1>{t('mainTitle')}</h1>
            <div className="presentation">

              <p>{t('pflPresentation')}</p>

              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="save-button"
                onClick={() => (modalOpen ? close() : open())}
              >
                Launch modal
              </motion.button> */}

            {!isMobile ? 
              import.meta.env.VITE_REGISTER_IFRAME_LINK !== "" &&
                <div className='d-flex-center'>
                  <AnnouncementBlock text={t('register')} func={() => setIsBracket(true)} />
                </div>
              : <a href={import.meta.env.VITE_REGISTER_LINK} className='announcement'>{t('register')}</a>
              }
      
                <div className='logoSection'>
                  <div className='logos'>
                    <img src={yuzuLogo} alt="Yuzu Gaming" className='evo logoNSXC'/>
                    <img src={nsxcLogo} alt="NSxC" className='evo logoNSXC'/>
                  </div>

                  <div>
                    <img src={evoLogo} alt="EVO 2023" className='evo'/>
                  </div>
                </div>
            </div>
          </div>

          <div className='logoDates'>
            {/* {isMobile && <Text text='Prochains rankings : 13/01 10/02 17/02 10/03 17/03' />} */}
            <img src={pfl} className="pfl-logo" alt="Parisienne Fighting Ligue by Yuzu Gaming & NSxC" />
            <h2>{t('pflDates')}</h2>
          </div>
        </section>
      </div>

      <section className='secondSection'>
        <div className='mb-30 '>
          <div>
            <AnimatedText text={t('offline')} />
            <AnimatedText text={t('online')} />

          </div>
          <div>
            <img src={img7} alt="img7" />
            <img src={img14} alt="img10" className='img-crop mmt50'/>
          </div>
        </div>

        <div className='mb-30'>
          <div>
            <img src={img8} alt="img7" />
            <img src={img13} alt="img10" className='img-crop mmt50'/>
          </div>
          <div>
            <AnimatedText text={t('top7')} />
            <AnimatedText text={t('lcq')} />
          </div>
        </div>

        <div className='mb-30'>
          <div>
            <AnimatedText text={t('winner')} />
          </div>
          <div>
            <img src={img9} alt="img7" />
            <img src={img6} alt="img10" className='img-crop mmt50'/>
          </div>
        </div>
      </section>

      {/* {isBracket && 
        <AnimateModal modalOpen={isBracket} handleClose={close}>
        <div className='embedt'>
            <iframe className='register' src={import.meta.env.VITE_REGISTER_IFRAME_LINK}></iframe>
          </div>
        </AnimateModal>
      } */}

    {isBracket === true &&
      <Modal func={() => {setIsBracket(false)}}>
        <div className='embedt'>
          <iframe className='register' src={import.meta.env.VITE_REGISTER_IFRAME_LINK}></iframe>
        </div>
      </Modal>
    }
    </>
  )
}

export default Home;
