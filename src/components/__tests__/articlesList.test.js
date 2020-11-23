import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import ArticlesList from '../articlesList';
import { mockStore } from '../../store/mocks';
import { getArticles } from '../../store/articles/middleware';
import { getArticlesRequest } from '../../store/articles/actions';

describe('articlesList tests', () => {
  it('dispatches getArticles on mount', () => {
    render(
      <Provider store={mockStore}>
        <ArticlesList />
      </Provider>
    );

    const actions = mockStore.getActions();
    const lastAction = actions[actions.length - 1];
    expect(lastAction).toEqual(getArticlesRequest());
  });
});
