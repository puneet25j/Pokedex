import classes from './Header.module.css'

function Header(){
    return (
      <header className={classes.header}>
        <img src="/assests/Pokédex_logo.png" alt="Pokedex" />
      </header>
    );
}

export default Header;