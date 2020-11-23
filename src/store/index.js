import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import articlesReducer from './articles/reducer';
import userReducer from './user/reducer';

export default createStore(combineReducers(
  {
    user: userReducer,
    articles: articlesReducer,
  }
), composeWithDevTools(applyMiddleware(thunk)));
