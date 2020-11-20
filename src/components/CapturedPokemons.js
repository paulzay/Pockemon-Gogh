import React, {useState} from "react";

const CapturedPokemons = () => {
  const [pokemons] = useState([])

  return (<div className = "pokedex"><h2>Pokemons Captured<
          /h2>
          
          {pokemons.map((pokemon) =>
            <div key={`${pokemon.id}-${pokemon.name}`}>
              <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
            </div>)
} < /div>
      )
}

export default CapturedPokemons;