import { useLoaderData } from 'react-router-dom';

import Individual from '../components/Individual/Individual';

function PokemonPage() {
  const data = useLoaderData();
  console.log(data);

  return <Individual pokemon={data}/>;
}

export default PokemonPage;

export async function loader({ request, params }) {
  const id = params.pokemonId;

  const response1 = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
  const response2 = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + id);

  const data1 = await response1.json();
  const data2 = await response2.json();
  return {...data1,...data2};
}
