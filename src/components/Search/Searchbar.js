import SearchIcon from '../../UI/SearchIcon';

import classes from './Seachbar.module.css';

function Searchbar() {
  return (
    <div className={classes.filter}>
      <div className={classes.items}>
        <label className={classes.label} htmlFor="search">
          Name or Number
        </label>
        <div className={classes.search}>
          <input className={classes.input} type="text" id="search" />
          <button className={classes.searchBtn} type="submit">
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className={classes.items}>
        <label className={classes.label} htmlFor="sort">
          Sort by
        </label>
        <select className={classes.sort} name="sort" id="sort">
          <option className={classes['sort-option']} value="lowest">
            Lowest Number(First)
          </option>
          <option className={classes['sort-option']} value="highest">
            Highest Number(First)
          </option>
          <option className={classes['sort-option']} value="a-z">
            A-Z
          </option>
          <option className={classes['sort-option']}value="z-a">Z-A</option>
        </select>
      </div>
    </div>
  );
}

export default Searchbar;
