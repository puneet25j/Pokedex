import classes from './Search.module.css'

import Searchbar from "./Search/Searchbar";

function Search(){
    return <section className={classes.container}>
        <Searchbar/>
    </section>
}

export default Search;
