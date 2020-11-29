import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Article from '../article';
import '../../utils/formatDate'

const article = {
  title: "Title",
  publishedAt: "Mon Nov 23 2020 15:43:10 GMT+0300",
  summary: "long text",
  url: "/",
  imageUrl: "imageUrl",
  newsSite: 'some news',
};

jest.mock('../../utils/formatDate', () => ({
  formatDate: jest.fn(() => 'date')
}));


describe('article tests', () => {
  describe('snapshot tests', () => {
    it('matches snapshot with no article', () => {
      const component = render(
        <Article />
      );
  
      expect(component).toMatchSnapshot();
    });
  
    it('matches snapshot with article', () => {
      const component = render(<Article article={article} />);
  
      expect(component).toMatchSnapshot();
    });
  })

  describe('functionality tests', () => {
    it('renders placeholder when no article present', () => {
      const component = render(<Article />);
  
      const placeholder = component.getByText('SUMMARY').parentElement;
      expect(placeholder).toHaveClass('post-empty');
    });
  
    it("renders a link to source when article present", () => {
      const component = render(<Article article={article} />);
  
      const link = component.getByText(article.title).closest('a');
      expect(link).toHaveAttribute('href', article.url);
    });

    it("always passes", () => {
      render(<Article article={article} />);

      expect(1).toBe(1);
    });
  })
});
