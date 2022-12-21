import React from 'react'
import "./style.css"

interface Props {
    text: string | undefined;
  }

export default function Text({text}: Props): JSX.Element | null {
  return (
    <div className='texti'>{text}</div>
  )
}
