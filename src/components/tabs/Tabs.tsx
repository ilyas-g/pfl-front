import React, { useState } from 'react'

export default function Tabs() {
  const [tabs, setTabs] = useState<boolean>(false)

  return (
    <div>
        <div onClick={() => {setTabs(true)}}>Onglet 1</div>
        <div onClick={() => {setTabs(false)}}>Onglet 2</div>

        <div>{tabs === true ? 'Onglet 1' : 'Onglet 2'}</div>
    </div>
  )
}
