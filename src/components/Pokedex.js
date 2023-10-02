import { Fragment } from 'react';
import classes from './Pokedex.module.css';

import PokemonList from './PokemonList';
import Search from './Search';

function Pokedex(props) {
  return (
    <Fragment>
      <Search />
      <section className={classes.pokedex}>
        <PokemonList />
      </section>
    </Fragment>
  );
}

export default Pokedex;
