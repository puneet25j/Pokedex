import { useState, useEffect, Fragment } from 'react';

import classes from './PokemonList.module.css';
import Pokemon from './Pokemon';
import Button from '../UI/Button';

function PokemonList() {
  const [pokeResult, setPokeResult] = useState([]);
  const [nextUrl, setNextUrl] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=151'
  );

  const fetchPokemons = async () => {
    const response = await fetch(nextUrl);
    const data = await response.json();
    setNextUrl(data.next);

    const pokemonData = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      })
    );

    let pokemonObjects = pokemonData.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other['official-artwork'].front_default,
        types: pokemon.types,
      };
    });

    console.log(pokemonObjects);
    setPokeResult(prevState => [...prevState,...pokemonObjects]);
  };

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className={classes.list}>
        {pokeResult.map((pokemon) => (
          <Pokemon
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
          />
        ))}
      </div>
      <Button onClick={fetchPokemons} className={classes.loadBtn}>
        Load More Pokémon
      </Button>
    </Fragment>
  );
}

export default PokemonList;
