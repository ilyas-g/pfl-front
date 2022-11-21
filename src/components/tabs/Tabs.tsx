import React, { useState } from 'react'
import "./style.css"

export default function Tabs() {
  const [tabs, setTabs] = useState<boolean>(false)

  return (
    <>
      <div className='tabs'>
          <div className='tab' onClick={() => {setTabs(true)}}>Onglet 1</div>
          <div className='tab' onClick={() => {setTabs(false)}}>Onglet 2</div>
      </div>
      <div>{tabs === true ? 'Onglet 1' : 'Onglet 2'}</div>
    </>
  )
}
