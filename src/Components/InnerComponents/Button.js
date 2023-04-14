import React from 'react'
import './InnerStyles/Button.css'

export default function Button(props) {
  return (
    <div>
        <button className='sub-btn'>{props.info}</button>
    </div>
  )
}
