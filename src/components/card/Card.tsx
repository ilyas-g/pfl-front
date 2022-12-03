import React from "react";
import { useQuery } from "@apollo/client";
import "./style.css"
import Spinner from "../spinner/Spinner";

import {CARD_QUERY} from "../../queries/queries"

interface Props {
  cardSkin: string;
}

function Card(props: Props): JSX.Element | null {
  const { data, loading, error } = useQuery(CARD_QUERY);

  if (loading) return <Spinner />;
  if (error) return <pre>{error.message}</pre>

  return (
  <>
      {/* <h1>{data.league.name}</h1> */}

      {data.league.events.nodes.map((event, index) => {
        const bracket = `${import.meta.env.VITE_STARTGG_URI}${event.slug}`

        return (
          <div key={index} className="tournament">
            <div className="cards">
              <div className={`cards__single ${props.cardSkin}`}>
                <div className="layer">
                  <div className="cards__front">
                    <div className="cards__front__header">
                      <h3>PFL - Ranking #10 ROAD TO EVO 2K23</h3>
                      <ul className="cards__front__classement">
                      {event.tournament.participants.nodes.map((participant, index) => {
                        return (
                          <li key={index}>{participant.player.gamerTag}</li>
                        )
                      })}
                      </ul>
                    </div>
                    <div className="cards__front__footer">
                      <a className="btn" href={bracket} target="_blank" rel="noreferrer">Bracket</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default Card;
