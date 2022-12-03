import React from 'react'
import AnimatePage from '../components/animatePage/AnimatePage'
import TournamentsList from '../components/tournamentsList/TournamentsList'

export default function Ranking() {
  return (
    <AnimatePage>
      <div>
        <TournamentsList />
      </div>
    </AnimatePage>
  )
}
