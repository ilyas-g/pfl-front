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
import {STANDING_QUERY} from "../../queries/queries"
export const Finales = () => {
  const { data, loading, error } = useQuery(STANDING_QUERY);
  const [ranking, setRanking] = useState<boolean>(false)
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className='finales'>
        <h1 className='text-center'>Phases finales</h1>

        <div className='lcq'>
          <div>
            <Card cardSkin="secondGame width360" title={t('standingLCQ')}>
              <ul className="cards__front__classement">
                {data.league.standings.nodes.map((participant, index) => {
                  return <li key={index}>{participant.entrant.name}</li>
                })}
              </ul>
            </Card>

            <section className='secondSection'>
              <div className='mb-30 '>
                <div>
                  <AnimatedText text="Une dernière chance de se qualifier pour les finales " />
                </div>
              </div>
            </section>
          </div>

          <div>
            <div className='p-relative'>
              <h2 className='p-absolution'>Gagnant des Last Chance Qualifier</h2>
            </div>
            <div className='img-wrapper'>
              <img src={chaos} className="lcqChara" alt="Daseinologist" />
              <img src={daseinologist} className="lcqPhoto" alt="Daseinologist" />
              <p className='lcqWinner'>Daseinologist</p>
            </div>
          </div>
        </div>

        <div className='top'>
          <h2 className='text-center'>Résultat des finales</h2>

          <div className='topPFL'>
            <div className='tieplace'>
              <div className='img-wrapper ror'>
                <img src={ky} className="podiumChara" alt="Ky Guilty Gear Strive" />
                <img src={rayane} className="podiumPhoto" alt="Rayane ROR" />
                <p className='podiumWinner'>ROR2000</p>
              </div>
              <div className='img-wrapper arefu'>
                <img src={giovanna} className="podiumChara" alt="Giovanna Guilty Gear Strive" />
                <img src={arefu} className="podiumPhoto" alt="Arefu" />
                <p className='podiumWinner'>Arefu</p>
              </div>
            </div>
            <div className='tieplace'>
              <div className='img-wrapper neos'>
                <img src={leo} className="podiumChara" alt="Leo Guilty Gear Strive" />
                <img src={neos} className="podiumPhoto" alt="Neos" />
                <p className='podiumWinner'>Neos</p>
              </div>
              <div className='img-wrapper crillou'>
                <img src={bridget} className="podiumChara" alt="Bridget" />
                <img src={crillou} className="podiumPhoto" alt="Crillou" />
                <p className='podiumWinner'>Crillou</p>
              </div>
            </div>
          </div>





          <div className='topPFL'>
            <div className='tieplace'>
              <div className='img-wrapper patachu'>
                <img src={sin} className="podiumChara" alt="Sin Guilty Gear Strive" />
                <img src={patachu} className="podiumPhoto" alt="Patachu" />
                <p className='podiumWinner'>Patachu</p>
              </div>
            </div>
            <div className='tieplace'>
              <div className='img-wrapper gagayoux'>
                <img src={chipp} className="podiumChara" alt="Chipp Guilty Gear Strive" />
                <img src={gagayoux} className="podiumPhoto" alt="Gagayoux" />
                <p className='podiumWinner'>Gagayoux</p>
              </div>
            </div>
            <div className='tieplace'>
              <div className='img-wrapper dase'>
                <img src={chaos} className="podiumChara" alt="Happy Chaos Guilty Gear Strive" />
                <img src={daseinologist} className="podiumPhoto" alt="Daseinologist" />
                <p className='podiumWinner'>Daseinologist</p>
              </div>
            </div>
          </div>

          <div className='topPFL champ'>

              <div className='img-wrapper skyll'>
                <img src={sol} className="podiumChara" alt="Sol Guilty Gear Strive" />
                <img src={skyll} className="podiumPhoto" alt="Skyll" />
                <p className='podiumWinner'>Skyll</p>
              </div>

            <section className='secondSection'>
              <div className='mb-30 '>
                <div>
                  <AnimatedText text="Félicitations à Skyll qui gagne cette seconde édition de la Parisienne Fighting Ligue !" />
                  <AnimatedText text="Il remporte également un voyage pour l'EVO 2023 !" />
                </div>
              </div>
            </section>
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
