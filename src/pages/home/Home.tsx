import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from "@apollo/client";

import AnimatePage from '../../components/animatePage/AnimatePage';
import Card from '../../components/card/Card'
import Spinner from '../../components/spinner/Spinner';

import evoLogo from '../../assets/evo720.png';

import './style.css'
import { motion } from "framer-motion";

import {STANDING_QUERY} from "../../queries/queries"

export default function Home() {
  const [dataa, setData] = useState();

  const { data, loading, error } = useQuery(STANDING_QUERY);

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
        {/* <h1>PARISIENNE FIGHTING LEAGUE</h1> */}
        {/* {dataa.data.map((paragraph, index) => {
          return (<div key={index}>{paragraph.attributes.text_paragraph}</div>)
        })} */}

        <div className='secondSection'>
          <Card cardSkin="firstGame width360" link={standingsLink} title="Classement Dragon Ball FighterZ">
            <ul className="cards__front__classement">
              {data.league.standings.nodes.map((participant, index) => {
                return <li key={index}>{participant.entrant.name}</li>
              })}
            </ul>
          </Card>
          <Card cardSkin="secondGame width360" link={standingsLink} title="Classement Guilty Gear Strive">
            <ul className="cards__front__classement">
              {data.league.standings.nodes.map((participant, index) => {
                return <li key={index}>{participant.entrant.name}</li>
              })}
            </ul>
          </Card>
        </div>

        <div className='firstSection p-absolute'>
          <p>Road to </p>
          <img src={evoLogo} alt="EVO 2023" className='evo'/>
        </div>
    </div>
    </AnimatePage>
  )
}
