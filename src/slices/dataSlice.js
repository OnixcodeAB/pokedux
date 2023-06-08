import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlices";

const initialState = {
  pokemons: [],
  favorite: [],
};

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
      const pokemon = produce()
      return state.favorite = [state.pokemons[0]];
    },
  },
});

export const { setPokemons, setFavorite } = dataSlice.actions;
console.log(dataSlice);

export default dataSlice.reducer;
