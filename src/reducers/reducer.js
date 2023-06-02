import { SET_POKEMON, SET_FAVORITE } from "../actions/types";
import isEmpty from "../func/isEmpty";
import { FromJS } from "immutable";

const initialState = FromJS({
  pokemon: [],
  favorite: [],
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };

    case SET_FAVORITE:
      const newElem = state.pokemon.find((elem) => elem.id === action.payload);

      const CheckElem = state.favorite.find(
        (elem) => elem.id === action.payload
      );

      if (isEmpty(CheckElem)) {
        return {
          ...state,
          favorite: [...state.favorite, newElem],
        };
      } else {
        const filter = state.favorite.filter(
          (elem) => elem.id !== action.payload
        );
        return {
          ...state,
          favorite: [filter],
        };
      }

/*     case SET_LOADING: */
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return { ...state };
  }
};
