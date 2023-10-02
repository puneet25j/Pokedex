import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchPokemons } from '../store/actions';

import Pokedex from '../components/Pokedex/Pokedex';
import Search from '../components/Search/Search';
import { pokemonActions } from '../store';

function HomePage() {
  const disptach = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('pokemons')) {
      disptach(pokemonActions.loadPokemon());
    } else {
      disptach(fetchPokemons());
    }
  }, [disptach]);

  return (
    <>
      <Search />
      <Pokedex />
    </>
  );
}

export default HomePage;
