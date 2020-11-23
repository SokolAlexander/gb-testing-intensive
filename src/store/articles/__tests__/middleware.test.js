import { getArticles } from '../middleware';
import { mockStore } from '../../mocks';
import { getArticlesSuccess, getArticlesFailure } from '../actions';

describe('getArticles test', () => {
  it('dispatches success action on success fetch', async () => {
    const articles = [{id: 1}, {id: 2}];

    // eslint-disable-next-line no-undef
    fetchMock.mockOnce(JSON.stringify(articles));
    await getArticles()(mockStore.dispatch);

    const actions = mockStore.getActions();
    expect(actions[actions.length - 1]).toEqual(getArticlesSuccess(articles));
  });

  it("dispatches success action on failure fetch", async () => {
    const error = new Error('failed');

    // eslint-disable-next-line no-undef
    fetchMock.mockReject(error);
    await getArticles()(mockStore.dispatch);

    const actions = mockStore.getActions();
    expect(actions[actions.length - 1]).toEqual(getArticlesFailure(error));
  });
});
