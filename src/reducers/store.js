import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import { logger, SortedNames } from "../middlewares";

const initialState = {
  pokemon: [],
  loading: false,
  favorite: [],
};

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt(
  applyMiddleware(thunk, logger, SortedNames)
);

export const store = legacy_createStore(
  reducer,
  initialState,
  composeEnhancers
);
