import React from 'react';
import { render } from '@testing-library/react';

import HeaderProfile from '../index';
import { Provider } from 'react-redux';
import { mockStoreNoName, mockStore } from '../../../store/mockStore';

describe('Header profile', () => {
  describe('snapshot tests', () => {
    it('no name snapshot', () => {
      const component = render(
        <Provider store={mockStoreNoName}>
          <HeaderProfile />
        </Provider>
      );
      
      expect(component).toMatchSnapshot();
    });

    it('name present', () => {
      const component = render(
        <Provider store={mockStore}>
          <HeaderProfile />
        </Provider>
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe('logic tests', () => {
    it('not shown when no name present', () => {
      const component = render(
        <Provider store={mockStoreNoName}>
          <HeaderProfile />
        </Provider>
      );

      const elem = component.queryByTestId('user.name');

      expect(elem).toBeNull();
    });

    it('shows name when name exists', () => {
      const component = render(
        <Provider store={mockStore}>
          <HeaderProfile />
        </Provider>
      );
      
      const name = mockStore.getState().user.name;
      const elem = component.queryByTestId("user.name");
      const textContent = component.queryByText(name);
      
      expect(elem).toBeDefined();
      expect(textContent).toBeDefined();
    });
  });
});
