import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { logger, SortedNames } from "../middlewares";
import rootReducer from "./rootReducer";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt(
  applyMiddleware(thunk, logger, SortedNames)
);

const store = legacy_createStore(rootReducer, composeEnhancers);

export default store;
