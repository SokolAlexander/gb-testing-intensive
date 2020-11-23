import * as types from "./types";

export const getArticles = (count) => ({
  type: types.GET_ARTICLES,
  payload: {
    count,
  },
});

export const getArticlesRequest = () => ({
  type: types.GET_ARTICLES_REQUEST,
});

export const getArticlesSuccess = (articles) => ({
  type: types.GET_ARTICLES_SUCCESS,
  payload: {
    articles,
  },
});

export const getArticlesFailure = (error) => ({
  type: types.GET_ARTICLES_FAILURE,
  payload: {
    error,
  },
});

export const toggleFavourite = (id) => ({
  type: types.TOGGLE_FAVOURITE,
  payload: {
    id
  }
})
