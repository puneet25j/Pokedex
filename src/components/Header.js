import { Link } from 'react-router-dom';

import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <Link to='/'>
        <img src="/assests/Pokédex_logo.png" alt="Pokedex" />
      </Link>
    </header>
  );
}

export default Header;
