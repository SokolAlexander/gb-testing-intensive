import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from './store';
import ArticlesList from './components/articlesList';
import Header from './components/header';
import UserInfo from './components/user';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <ArticlesList />
        </Route>
        <Route path="/user">
          <UserInfo />
        </Route>
      </Switch>
      </Router>
    </Provider>
  );
}

export default App;
