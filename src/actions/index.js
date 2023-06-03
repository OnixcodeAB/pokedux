import { getPokemonDetails } from "../api";
import { SET_POKEMON, SET_LOADING, SET_FAVORITE } from "./types";

export const setPokemon = (payload) => ({
  type: SET_POKEMON,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

// Redux Thunk
export const getPokemonWithDetails =
  (pokemon = []) =>
  async (dispatch) => {
    const pokemonDetails = await Promise.all(
      pokemon.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemon(pokemonDetails));
  };
