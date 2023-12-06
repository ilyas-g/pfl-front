import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";

import Card from '../../components/card/Card'
import Spinner from '../../components/spinner/Spinner';
import AnimatePage from '../../components/animatePage/AnimatePage'

import "./style.css"
import {CARD_QUERY} from "../../queries/queries"
import albums from "../../queries/data"

export default function Ranking() {
  const { data, loading, error } = useQuery(CARD_QUERY);

  if (loading) return <Spinner />;
  if (error) return <pre>{error.message}</pre>

  return (
    <AnimatePage>
      <div className='tournaments-list'>
        {data.league.events.nodes.map((event, indexx) => {
          const bracket = `${import.meta.env.VITE_STARTGG_URI}${event.slug}`
          return (
            <div key={indexx} className="tournament">
              <Card 
              cardSkin="secondGame" 
              link={bracket}
              title={event.tournament.name}>
                <ul className="cards__front__classement">
                  {event.standings.nodes.map((player) => {
                    return <li key={player.entrant.id}>{player.entrant.name}</li>
                  })}
                </ul>

                {albums.albums.map((album, index) => {
                  if (album.link !== undefined) {
                  if(index === indexx) {
                const alb = `${import.meta.env.VITE_ALBUM_LINK}${album.link}`
                return <a href={alb} className="btn" target="_blank">Photos</a>
                  }
                }
              })}
              </Card>
            </div>
          )
        })}
      </div>
    </AnimatePage>
  )
}
