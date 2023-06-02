import { SET_LOADING } from "../actions/types";

const initialState = {
  loading: false,
};

export const UIreducer = (state=initialState, action) => {
  switch (action.payload) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return { ...state };
  }
};
