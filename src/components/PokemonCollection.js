import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, search }) {

  const filterPokemon = pokemon.filter((single) => single.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        {filterPokemon.map((single, index) => {
          return <PokemonCard key={index} {...single} />

        })
        }
      </Card.Group >
    </div>

  );
}

export default PokemonCollection;
