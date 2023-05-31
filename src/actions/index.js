import { getPokemonDetails } from "../api";
import { SET_POKEMON, SET_LOADING } from "./types";

export const setPokemon = (payload) => ({
  type: SET_POKEMON,
  payload,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

// Redux Thunk
export const getPokemonWithDetails =
  (pokemon = []) =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const pokemonDetails = await Promise.all(
      pokemon.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemon(pokemonDetails));
    dispatch(setLoading(false));
  };
