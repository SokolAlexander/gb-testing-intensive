import { render } from '@testing-library/react';

import ArticlePlaceholder from '../articlePlaceholder';

describe('articlePlaceholder test', () => {
  it('matches snapshot', () => {
    const component = render(
      <ArticlePlaceholder />
    );

    expect(component).toMatchSnapshot();
  });
});
