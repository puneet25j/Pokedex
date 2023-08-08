import classes from "./Pokemon.module.css"

function Pokemon(props){
    return <li>
        <img src={props.image} alt={props.name} className={classes.image}/>
        <div className={classes.info}>
            <p>#{props.id}</p>
            <h5>{props.name}</h5>
            <div className={classes.types}>{props.type1}</div>
        </div>
    </li>
}

export default Pokemon;