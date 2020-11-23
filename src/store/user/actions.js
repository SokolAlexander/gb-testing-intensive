import * as types from "./types";

export const setName = (name) => ({
  type: types.SET_NAME,
  payload: {
    name,
  },
});
