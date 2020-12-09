import { getArticlesRequest, getArticlesSuccess, getArticlesFailure } from "./actions"
import { apiUrl } from "../../constants";

export const getArticles = () => async (dispatch) => {
  dispatch(getArticlesRequest());
  try {
    const res = await fetch(apiUrl);
    const articles = await res.json();
    dispatch(getArticlesSuccess(articles));
  } catch (e) {
    console.log(e, 'failure-=-=-=--=--=-');
    dispatch(getArticlesFailure(e))
  }
}
