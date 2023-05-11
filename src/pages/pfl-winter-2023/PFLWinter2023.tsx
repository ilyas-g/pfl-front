import React from 'react'
import "./style.css"
import Ranking from './RankingWinter2023'
import { Finales } from './FinalesWinter2023'
import HomeWinter2023 from './HomeWinter2023'



export default function PFLWinter2023() {
  return (
    <>
        <HomeWinter2023 />
        <Finales />
        <Ranking />
        {/* https://codepen.io/thecroft/pen/gOBzdXw */}
    </>
  )
}
