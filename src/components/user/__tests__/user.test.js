import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import UserInfo from "../index";
import { mockStore } from "../../../store/mockStore";
import { setName } from "../../../store/user/actions";

describe("user test", () => {
  it("stores an input value", () => {
    render(
      <Provider store={mockStore}>
        <UserInfo />
      </Provider>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'value' } });

    expect(input).toHaveValue('value');

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const actions = mockStore.getActions();
    const lastAction = actions[actions.length - 1];

    expect(lastAction).toEqual(setName('value'));
  });
});
