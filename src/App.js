import React from 'react';
import './App.css';
import PokemonList from "./components/PokemonList";
import CapturedPokemon from "./components/CapturedPokemons";
import { PokemonProvider } from './components/PokemonProvider';

const App =() =>  {
  return (
    <PokemonProvider>
      <div className="App">
        <PokemonList />
        <CapturedPokemon />
      </div>
    </PokemonProvider>
  )
}

export default App;
