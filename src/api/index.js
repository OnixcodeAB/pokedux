import axios from "axios";

const getPokemon = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100"
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

const getPokemonDetails = async (pokemon) => {

  try {
    const response = await axios.get(`${pokemon.url}`);
    return {...pokemon, ...response.data};
  } catch (error) {
    console.error(error);
  }
};

export { getPokemon, getPokemonDetails };
