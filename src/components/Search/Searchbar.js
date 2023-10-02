import { useRef } from 'react';
import { useDispatch } from 'react-redux';


import classes from './Seachbar.module.css';

import SearchIcon from '../UI/SearchIcon';
import { pokemonActions } from '../../store';


function Searchbar(props) {
  const dispatch = useDispatch();
  const searchInputRef = useRef();

  const keyDownHandler = (e) => {
    if(e.key === 'Enter'){
      searchHandler();
    }
  }

  const searchHandler = ()=> {
    const searchData = searchInputRef.current.value;
    dispatch(pokemonActions.search(searchData));
  }

  return (
    <div>
      <label className={classes.label} htmlFor="search">
        Name or Number
      </label>
      <div className={classes.search}>
        <input
          className={classes.input}
          type="text"
          id="search"
          ref={searchInputRef}
          disabled={props.disabled}
          onKeyDown={keyDownHandler}
        />
        <button
          className={classes.searchBtn}
          type="button"
          disabled={props.disabled}
          onClick={searchHandler}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
