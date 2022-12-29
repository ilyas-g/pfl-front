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
      <div className='homepage'>
        {/* {dataa.data.map((paragraph, index) => {
          return (<div key={index}>{paragraph.attributes.text_paragraph}</div>)
        })} */}

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
            <p>12 Ranking Offline (Octobre 2022 - Avril 2022)</p>
            <p>6 Ranking Online (Janvier 2023 - Mars 2023)</p>
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
            <p>Le Top 7 sera qualifié pour les phases finales</p>
            <p>+1 place qualificative lors du LCQ (Avril 2023)</p>
          </div>
        </div>
        <div className='mb-30 d-flex'>
          <div>
            <p>Le winner de la PFL aura son billet d'avion pour l'EVO 2023</p>
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
