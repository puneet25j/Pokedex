import classes from './Pokemon.module.css';

function Pokemon({id,name,image,types}) {
  return (
    <div className={classes.card}>
      <a href="./" className={classes['img-container']}>
        <img src={image} alt={name} className={classes.image} />
      </a>
      <div className={classes.info}>
        <p>#{id}</p>
        <h5>{name}</h5>
        <div className={classes.types}>
          {types.map((type) => (
            <span
              key={type.type.name}
              className={`${classes.type} ${classes[`background-color-${type.type.name}`]}`}
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
