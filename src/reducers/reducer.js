import { SET_POKEMON, SET_FAVORITE } from "../actions/types";
import isEmpty from "../func/isEmpty";
import { fromJS, get, setIn } from "immutable";

const initialState = fromJS({
  pokemon: [],
  favorite: [],
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return setIn(state, ["pokemon"], action.payload);

    case SET_FAVORITE:
      const newElem = state.pokemon.find((elem) => elem.id === action.payload);

      const CheckElem = s;

      if (isEmpty(CheckElem)) {
        return state.updateIn(["favorite"], (favorite) => {
          favorite.push(newElem);
        });
      } else {
        const filter = state
          .get("favorite")
          .filter((elem) => elem.get("id") !== action.payload);
        return state.setIn(["favorite"], filter);
      }

    /*     case SET_LOADING: */
    /*       return {
        ...state,
        loading: action.payload,
      }; */

    default:
      return { ...state };
  }
};
