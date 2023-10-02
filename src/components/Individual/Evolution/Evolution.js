import React from 'react';

import { Link } from 'react-router-dom';
import classes from './evolution.module.scss';

function Evolution(props) {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`;

  return (
    <div className={props.className}>
      <Link to={'/' + props.id}>
        <div className={classes['image-container']}>
          <div className={classes['image-wrapper']}>
            <img src={url} alt={props.name} />
          </div>
        </div>
      </Link>
      <div>{props.name}</div>
      <div>#{String(props.id).padStart(4, '0')}</div>
    </div>
  );
}

export default Evolution;
