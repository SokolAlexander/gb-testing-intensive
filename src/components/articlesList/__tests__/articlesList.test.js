import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import { mockStore, mockStoreError } from "../../../store/mockStore";
import ArticlesList from "../index";

describe("articles placeholder test", () => {
  it("matches snapshot with no articles", () => {
    const component = render(
      <Provider store={mockStore}>
        <ArticlesList />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });

  it("shows error message on request error", () => {
    const component = render(
      <Provider store={mockStoreError}>
        <ArticlesList />
      </Provider>
    );

    const text = component.getByText("Error getting articles");

    expect(text).toBeDefined();
  });
});
