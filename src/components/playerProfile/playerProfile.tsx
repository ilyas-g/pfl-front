import React from 'react'
import './style.css'

interface Props {
  profileSkin: string | undefined;
  place: IntrinsicAttributes | undefined,
  firstImg?: string
  secondImg: string
  name: string
}

export default function playerProfile({profileSkin, place, firstImg, secondImg, name}: Props) {
  return (
    <div className={`img-wrapper ${profileSkin}`}>
      <p className='playerRank'>{place}</p>
      <img src={firstImg} className="playerChara" alt={firstImg} />
      <img src={secondImg} className="playerPhoto" alt={name} />
      <p className='playerName'>{name}</p>
  </div>
  )
}
