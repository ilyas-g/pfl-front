import React from "react";
import { useQuery, gql } from "@apollo/client";

const CARD_QUERY = gql`
  query LeagueStandings {
    league(slug: "sweaty-splatoon-1v1-series") {
      id
      name
      city
      events (query: {
        perPage: 2
      }) {
        nodes {
          id
          name
          tournament {
            id
            name
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

export default function Card() {
  const { data, loading, error } = useQuery(CARD_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <p>ok {data.league.name}</p>
      <ul>
        {data.league.events.nodes.map((event) => {
          return (
          <>
            <li>{event.name}</li>
            {event.tournament.participants.nodes.map((participant) => {
              return (
                <p>{participant.player.gamerTag}</p>
              )
            })}
          </>
          )
        })}
      </ul>
    </div>
  );
}
