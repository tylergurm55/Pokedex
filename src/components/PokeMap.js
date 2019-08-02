import React from 'react';
import PokeCell from './PokeBox';
import { pokeBalls } from '../pokeBalls';
import './css files/PokeMap.css';

const PokeBox = ({ OnClicks }) => {
  const balls = pokeBalls.map(pokeClass => {
    return (
      <PokeCell 
        key={pokeClass.id} 
        pokeClass={pokeClass} 
        OnClicks={OnClicks}
      />
    );
  });

  return (
    <article className="poke-list">
      {balls}
    </article>
  )
}

export default PokeBox;
