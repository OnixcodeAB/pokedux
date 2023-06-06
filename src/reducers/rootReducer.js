import { combineReducers } from "redux-immutable";
import { uiReducer  } from "./ui";
import { reducer } from "./reducer";

const rootReducer = combineReducers({
  data: reducer,
  ui: uiReducer ,
});

export default rootReducer;
