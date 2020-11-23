import React from 'react';
import { render } from '@testing-library/react';

import Toast from '../user/toast';


describe('userinfo tests', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('hides message after 3 sec', () => {

    const hide = jest.fn();
    const testf = jest.fn();
    const component = render(
      <Toast show={false} onHide={hide} testf={testf} />
    );

    component.rerender(<Toast show onHide={hide} />);

    expect(hide).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(3000);

    expect(hide).toHaveBeenCalledTimes(1);
  });
});
