import React from 'react'
import { Link } from "react-router-dom";
import "./style.css"

export default function SocialMedias() {
  return (
    <aside className="socials-aside socials-aside socials-aside_ready">
        <Link to="https://discord.gg/27ewjWNe3c" target="_blank" title="Discord" aria-label="Discord"><span className='icon-discord'></span></Link>
        <Link to="https://www.twitch.tv/flashno47" target="_blank" title="Twitch" aria-label="Twitch"><span className='icon-twitch'></span></Link>
        <Link to="https://twitter.com/Yuzu_Gaming" target="_blank" title="Twitter" aria-label="Twitter"><span className='icon-twitter'></span></Link>
    </aside>
  )
}
