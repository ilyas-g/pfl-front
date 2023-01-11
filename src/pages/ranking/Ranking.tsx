import React, { useState } from 'react'
import { useQuery } from "@apollo/client";

import Card from '../../components/card/Card'
import Spinner from '../../components/spinner/Spinner';
import AnimatePage from '../../components/animatePage/AnimatePage'

import "./style.css"
import {CARD_QUERY} from "../../queries/queries"
import TournamentEmbed from '../../components/tournamentEmbed/TournamentEmbed';

export default function Ranking() {
  const [tabs, setTabs] = useState<boolean>(true)
  const { data, loading, error } = useQuery(CARD_QUERY);

  if (loading) return <Spinner />;
  if (error) return <pre>{error.message}</pre>

  return (
    <AnimatePage>
      <div className='tournaments-list'>
        {data.league.events.nodes.map((event, index) => {
          const bracket = `${import.meta.env.VITE_STARTGG_URI}${event.slug}`

          return (
            <div key={index} className="tournament">
              <Card cardSkin="secondGame" link={bracket} title={event.tournament.name}>
                <ul className="cards__front__classement">
                  {event.standings.nodes.map((player, index) => {
                    return <li key={index}>{player.entrant.name}</li>
                  })}
                </ul>
              </Card>
            </div>
          )
        })}
      </div>
      {/* <TournamentEmbed /> */}
    </AnimatePage>
  )
}
