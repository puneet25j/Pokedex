import classes from './Indiviual.module.css';

import EvolutionChain from './Evolution/EvolutionChain';
import Stats from './Stats/Stats';
import { Link } from 'react-router-dom';

function Individual({ pokemon }) {
  const description = pokemon.flavor_text_entries.find(
    (element) => element.language.name === 'en'
  );

  let descriptionElement = <p>Description not avialable</p>;
  if (description) {
    descriptionElement = <p>{description.flavor_text}</p>;
  }

  return (
    <div className={classes.main}>
      <div>
        <Link to={'/' + (pokemon.id - 1)}>
          {pokemon.id !== 1 && (
            <div>#{String(pokemon.id - 1).padStart(4, '0')}</div>
          )}
        </Link>
        <Link to={'/' + (pokemon.id + 1)}>
          {pokemon.id !== 1010 && (
            <div>#{String(pokemon.id + 1).padStart(4, '0')}</div>
          )}
        </Link>
      </div>
      <div>
        <h1>{pokemon.name}</h1>
        <h1>#{String(pokemon.id).padStart(4, '0')}</h1>
      </div>
      <div className={classes.img_container}>
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
        />
      </div>
      <div className={classes.detail_container}>
        {descriptionElement}
        <div className={classes.types}>
          {pokemon.types.map((e) => (
            <span
              key={e.type.name}
              className={`${classes.type} ${[
                `background-color-${e.type.name}`,
              ]}`}
            >
              {e.type.name}
            </span>
          ))}
        </div>
        <div>Height : {pokemon.height / 10} m</div>
        <div>Weight :{pokemon.weight / 10} kg</div>
        <div>Gen : {pokemon.generation.name}</div>
      </div>

      <Stats stats={pokemon.stats} />
      <EvolutionChain url={pokemon['evolution_chain'].url} />
    </div>
  );
}

export default Individual;
