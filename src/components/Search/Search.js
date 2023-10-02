import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import classes from './Search.module.css';

import Searchbar from './Searchbar';
import Sortbar from './Sortbar';

function Search() {
  const allPokemons = useSelector((state) => state.allPokemon);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (allPokemons.length) {
      setDisabled(false);
    }
  }, [allPokemons]);

  return (
    <>
      {disabled && <div className={classes.loader}>Wait for data to load</div>}
      <section className={classes.container}>
        <Searchbar className={classes.items} disabled={disabled} />
        <Sortbar className={classes.items} disabled={disabled}/>
      </section>
    </>
  );
}

export default Search;
