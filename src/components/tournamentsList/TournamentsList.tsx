import React, { useState } from 'react'
import { useQuery } from "@apollo/client";

import Card from '../card/Card'
import Spinner from '../../components/spinner/Spinner';

import "./style.css"

import {CARD_QUERY} from "../../queries/queries"

export default function TournamentsList() {
  const [tabs, setTabs] = useState<boolean>(true)
  const { data, loading, error } = useQuery(CARD_QUERY);

  if (loading) return <Spinner />;
  if (error) return <pre>{error.message}</pre>

  return (
    <>
      <div className='tabs'>
        <div className={`tab ${tabs === true ? 'active' : ''}`} onClick={() => {setTabs(true)}}>Dragon Ball FighterZ</div>
        <div className={`tab ${tabs === false ? 'active' : ''}`} onClick={() => {setTabs(false)}}>Guilty Gear Strive</div>
      </div>
      {data.league.events.nodes.map((event, index) => {
        const bracket = `${import.meta.env.VITE_STARTGG_URI}${event.slug}`
        return (
          <>
            {/* <div className='tournaments-list'> */}
              {tabs === true ? 
              <Card cardSkin="firstGame" link={bracket}>
                <ul className="cards__front__classement">
                  {event.tournament.participants.nodes.map((participant, index) => {
                    return <li key={index}>{participant.player.gamerTag}</li>
                  })}
                </ul>
              </Card>
            : <Card cardSkin="secondGame" link={bracket}>
                <ul className="cards__front__classement">
                  {event.tournament.participants.nodes.map((participant, index) => {
                    return <li key={index}>{participant.player.gamerTag}</li>
                  })}
                </ul>
              </Card>
              }
            {/* </div> */}
            </>
        )
      })}
    </>
  )
}
