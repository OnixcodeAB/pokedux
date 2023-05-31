import { SET_POKEMON, SET_LOADING } from "../actions/types";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return {...state};
  }
};
