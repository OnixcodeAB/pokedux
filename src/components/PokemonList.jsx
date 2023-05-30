import PokemonCard from "./PokemonCard";
import "../assets/styles/PokemonList.css";
import React from "react";

const PokemonList = ({ pokemon }) => {
  return (
    <div className="pokemonList">
      {pokemon.map((item) => {
        return <PokemonCard item={item} key={item.id} />;
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemon: Array(10).fill(""), // ["", ""]
};

export default PokemonList;
