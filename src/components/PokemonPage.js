import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const url = "http://127.0.0.1:3001/pokemon"

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])

  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPokemon(data)
      })
  }, [])

  function searchWord(searchedPokemon) {
    setSearch(searchedPokemon)
  }




  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemon={pokemon} setPokemon={setPokemon} url={url} />
      <br />
      <Search setSearch={setSearch} />
      <br />
      <PokemonCollection pokemon={pokemon} search={search} />
    </Container>
  );
}

export default PokemonPage;
