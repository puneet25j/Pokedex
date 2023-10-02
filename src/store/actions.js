import { pokemonActions } from './index';

export const fecthAllPokemons = () => {
  return async (dispatch) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1010');
    const data = await response.json();

    const pokemonData = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      })
    );

    let pokemons = pokemonData.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other['official-artwork'],
        types: pokemon.types,
        weight: pokemon.weight,
        height: pokemon.height,
        stats: pokemon.stats,
      };
    });

    localStorage.setItem('pokemons',JSON.stringify(pokemons));
    dispatch(pokemonActions.saveAllPokemon(pokemons))
  };
};

export const fetchPokemons = () => {
  return async (dispatch) => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
    const data = await response.json();

    const pokemonData = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      })
    );

    let pokemons = pokemonData.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other['official-artwork'],
        types: pokemon.types,
        weight: pokemon.weight,
        height: pokemon.height,
        stats: pokemon.stats
      };
    });

    dispatch(pokemonActions.initialFetchPokemon(pokemons));
    dispatch(pokemonActions.increaseIndex(12));

    if (!localStorage.getItem('pokemons')) {
      dispatch(fecthAllPokemons());
    }
  };
};
