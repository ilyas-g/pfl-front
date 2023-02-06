import React from 'react'
import WrapMenu from '../wrapMenu/WrapMenu'
import "./style.css"

type PropsMenu = {
  func?: React.MouseEventHandler<HTMLLIElement>
}

export default function Menu({func}: PropsMenu) {
  return (
    <div className='menu'>
      <WrapMenu menuFunc={func}/>
      <span onClick={func} className="icon-cross"></span>
    </div>
  )
}
