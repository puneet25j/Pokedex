import './App.css';

import Header from './UI/Header';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <Header/>
      <PokemonList/>
    </div>
  );
}

export default App;
