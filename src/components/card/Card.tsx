import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./style.css"

const CARD_QUERY = gql`
  query LeagueStandings {
    league(slug: "sweaty-splatoon-1v1-series") {
      id
      name
      city
      events (query: {
        perPage: 5
      }) {
        nodes {
          id
          name
          slug
          videogame {
            id
            name
          }
          tournament {
            id
            name
            slug
            numAttendees
            state
            participants (query: {
              perPage: 8
            }) {
              nodes {
                id
                player {
                  id
                  prefix
                  gamerTag
                  user {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }
      standings (query: {
        page: 1,
        perPage: 8
      }) {
        pageInfo {
          totalPages
          total
        }
        nodes {
          id
          placement
          entrant {
            id
            name
          }
        }
      }
    }
  }
`;

interface Props {
  cardSkin: string;
}

export default function Card(props: Props): JSX.Element | null {

  const { data, loading, error } = useQuery(CARD_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
  <>
      {/* <h1>{data.league.name}</h1> */}

      {data.league.events.nodes.map((event) => {
        const bracket = `${import.meta.env.VITE_STARTGG_URI}${event.slug}`

        return (
          <div className="tournament">
            <div className="cards">
              <div className={`cards__single ${props.cardSkin}`}>
                <div className="layer">
                  <div className="cards__front">
                    <div className="cards__front__header">
                      <h3>{event.tournament.name}</h3>
                      <ul className="cards__front__classement">
                      {event.tournament.participants.nodes.map((participant) => {
                        return (
                          <li>{participant.player.gamerTag}</li>
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
