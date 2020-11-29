import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";

import User from "../user";
import { mockStore } from "../../store/mocks";
import { setName } from "../../store/user/actions";

describe("user tests", () => {
  it("matches snapshot", () => {
    const component = render(
      <Provider store={mockStore}>
        <User />
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });

  it("stores an input value", () => {
    const component = render(
      <Provider store={mockStore}>
        <User />
      </Provider>
    );

    const input = component.getByRole('textbox');
    fireEvent.change(input, { target: { value: "value" } });

    expect(input).toHaveValue('value');

    const button = component.getByRole('button');
    fireEvent.click(button);

    const actions = mockStore.getActions();
    expect(actions[actions.length - 1]).toEqual(setName('value'));
  });
});
