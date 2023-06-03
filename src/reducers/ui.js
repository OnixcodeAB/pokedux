import { fromJS, set, setIn } from "immutable";
import { SET_LOADING } from "../actions/types";

const loadingState = fromJS({
  loading: false,
});

export const UIreducer = (state = loadingState, action) => {
  switch (action.payload) {
    case SET_LOADING:
      return setIn(state,["loading"], action.payload);

    default:
      return state;
  }
};
