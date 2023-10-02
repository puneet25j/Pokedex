import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import PokemonPage, {loader as pokemonLoader} from './pages/Pokemon';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {path: ':pokemonId',element: <PokemonPage/>, loader: pokemonLoader},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
