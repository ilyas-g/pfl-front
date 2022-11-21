import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../components/card/Card';
import TournamentsList from '../components/tournamentsList/TournamentsList';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState();
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://pfl-back-2022.herokuapp.com/api/restaurants`);
            setData(response.data);

            setIsLoading(false);

        } catch (error) {
            console.log(error.message);
        }
    };
    fetchData();
}, []);

  return (
    <div>
      {/* <h1>PARISIENNE FIGHTING LEAGUE</h1> */}
      <TournamentsList />
      {/* <Card /> */}
      {isLoading === true ? (
        <h1>En cours de chargement</h1>
      ) : (
        <>
        <ul>
          {data.data.map((restaurant, index) => {
            return (
          <li key={index}>{restaurant.attributes.name}</li>
            )
          })}
        </ul> 
        </>
      )}
    </div>
  )
}
