import React, {useState} from 'react';

import "./style.css"

import daseinologist from '../../assets/finales/daseinologist.jpg';
import neos from '../../assets/finales/neos.jpg';
import rayane from '../../assets/finales/rayane.jpg';
import arefu from '../../assets/finales/arefu.jpg';
import crillou from '../../assets/finales/crillou.jpg';
import gagayoux from '../../assets/finales/gagayoux.jpg';
import patachu from '../../assets/finales/patachu.jpg';
import skyll from '../../assets/finales/skyll.jpg';

import chaos from '../../assets/finales/ggst-chaos.webp';
import chipp from '../../assets/finales/ggst-chipp.webp';
import sol from '../../assets/finales/ggst-sol.webp';
import leo from '../../assets/finales/ggst-leo.webp';
import giovanna from '../../assets/finales/ggst-giovanna.webp';
import bridget from '../../assets/finales/ggst-bridget.webp';
import ky from '../../assets/finales/ggst-ky.webp';
import sin from '../../assets/finales/ggst-sin.webp';

import evoLogo from '../../assets/evo720.png';

import Card from '../../components/card/Card';
import AnimatedText from '../../components/animatedText/AnimatedText';

import {useTranslation} from 'react-i18next'
import '../../i18n'
import { useQuery } from "@apollo/client";
import {LCQ_QUERY} from "../../queries/queries"
import PlayerProfile from '../../components/playerProfile/playerProfile';

export const Finales = () => {
  const { data, loading, error } = useQuery(LCQ_QUERY);
  const { t, i18n } = useTranslation();

  console.log(data);
  
  return (
    <>
      <div className='finales'>
        <h1 className='text-center'>{t('titleFinalsPage')}</h1>

        <div className='top'>
        <div className='topPFL champ'>
          <PlayerProfile
          profileSkin='gold'
          place={t('first')}
          firstImg={sol}
          secondImg={skyll}
          name="Skyll"
          />
            <section className='secondSection'>
              <div className='mb-30 '>
                <div>
                  <AnimatedText text={t('finalsCongrats')} />
                  <AnimatedText text={t('finalsWinnerEVO')} />
                  <img className='evo' src={evoLogo} />
                </div>
              </div>
            </section>
          </div>
          <h2 className='text-center'>{t('finalsResults')}</h2>

          <div className='topPFL'>
            <div className='tieplace'>
              <PlayerProfile 
              profileSkin='bronze'
              place={t('third')}
              firstImg={sin}
              secondImg={patachu}
              name="Patachu"
              />
            </div>
            <div className='tieplace'>
              <PlayerProfile 
              profileSkin='silver'
              place={t('second')}
              firstImg={chipp}
              secondImg={gagayoux}
              name="Gagayoux"
              />
            </div>
            <div className='tieplace'>
              <PlayerProfile
              profileSkin='copper'
              place={t('fourth')}
              firstImg={chaos}
              secondImg={daseinologist}
              name="Daseinologist"
              />
            </div>
          </div>

          <div className='topPFL'>
            <div className='tieplace'>
              <PlayerProfile 
              profileSkin='seventh-one'
              place={t('seventh')}
              firstImg={ky}
              secondImg={rayane}
              name="ROR2000"
              />
              <PlayerProfile 
              profileSkin='seventh-two'
              place={t('seventh')}
              firstImg={giovanna}
              secondImg={arefu}
              name="Arefu"
              />
            </div>
            <div className='tieplace'>
              <PlayerProfile 
              profileSkin='fifth-one'
              place={t('fifth')}
              firstImg={leo}
              secondImg={neos}
              name="Neos"
              />
              <PlayerProfile 
              profileSkin='fifth-two'
              place={t('fifth')}
              firstImg={bridget}
              secondImg={crillou}
              name="Crillou"
              />
            </div>
          </div>
        </div>

        <div className='lcq'>
          <div className='lcqStanding'>
            <Card cardSkin="secondGame width360" title={t('standingLCQ')}>
              <ul className="cards__front__classement">
                {/* {data.event.standings.nodes.map((participant, index) => {
                  return <li key={index}>{participant.entrant.name}</li>
                })} */}

                <li>Platy | NH | Daseinologist</li>
                <li>gwak.fr | Achorawl</li>
                <li>DoKuNu</li>
                <li>NSxC | WhiteBl4ck</li>
                <li>Heapski</li>
                <li>SSD | Spicyy</li>
                <li>Platy | Harmeko</li>
                <li>Sommet | Themajin972</li>
              </ul>
            </Card>

            <section className='secondSection'>
              <div className='mb-30 '>
                <div>
                  <AnimatedText text={t('lastChanceToQualify')} />
                </div>
              </div>
            </section>
          </div>

          <div>
            <div className='p-relative'>
              <h2 className='p-absolution playerRank'>{t('lastChanceWinner')}</h2>
            </div>
            <div className='img-wrapper lcqWinner'>
              <img src={chaos} className="playerChara" alt="Daseinologist" />
              <img src={daseinologist} className="playerPhoto" alt="Daseinologist" />
              <p className='playerName'>Daseinologist</p>
            </div>
          </div>
        </div>
      </div>
    {/*

    https://photos.google.com/share/AF1QipNDW5nRXVhC4KBXYmgspv_SmyfwPJV-0-u1_rnFMGNMh_R8LgDth5zCfgTLyKTpyw?key=YVFlQ1BtakZSX2JPRGdOX0ozNC03MDJxZ0c0MHp3
    https://www.start.gg/tournament/final-lcq-pfl-road-to-evo-2023-espot-paris/event/top-8-pfl
    https://images.wondershare.com/mockitt/examples/behance-ui-01.jpg

    */}
    </>
  )
}
