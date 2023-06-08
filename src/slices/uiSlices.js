import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const uiSlices = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {setLoading} = uiSlices.actions;

export default uiSlices.reducer;
