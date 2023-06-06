import { SET_POKEMON, SET_FAVORITE } from "../actions/types";
import { List, fromJS, get, getIn, setIn } from "immutable";

const initialState = fromJS({
  pokemon: [],
  favorite: [],
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON:
      return setIn(state, ["pokemon"], action.payload);

    case SET_FAVORITE:
      const pokemons = getIn(state, ["pokemon"]).find(
        (elem) => elem.id === action.payload
      );
      console.log(pokemons);

      const favoriteList = List(getIn(state, ["favorite"]));
      const index = favoriteList.findIndex((f) => f.id === pokemons.id);
      console.log(index);

      if (index !== -1) {
        // El pokemon no está en la lista de favoritos, agregarlo
        const updatedFavorite = favoriteList.delete(index);
        return setIn(state, ["favorite"], updatedFavorite);
      } else {
        // El pokemon ya está en la lista de favoritos, eliminarlo
        const updatedFavorite = favoriteList.push(
          get(state, "pokemon").find((elem) => elem.id === action.payload)
        );
        return setIn(state, ["favorite"], updatedFavorite);
      }

    default:
      return { ...state };
  }
};
