import { Fragment } from 'react';

import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import classes from './PokemonList.module.css';
import Pokemon from './Pokemon';

function PokemonList() {
  const displayedPokemons = useSelector((state) => state.filtered);

  return (
    <Fragment>
      <TransitionGroup component="div" className={classes.list}>
        {displayedPokemons.map((pokemon) => (
          <CSSTransition key={pokemon.id} classNames="fade" timeout={5000}>
            <Pokemon
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image.front_default}
              types={pokemon.types}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Fragment>
  );
}

export default PokemonList;
