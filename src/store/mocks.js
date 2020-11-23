import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

const mockState = {
  user: {
    name: "Name",
  },
  articles: {
    articles: [],
    request: {
      status: 0,
      error: null,
    },
  },
};

const store = configureStore([thunk]);

export const mockStore = store((state = mockState, action) => {
  console.log(action);
  return mockState
});
