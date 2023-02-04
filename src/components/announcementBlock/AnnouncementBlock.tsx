import React from 'react'
import './style.css'

interface Props_Announcement {
    func: React.MouseEventHandler<HTMLButtonElement>;
    text: string;
}

const AnnouncementBlock = ({func, text}: Props_Announcement) => <button onClick={func} className='announcement'>{text}</button>

export default AnnouncementBlock
