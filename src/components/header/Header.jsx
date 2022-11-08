import React from 'react'
import { Link } from "react-router-dom";
import "./style.css"

export default function Header() {
  return (
    <header>
        <img src="https://yuzugaming.com/site/templates/assets/ope/pfl/pfl-logo-crop.png" width={115}/>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/">Rankings</Link>
            <Link to="/">Contact</Link>

        </nav>
    </header>
  )
}
