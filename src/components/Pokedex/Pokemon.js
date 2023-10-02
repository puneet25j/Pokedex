import { Link } from 'react-router-dom';

import classes from './Pokemon.module.css';

function Pokemon({ id, name, image, types }) {
  return (
    <div className={classes.card}>
      <Link to={'/' + id} className={classes.link}>
        <img src={image} alt={name} className={classes.image} />
      </Link>
      <div className={classes.info}>
        <p>#{String(id).padStart(4, '0')}</p>
        <h5>{name}</h5>
        <div className={classes.types}>
          {types.map((type) => (
            <span
              key={type.type.name}
              className={`${classes.type} ${[
                `background-color-${type.type.name}`,
              ]}`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
