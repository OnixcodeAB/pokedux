import { SET_POKEMON } from "../actions/types";

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
