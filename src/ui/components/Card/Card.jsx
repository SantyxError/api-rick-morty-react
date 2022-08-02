import React from 'react'
import './Card.css'
import { Button } from '../Button/Button'

export const Card = ({ name, image, specie, origin }) => {
  return (
    <div className="character-card">
      <h1 className="card-name">{name}</h1>
      <img className="card-image" src={image} alt={name} />

      <div className="character-info">
        <div className="specie">
          <p className="title-specie">Specie: </p>
          <p className="card-specie">{specie}</p>
        </div>

        <div className="origin">
          <p className="title-origin">Origin: </p>
          <p className="card-origin">{origin}</p>
        </div>

        <Button text="+ info" type="primary" />
      </div>
    </div>
  )
}
