import React from 'react'
import './style.css'

const AnnouncementBlock = ({func, text}) => <button onClick={func} className='announcement'>{text}</button>

export default AnnouncementBlock
