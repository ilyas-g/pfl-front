import React, { useState } from 'react'

import Card from '../card/Card'
import Tabs from '../tabs/Tabs'
import "./style.css"

export default function TournamentsList() {
  const [tabs, setTabs] = useState<boolean>(true)

    return (
        <>
            {/* <Tabs /> */}
          <div className='tabs'>
            <div className={`tab ${tabs === true ? 'active' : ''}`} onClick={() => {setTabs(true)}}>Dragon Ball FighterZ</div>
            <div className={`tab ${tabs === false ? 'active' : ''}`} onClick={() => {setTabs(false)}}>Guilty Gear Strive</div>
          </div>
          <div className='tournaments-list'>
              {tabs === true ? <Card cardSkin="firstGame" />
                  : <Card cardSkin="secondGame" />}
          </div>
        </>
    )
}
