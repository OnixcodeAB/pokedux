import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
  pokemon: [],
};

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = legacy_createStore(
  reducer,
  initialState,
  composeEnhancers 
);
