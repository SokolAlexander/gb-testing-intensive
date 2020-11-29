import { REQUEST_STATUS } from "../../constants";
import * as types from './types';

const initialState = {
  articles: [],
  request: {
    status: REQUEST_STATUS.IDLE,
    error: null,
  },
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ARTICLES_REQUEST: return {
      ...state,
      request: {
        ...state.request,
        status: REQUEST_STATUS.LOADING
      }
    };
    case types.GET_ARTICLES_SUCCESS: return {
      articles: action.payload.articles,
      request: {
        error: null,
        status: REQUEST_STATUS.SUCCESS
      }
    };
    case types.GET_ARTICLES_FAILURE: return {
      ...state,
      request: {
        error: action.payload.error,
        status: REQUEST_STATUS.FAILURE,
      }
    };
    case types.TOGGLE_FAVOURITES: {
      const newArticles = [...state.articles];
      const index = newArticles.findIndex(({id}) => id === action.payload.id);

      if (!newArticles[index]) {
        return state
      }

      newArticles[index] = {
        ...newArticles[index],
        favourite: !newArticles[index].favourite
      }

      return {
        ...state,
        articles: newArticles
      }
    }
    default: return state;
  }
}