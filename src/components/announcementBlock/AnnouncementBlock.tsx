import React from 'react'
import './style.css'


export default function AnnouncementBlock({func}) {
  return (
      <button onClick={func} className='announcement'>
          Register for the next tournament
          {/* S'inscrire au prochain tournoi */}
      </button>
  )
}
