import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

jest.mock("react-detect-offline", () => {
  return {
    Offline: ({ children }) => children
  }
});

describe('App tests', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('matches snapshot', () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });
});
