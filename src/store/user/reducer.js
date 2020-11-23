import * as types from "./types";

const initialState = {
  name: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
}
