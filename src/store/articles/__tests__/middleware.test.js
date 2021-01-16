import { getArticles } from "../middleware";
import { getArticlesFailure, getArticlesSuccess } from "../actions";

describe('getArticles test', () => {
  it('dipatches Failure on rejected fetch', async () => {
    const err = new Error('failed');

    const dispatch = jest.fn();

    // eslint-disable-next-line no-undef
    fetchMock.mockRejectOnce(err);
    await getArticles()(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenLastCalledWith(getArticlesFailure(err));
  });

  it("dipatches Success on resolved request", async () => {
    const articles = [{id: 1}];

    const dispatch = jest.fn();

    // eslint-disable-next-line no-undef
    fetchMock.mockOnce(JSON.stringify(articles));
    await getArticles()(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenLastCalledWith(getArticlesSuccess(articles));
  });
});
