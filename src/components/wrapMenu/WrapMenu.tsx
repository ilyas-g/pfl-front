import React from 'react'
import { Link } from "react-router-dom";
import "./style.css"

export default function WrapMenu() {
    return (
        <nav className='main-menu'>
            <ul role="list">
                <li role="listitem" className="onglets"><Link to="/">Accueil</Link></li>
                <li role="listitem" className="onglets"><Link to="/">Ranking</Link></li>
                <li role="listitem" className="onglets"><Link to="/">Contact</Link></li>
            </ul>
        </nav>
    )
}
