import { gql } from "@apollo/client";

const CARD_QUERY = gql`
  query LeagueStandings {
    league(slug: "classement-parisienne-fighting-ligue-ggst-road-to-evo-2k23") {
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
    }
  }
`;

const STANDING_QUERY = gql`
  query LeagueStandings {
    league(slug: "classement-parisienne-fighting-ligue-ggst-road-to-evo-2k23") {
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

export { CARD_QUERY, STANDING_QUERY };
