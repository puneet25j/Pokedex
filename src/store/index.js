import { configureStore, createSlice } from '@reduxjs/toolkit';
import Fuse from 'fuse.js';

const fuseOptions = {
  includeMatches: true,
  findAllMatches: false,
  minMatchCharLength: 3,
  keys: [
    "id",
    "name"
  ] 
};

const fuse = new Fuse([],fuseOptions);

const getFromLocalStorage = () => {
  if (localStorage.getItem('pokemons')){
    fuse.setCollection(JSON.parse(localStorage.getItem('pokemons')));
  }
  return JSON.parse(localStorage.getItem('pokemons'));
}

const initialState = {
  allPokemon: getFromLocalStorage() || [],
  filtered: [],
  filteredBy: 'lowest',
  currentIndex: 0,
  loadMore: true,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    saveAllPokemon(state,action){
      state.allPokemon = [...action.payload];
    },

    initialFetchPokemon(state, action) {
      state.filtered.push(...action.payload);
    },

    increaseIndex(state,action){
      state.currentIndex = state.currentIndex + action.payload; 
    },

    loadPokemon(state){
      let newPokemons = state.allPokemon.slice(state.currentIndex, state.currentIndex + 12);
      state.currentIndex = state.currentIndex + 12;
      state.filtered.push(...newPokemons);
    },

    search(state,action){
      console.log(fuse.search(action.payload));
      state.filtered = fuse.search(action.payload).map(x => x.item);
      state.loadMore = false;
    },

    sortAscending(state,action) {
      state.currentIndex = 0;
      state.filtered = state.allPokemon.sort((a, b) => {
        return a.id - b.id;
      }).slice(state.currentIndex,state.currentIndex + 12);
      state.currentIndex = state.currentIndex + 12;
      state.filteredBy = action.payload;
      state.loadMore = true;
    },
    sortDescending(state,action) {
      state.currentIndex = 0
      state.filtered = state.allPokemon.sort((a, b) => {
        return b.id - a.id;
      }).slice(state.currentIndex,state.currentIndex+12);
      state.currentIndex = state.currentIndex + 12;
      state.filteredBy = action.payload;
      state.loadMore = true;

    },
    sortAtoZ(state,action) {
      state.currentIndex = 0;
      state.filtered = state.allPokemon.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }).slice(state.currentIndex,state.currentIndex+12);
      state.currentIndex = state.currentIndex + 12;
      state.filteredBy = action.payload;
      state.loadMore = true;

    },
    sortZtoA(state,action) {
      state.currentIndex = 0;
      state.filtered = state.allPokemon.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      }).slice(state.currentIndex,state.currentIndex+12);
      state.currentIndex = state.currentIndex + 12;
      state.filteredBy = action.payload;
      state.loadMore = true;

    },
  },
});

const store = configureStore({
  reducer: pokemonSlice.reducer,
});

export const pokemonActions = pokemonSlice.actions;
export default store;
