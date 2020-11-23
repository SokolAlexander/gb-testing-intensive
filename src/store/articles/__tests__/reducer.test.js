import reducer from "../reducer";
import { REQUEST_STATUS } from "../../../constants";
import { getArticlesRequest } from "../actions";

describe("reducer test", () => {
  it("returns state with status loading after requestArticles action", () => {
    const expected = {
      articles: [],
      request: {
        status: REQUEST_STATUS.LOADING,
        error: null,
      },
    };

    const received = reducer(undefined, getArticlesRequest());
    expect(received).toEqual(expected);
  });
});
