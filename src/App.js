import React, {useState} from 'react';
import Pokemon from "./Pokemon"
import './style.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [userIn, setIn] = useState("");
  const addPokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userIn}`);
    const data = await response.json();
    setPokemon( prev => [...prev, data]);
    setIn("");
  };

  const updatePokemon = async (index, newPoke) => { // or (original, newPoke)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${newPoke}`);
    const data = await response.json();
    const i = pokemon.indexOf(index);
    setPokemon( prev => [...prev.slice(0, i), data, ...prev.slice(i + 1)]);
  };

  return (
    <>
      <div class="wrapper">
        <div class="top">
          <input class="add" type="text" value={userIn} onChange={(e) => setIn(e.target.value)}></input>
          <button class="add" onClick={addPokemon}>Add Pokemon</button>
        </div>
      </div>
      <div class="content" id="content">
        {pokemon.map((p, i) => <Pokemon index={i} pokemon={p} name={p.name} id={p.id} img={p.sprites.front_default} updatePokemon={updatePokemon}/>)}
      </div>
    </>
    
  );
}

export default App;
