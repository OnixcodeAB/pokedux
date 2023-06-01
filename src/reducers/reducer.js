import { SET_POKEMON, SET_LOADING, SET_FAVORITE } from "../actions/types";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };

    case SET_FAVORITE:
      const newPokemonsList = [...state.pokemon];
      const currentPokemonsIndex = newPokemonsList.findIndex((pokemon) => {
        return pokemon.id === action.payload.id;
      });
      if (currentPokemonsIndex < 0) {
        return state;
      }
      newPokemonsList[currentPokemonsIndex].favorite =
        !newPokemonsList[currentPokemonsIndex].favorite;
      return {
        ...state,
        pokemons: newPokemonsList,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return { ...state };
  }
};
