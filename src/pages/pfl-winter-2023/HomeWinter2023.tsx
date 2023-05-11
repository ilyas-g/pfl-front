import React from 'react'

import AnimatedText from '../../components/animatedText/AnimatedText';

import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img8 from '../../assets/8.jpg';
import img9 from '../../assets/9.jpg';
import img13 from '../../assets/13.jpg';
import img15 from '../../assets/15.jpg';

import {useTranslation} from 'react-i18next'

export default function HomeWinter2023() {
  const { t } = useTranslation();
  return (
    <div className='homepageWinter2023'>
      <section className='secondSection'>
        <h1 className='text-center'>PFL Winter 2023</h1>
        <div className='mb-30 '>
          <div>
            <AnimatedText text={t('offline')} />
            <AnimatedText text={t('online')} />

          </div>
          <div>
            <img src={img7} alt="img7" />
            <img src={img8} alt="img8" className='img-crop mmt50'/>
          </div>
        </div>

        <div className='mb-30'>
          <div>
            <img src={img15} alt="img15" />
            <img src={img13} alt="img13" className='img-crop mmt50'/>
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

    </div>
  )
}
