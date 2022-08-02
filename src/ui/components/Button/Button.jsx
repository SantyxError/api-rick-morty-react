import React from 'react'
import './Button.css'

export const Button = ({ text, type, event }) => {
  return (
    <button className={`${type}-button`} onClick={event}>
      {text}
    </button>
  )
}
