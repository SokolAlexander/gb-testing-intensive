import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App tests', () => {
  it('matches snapshot', () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });

  it("matches snapshot2", () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });

  it('fails', () => {
    expect(2).toEqual(1);
  });
});
