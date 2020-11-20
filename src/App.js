import './App.css';

import React from 'react';

import CapturedPokemon from "./components/CapturedPokemons";
import PokemonList from "./components/PokemonList";
import {PokemonProvider} from './components/PokemonProvider';

const App =
    () => {
      return (<PokemonProvider><div className = "App"><PokemonList />
              <CapturedPokemon /></div>
    </PokemonProvider>)
    }

export default App;
