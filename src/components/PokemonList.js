import { useState, useEffect } from 'react';

import classes from './PokemonList.module.css';
import Pokemon from './Pokemon';

function PokemonList() {
  const [loadPoke, setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  const [pokeResult, setPokeResult] = useState([]);

  const getPokemons = async () => {
    const response = await fetch(loadPoke);
    const data = await response.json();
    setLoadPoke(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await response.json();
        setPokeResult((prev) => [...prev, data]);
      });
    }

    createPokemonObject(data.results);
    await console.log(pokeResult);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className={classes.container}>
      {pokeResult.map((pokemon,index) => (
        <Pokemon
          key={index}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
          type={pokemon.types[0].type.name}
        />
      ))}

      <button className="load-more" onClick={() => getPokemons()}>
        More Pokemons
      </button>
    </div>
  );
}

export default PokemonList;
