import React from 'react';
import sprites from '../pics/sprites.png';
import './css files/PokeBox.css';
import { url } from 'inspector';

const PokeCell = ({ pokeClass, OnClicks }) => {
  const { idnum, backgroundPosition } = pokeClass;
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };

  return <button onClick={() => OnClicks(idnum)} style={style} className="poke-cell"></button>
};

export default PokeCell;