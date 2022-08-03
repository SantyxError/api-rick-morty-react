import React from 'react'
import './Button.css'

export const Button = ({ text, type, event }) => {
  return (
    <button className={`${type}-button draw-border`} onClick={event}>
      {text}
    </button>
  )
}
