import React from 'react';
import { render } from '@testing-library/react';

import PlaceHolder from '../index';

describe('articles placeholder test', () => {
  it('matches snapshot', () => {
    const component = render(
      <PlaceHolder />
    );

    expect(component).toMatchSnapshot();
  });
});
