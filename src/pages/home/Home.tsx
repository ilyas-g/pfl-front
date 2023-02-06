import React, { useState } from 'react';
import { useQuery } from "@apollo/client";

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
import img10 from '../../assets/10.jpg';
import yuzuLogo from '../../assets/logo-yuzu.svg';
import nsxcLogo from '../../assets/nsxc-logo.svg';
import logo256 from '../../assets/logo-level256.svg';

import './style.css'

import useDeviceDetect from "../../utils/useDeviceDetect";
import {STANDING_QUERY} from "../../queries/queries"

import {useTranslation} from 'react-i18next'

const Home = () => {

  const { data, loading, error } = useQuery(STANDING_QUERY);

  const { isMobile } = useDeviceDetect();

  const [isBracket, setIsBracket] = useState(false)

  const { t } = useTranslation();

  if (loading) return <Spinner />;
  if (error) return <pre>{error.message}</pre>

  return (
    <>

      <div className='homepage'>
      <Text text={t('nextRanking')} />
        <section>
          <div className='firstSection'>
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

              </div>
            </div>

            <div className='logoDates'>
              {/* {isMobile && <Text text='Prochains rankings : 13/01 10/02 17/02 10/03 17/03' />} */}
              <img src={pfl} className="pfl-logo" alt="Parisienne Fighting Ligue by Yuzu Gaming & NSxC" />
              <h2>{t('pflDates')}</h2>
            </div>

          </div>

          <div className='logoSection'>
            <div className='logos'>
              <img src={yuzuLogo} alt="Yuzu Gaming" className='evo logoYuzu'/>
              <img src={nsxcLogo} alt="NSxC" className='evo logoNSXC'/>
              <img src={logo256} alt="Level 256" className='evo logo256'/>
              <img src={evoLogo} alt="EVO 2023" className='evo logoEvo'/>
            </div>
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
            <img src={img10} alt="img10" className='img-crop mmt50'/>
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
