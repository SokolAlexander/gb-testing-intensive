import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Favourite from '../favourite';

describe('Favourite tests', () => {
  it('matches snapshot when fav', () => {
    const component = render(
      <Favourite favourite articleId="id" onClick={() => {}} />
    );

    expect(component).toMatchSnapshot();
  });

  it("matches snapshot when not fav", () => {
    const component = render(
      <Favourite favourite={false} articleId="id" onClick={() => {}} />
    );

    expect(component).toMatchSnapshot();
  });


  it('renders - when article is in fav', () => {
    const component = render(
      <Favourite favourite articleId='id' onClick={() => {}}/>
    );

    const button = component.getByRole('button');
    expect(button).toHaveTextContent('-');
  });

  it("renders + when article is not in fav", () => {
    const component = render(
      <Favourite favourite={false} articleId="id" onClick={() => {}} />
    );

    const button = component.getByRole("button");
    expect(button).toHaveTextContent("+");
  });

  it('calls onClick when pressed', () => {
    const handleClick = jest.fn();
    const component = render(
      <Favourite favourite={false} articleId="id" onClick={handleClick} />
    );

    const button = component.getByRole("button");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith('id');
  });
});
