import PokemonCard from "./PokemonCard";
import "../assets/styles/PokemonList.css";
import React from "react";

const PokemonList = ({ pokemon }) => {
  return (
    <div className="pokemonList">
      {pokemon.map((pokemons) => (
        <PokemonCard
          key={pokemons.name}
          name={pokemons.name}
          image={pokemons.sprites.front_default}
          abilities={pokemons.abilities}
        />
      ))}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemon: Array(10).fill(""), // ["", ""]
};

export default PokemonList;
