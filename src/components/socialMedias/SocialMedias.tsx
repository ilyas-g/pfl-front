import React from 'react'
import "./style.css"

export default function SocialMedias() {
  return (
    <aside className="socials-aside socials-aside socials-aside_ready">
        <a href={import.meta.env.VITE_DISCORD} target="_blank" title="TrailerPFL2" aria-label="TrailerPFL2" className="pfl-trailer tooltip">
          <span className='icon-video-camera1'>
          </span>
            <span className="tooltiptext">Trailer de la PFL#2</span>
        </a>
        <a href={import.meta.env.VITE_DISCORD} target="_blank" title="Discord" aria-label="Discord"><span className='icon-discord'></span></a>
        <a href={import.meta.env.VITE_TWITCH} target="_blank" title="Twitch" aria-label="Twitch"><span className='icon-twitch'></span></a>
        <a href={import.meta.env.VITE_TWITTER} target="_blank" title="Twitter" aria-label="Twitter"><span className='icon-twitter'></span></a>
        <a href={import.meta.env.VITE_WEBSITE} target="_blank" title="Yuzu Gaming" aria-label="Twitter" className="yuzu-social"><span className='icon-yuzu'></span></a>
    </aside>
  )
}
