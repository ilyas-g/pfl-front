import React from 'react'
import "./style.css"

import useDeviceDetect from "../../utils/useDeviceDetect";

type PropsSocial = {
  func?: React.MouseEventHandler<HTMLButtonElement>
}

export default function SocialMedias({func}: PropsSocial) {
  const { isMobile } = useDeviceDetect();

  return (
    <div className="socials-aside socials-aside socials-aside_ready">

        {!isMobile ?
          <button type="button" role="button" aria-pressed="false"className="pfl-trailer tooltip icon-video-camera1" onClick={func}></button>
          : <a href="https://www.youtube.com/watch?v=FZgkhis5Cdg" target="_blank" title="PFL Trailer" aria-label="PFL Trailer" className='pfl-trailer tooltip icon-video-camera1'></a>
        }

        {/* <a href={import.meta.env.VITE_DISCORD} target="_blank" title="Discord Yuzu" aria-label="Discord" className='icon-discord'></a> */}
        <a href={import.meta.env.VITE_TWITCH} target="_blank" title="Twitch's FlashNo47" aria-label="Twitch" className='icon-twitch'></a>
        {/* <a href={import.meta.env.VITE_TWITTER} target="_blank" title="Twitter Yuzu" aria-label="Twitter" className='icon-twitter'></a> */}
        <a href={import.meta.env.VITE_WEBSITE} target="_blank" title="Yuzu Gaming website" aria-label="Twitter" className="yuzu-social icon-yuzu"></a>
        <a href={import.meta.env.VITE_NSXC} target="_blank" title="NSxC Twitter" aria-label="NSxC" className="nsxc-social icon-nsxc"></a>
    </div>
  )
}
