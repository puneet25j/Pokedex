import classes from './Button.module.css'

function Button(props){
    return <button onClick={props.onClick} className={classes.btn}>
        {props.children}
      </button>
}

export default Button;