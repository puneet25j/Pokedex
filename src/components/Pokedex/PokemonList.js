import { Fragment } from 'react';

import { useSelector } from 'react-redux';

import classes from './PokemonList.module.css';
import Pokemon from './Pokemon';

function PokemonList() {
  const displayedPokemons = useSelector((state) => state.filtered);

  return (
    <Fragment>
      <div className={classes.list}>
        {displayedPokemons.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image.front_default}
            types={pokemon.types}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default PokemonList;
