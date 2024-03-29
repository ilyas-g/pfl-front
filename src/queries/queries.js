import { gql } from "@apollo/client";

const CARD_QUERY = gql`
query LeagueStandings {
  league(slug: "classement-parisienne-fighting-ligue-ggst-road-to-evo-2k23") {
    id
    name
    videogames {
      id
      name
    }
    events (query: {
      perPage: 16
    }) {
      nodes {
        id
        name
        slug
        tournament {
          id
          name
          slug
          numAttendees
          state
        }
        standings (query: {
          page: 1
          perPage: 8
        }) {
          nodes {
            id
            entrant {
              id
              name
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
        perPage: 7
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

const LCQ_QUERY = gql`
query EventStandings {
  event(slug: "tournament/final-lcq-pfl-road-to-evo-2023-espot-paris/event/last-chance-qualifier-pfl") {
    id
    name
    slug
    standings(query: {
      perPage: 8,
      page: 1
    }){
      nodes {
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

export { CARD_QUERY, STANDING_QUERY, LCQ_QUERY };
