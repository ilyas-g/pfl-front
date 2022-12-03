import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AnimatePage from '../../components/animatePage/AnimatePage';

import evoLogo from '../../assets/evo720.png';
import Spinner from '../../components/spinner/Spinner';

import './style.css'
import { motion } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://pfl-back-2022.herokuapp.com/api/paragraphs`);
            setData(response.data);

            setIsLoading(false);

        } catch (error) {
            console.log(error.message);
        }
    };
    fetchData();
}, []);

  return (
    <AnimatePage>
    <div>
      {/* <h1>PARISIENNE FIGHTING LEAGUE</h1> */}

      {/* {isLoading === true ? (
        <Spinner />
      ) : ( */}
        <>
                  {/* {data.data.map((paragraph, index) => {
            return (<div key={index}>{paragraph.attributes.text_paragraph}</div>)
          })} */}
        <p>kdfgjh</p>
        <img src={evoLogo} alt="EVO 2023" className='evo'/>
        </>
      {/* )} */}
    </div>
    </AnimatePage>
  )
}
