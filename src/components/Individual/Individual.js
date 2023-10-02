import classes from '../../styles/pages/_pokemon.module.scss';

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
    <div className={`${classes.main} pokemon-page`}>
      <div className="links">
        {pokemon.id !== 1 && (
          <Link to={'/' + (pokemon.id - 1)} className="prev">
            <div>#{String(pokemon.id - 1).padStart(4, '0')}</div>
          </Link>
        )}
        {pokemon.id !== 1010 && (
          <Link to={'/' + (pokemon.id + 1)} className="next">
            <div>#{String(pokemon.id + 1).padStart(4, '0')}</div>
          </Link>
        )}
      </div>
      <div className="card">
        <div className="name">
          <h1>
            {pokemon.name} <span> #{String(pokemon.id).padStart(4, '0')}</span>
          </h1>
        </div>
        <div className="img-container">
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
          />
        </div>
        <div className={`${classes.detail_container} details-container`}>
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
          <div>
            <span className="label">Height</span> {pokemon.height / 10} m
          </div>
          <div>
            <span className="label">Weight</span> {pokemon.weight / 10} kg
          </div>
          <div>
            <span className="label">Gen</span> {pokemon.generation.name}
          </div>
        </div>

        <Stats stats={pokemon.stats} />
      </div>
      <EvolutionChain url={pokemon['evolution_chain'].url} />
    </div>
  );
}

export default Individual;
