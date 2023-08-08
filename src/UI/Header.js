import classes from './Header.module.css'

function Header(){
    return (
      <header className={classes.header}>
        <img
          src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
          alt="Pokedex"
        />
      </header>
    );
}

export default Header;