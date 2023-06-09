import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlices";

const initialState = {
  pokemons: [],
  favorite: [],
  search: [],
};

// function to set Pokmeon details in the state,
export const fecthPokemosnWithDetails = createAsyncThunk(
  "data/fecthPokemosnWithDetails",

  async (_, { dispatch }) => {
    // dispatch loader
    //fecth
    // dispatch loader
    dispatch(setLoading(true));
    const pokemonResp = await getPokemon();
    const pokemonDetails = await Promise.all(
      pokemonResp.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonDetails));
    dispatch(setLoading(false));
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },

    setFavorite: (state, action) => {
      const newArray = state.pokemons.find((p) => p.id === action.payload);
      const index = state.favorite.findIndex((f) => f.id === newArray.id);
      //console.log(newArray);
      //console.log(index);

      if (index === -1) {
        // El pokemon no esta en favorito, agrega a la lista
        state.favorite.push(newArray);
      } else {
        // El pokemon esta en favorito, eliminar de la lista
        state.favorite = state.favorite.filter((f) => f.id !== action.payload);
      }
    },

    setSearch: (state, action) => {
      const serachArray = state.pokemons.filter((p) =>
        p.name.includes(action.payload)
      );
      state.search = serachArray;
    },
  },
});

export const { setPokemons, setFavorite, setSearch } = dataSlice.actions;
console.log(dataSlice);

export default dataSlice.reducer;
