import { SET_POKEMON, SET_POKEMON_DETAILS } from "../actions/types";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    default:
      return state;
  }
};
