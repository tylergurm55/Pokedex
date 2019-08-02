import React from 'react';
import './css files/RightView.css';

const RightView = ({ pokemon }) => {
  const { id, name, sprite, type, abilities, abilitiesOne, weight, base_experience} = pokemon;


  return (
    <div className="right-view">
      <img src={sprite} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h1 className='data-name'>ID: {id} {name}</h1>
        <p className="data-char">Type: {type}</p>
        <p className="data-abil">Abilities: {abilities}</p>
        <p className="data-abil">Second Ability: {abilitiesOne}</p>
        <p className="weight">weight:{weight}</p>
        <p className="base_experience">Power Level:{base_experience}</p>
      </div>
    </div>
  )
}

export default RightView;