import { applyMiddleware, compose, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import { logger, SortedNames } from "../middlewares";

const initialState = {
  pokemon: [],
};

const composeEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, )
);

export const store = legacy_createStore(
  reducer,
  initialState,
  composeEnhancers
);
