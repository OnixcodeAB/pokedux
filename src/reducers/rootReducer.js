import { combineReducers } from "redux";
import dataSlice from "../slices/dataSlice";
import uiSlices from "../slices/uiSlices";

const rootReducer = combineReducers({
  data: dataSlice,
  ui: uiSlices ,
});

export default rootReducer;
