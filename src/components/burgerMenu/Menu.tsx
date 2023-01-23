import React from 'react'
import WrapMenu from '../wrapMenu/WrapMenu'
import "./style.css"

export default function Menu({func}) {
  return (
    <div className='menu'>
      <WrapMenu menuFunc={func}/>
      <span onClick={func} className="icon-cross"></span>
    </div>
  )
}
