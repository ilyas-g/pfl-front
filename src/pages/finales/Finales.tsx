import React, {useState} from 'react';

import "./style.css"

import daseinologist from '../../assets/finales/daseinologist.jpg';
import gagayoux from '../../assets/finales/gagayoux.jpg';
import patachu from '../../assets/finales/patachu.jpg';
import skyll from '../../assets/finales/skyll.jpg';

import chaos from '../../assets/finales/ggst-chaos.png';
import chipp from '../../assets/finales/ggst-chipp.png';
import sol from '../../assets/finales/ggst-sol.png';

import Card from '../../components/card/Card';

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
          <Card cardSkin="secondGame width360" title={t('standingLCQ')}>
            <ul className="cards__front__classement">
              {data.league.standings.nodes.map((participant, index) => {
                return <li key={index}>{participant.entrant.name}</li>
              })}
            </ul>
          </Card>

          <div>
            <h2>Gagnant des Last Chance Qualifier</h2>
            <div className='podium'>
            <div className='img-wrapper'>
              <img src={chaos} className="lcqChara" alt="Daseinologist" />
              <img src={daseinologist} className="lcqPhoto" alt="Daseinologist" />
              <p className='lcqWinner'>Daseinologist</p>
            </div></div>
          </div>
        </div>

        <div className='podium'>
          <div>
            <div className='img-wrapper'>
              <img src={chipp} className="lcqChara" alt="Daseinologist" />
              <img src={gagayoux} className="lcqPhoto" alt="Gagayoux" />
              <p className='lcqWinner'>Gagayoux</p>
            </div>
            <div className='img-wrapper'>
              <img src={sol} className="lcqChara" alt="Daseinologist" />
              <img src={skyll} className="lcqPhoto" alt="Skyll" />
              <p className='lcqWinner'>Skyll</p>
            </div>
        </div>
            <div className='img-wrapper'>
              <img src={chaos} className="lcqChara" alt="Daseinologist" />
              <img src={patachu} className="lcqPhoto" alt="Patachu" />
              <p className='lcqWinner'>Patahu</p>
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
