import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { REQUEST_STATUS } from "../constants";

const mockState = {
  user: {
    name: "Name",
  },
  articles: {
    articles: [],
    request: {
      status: REQUEST_STATUS.IDLE,
      error: null,
    },
  },
};

const mockStateError = {
  ...mockState,
  articles: {
    ...mockState.articles,
    request: {
      status: REQUEST_STATUS.FAILURE,
      error: "Error",
    },
  },
};

const mockStateNoName = {
  ...mockState,
  user: {
    name: null
  }
}

const store = configureStore([thunk]);

export const mockStore = store(() => mockState);
export const mockStoreError = store(() => mockStateError);
export const mockStoreNoName = store(() => mockStateNoName);