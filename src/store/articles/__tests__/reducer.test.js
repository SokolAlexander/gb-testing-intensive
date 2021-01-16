import reducer from "../reducer";
import { getArticlesRequest } from "../actions";

describe('articles reducer tests', () => {
  it("matches snapshot after getArticlesRequest", () => {
    const result = reducer(undefined, getArticlesRequest());

    expect(result).toMatchSnapshot();
  });
});
