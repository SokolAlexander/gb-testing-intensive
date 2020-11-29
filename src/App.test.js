import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock("react-detect-offline", () => {
  return {
    Offline: ({ children }) => children,
    Online: () => null
  };
});

jest.mock('./utils/formatDate', () => {
  return {
    formatDate: (date) => date.toISOString(),
  };
});

describe('App tests', () => {
  it('matches snapshot online', () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
    jest.resetAllMocks();
  });
});
