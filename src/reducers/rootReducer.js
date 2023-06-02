import { combineReducers } from "redux-immutable";
import { UIreducer } from "./ui";
import { reducer } from "./reducer";

const rootReducer = combineReducers({
  data: reducer,
  ui: UIreducer,
});

export default rootReducer;
