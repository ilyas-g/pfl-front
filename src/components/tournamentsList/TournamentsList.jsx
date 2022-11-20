import React from 'react'
import Card from '../card/Card'
import Tabs from '../tabs/Tabs'
import "./style.css"

export default function TournamentsList() {
    return (
        <>
            <Tabs />
        <div className='tournaments-list'>
            <Card />
        </div>
        </>
    )
}
