import { useDispatch,useSelector} from 'react-redux';


import classes from './Sortbar.module.css';
import { pokemonActions } from '../../store';

function Sortbar(props) {
  const filteredBy = useSelector((state) => state.filteredBy);
  const dispatch = useDispatch();


  const sortHandler = (event) => {
    if (event.target.value === 'lowest') {
      dispatch(pokemonActions.sortAscending('lowest'));
    }
    if (event.target.value === 'highest') {
      dispatch(pokemonActions.sortDescending('highest'));
    }
    if (event.target.value === 'a-z') {
      dispatch(pokemonActions.sortAtoZ('a-z'));
    }
    if (event.target.value === 'z-a') {
      dispatch(pokemonActions.sortZtoA('z-a'));
    }
  };
  return (
    <div>
      <label className={classes.label} htmlFor="sort">
        Sort by
      </label>
      <select
        className={classes.sort}
        name="sort"
        id="sort"
        onChange={sortHandler}
        disabled={props.disabled}
        value={filteredBy}
      >
        <option className={classes['sort-option']} value="lowest">
          Lowest Number(First)
        </option>
        <option className={classes['sort-option']} value="highest">
          Highest Number(First)
        </option>
        <option className={classes['sort-option']} value="a-z">
          A-Z
        </option>
        <option className={classes['sort-option']} value="z-a">
          Z-A
        </option>
      </select>
    </div>
  );
}

export default Sortbar;
