import { useDispatch, useSelector } from 'react-redux';

import classes from './Pokedex.module.css';

import PokemonList from './PokemonList';
import Button from '../UI/Button';
import { pokemonActions } from '../../store/index';


function Pokedex() {
  const dispatch = useDispatch()
  const loadButton = useSelector(state => state.loadMore);
  const loadMoreHandler = () => {
    dispatch(pokemonActions.loadPokemon());
  };

  return (
    <section className={classes.pokedex}>
      <PokemonList />
      {loadButton && <Button onClick={loadMoreHandler} className={classes.loadBtn}>
        Load More Pokémon
      </Button>}
    </section>
  );
}

export default Pokedex;
