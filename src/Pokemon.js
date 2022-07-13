import React, { useState } from 'react';

const Pokemon = ( props ) => {
  const [userIn, setIn] = useState(props.name);
  const updatePoke = props.updatePokemon;
  return (
    <div>
      <h3>{props.id} - {props.name}</h3>
      <img alt={props.name} src={props.img} />
      <input type="text" value={userIn} onChange={(e) => setIn(e.target.value)} />
      <button onClick={() => updatePoke(props.pokemon, userIn)}>Update Pokemon</button>
    </div>
  );
}

export default Pokemon;
