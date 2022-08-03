import React from 'react'
import './Card.css'
import { Button } from '../Button/Button'

export const Card = ({ name, image, specie, gender }) => {
  return (
    <div className="character-card">
      <img className="card-image" src={image} alt={name} />

      <div className="character-info">
        <p className="name">
          <span>Name: </span> {name}
        </p>

        <p className="specie">
          <span>Specie: </span>
          {specie}
        </p>

        <p className="gender">
          <span>Gender: </span>
          <img src={`./assets/icons/${gender}.svg`} alt={gender} />
        </p>

        <Button text="+ info" type="primary" />
      </div>
    </div>
  )
}
