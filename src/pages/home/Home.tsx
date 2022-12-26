import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from "@apollo/client";

import AnimatePage from '../../components/animatePage/AnimatePage';
import Card from '../../components/card/Card'
import Spinner from '../../components/spinner/Spinner';
import Text from '../../components/text/Text'

import evoLogo from '../../assets/evo720.png';

import './style.css'
import { motion } from "framer-motion";

import useDeviceDetect from "../../utils/useDeviceDetect";
import {STANDING_QUERY} from "../../queries/queries"

export default function Home() {
  const [dataa, setData] = useState();

  const { data, loading, error } = useQuery(STANDING_QUERY);

  const { isMobile } = useDeviceDetect();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://pfl-back-2022.herokuapp.com/api/paragraphs`);
            setData(response.data);

        } catch (error) {
            console.log(error.message);
        }
    };
    fetchData();
}, []);

const standingsLink = `${import.meta.env.VITE_STANDING}`

if (loading) return <Spinner />;
if (error) return <pre>{error.message}</pre>
  return (
    <AnimatePage>
        {isMobile && <Text text='Prochains rankings : 13/01 10/02 17/02 10/03 17/03' />}
      <div className='homepage'>
        {/* {dataa.data.map((paragraph, index) => {
          return (<div key={index}>{paragraph.attributes.text_paragraph}</div>)
        })} */}

        <div className='firstSection'>
        {/* <h1>PARISIENNE FIGHTING <br />LEAGUE</h1> */}
            <p>12 RANKING OFFLINE (Octobre 2022 - Avril 2022)</p>
            <p>6 RANKING ONLINE (Janvier 2023 - Mars 2023)</p>
            <p>LE TOP 7 SERA QUALIFIE POUR LES PHASES FINALES <br/>+ 1 PLACE QUALIFICATIVE LORS DU LCQ (AVRIL 2023)</p>
            {/* <p>LE WINNER DE LA PFL aura son billet d'avion pour l'EVO 2023 !</p> */}
            <p>ROAD TO</p>
            <img src={evoLogo} alt="EVO 2023" className='evo'/>
        </div>
        <Card cardSkin="secondGame width360" title="Classement Guilty Gear Strive">
          <ul className="cards__front__classement">
            {data.league.standings.nodes.map((participant, index) => {
              return <li key={index}>{participant.entrant.name}</li>
            })}
          </ul>
        </Card>
    </div>
    </AnimatePage>
  )
}
