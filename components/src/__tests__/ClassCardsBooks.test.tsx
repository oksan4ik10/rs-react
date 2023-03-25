import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import * as objBooks from '../date.json';

import '@testing-library/jest-dom';

import ClassCardsBooks from '../components/ClassCardsBooks';

describe('App', () => {
  it('Cards in main: ', async () => {
    render(
      <BrowserRouter>
        <ClassCardsBooks {...objBooks} />
      </BrowserRouter>
    );
    const items = await screen.findAllByRole('image');
    expect(items).toHaveLength(51);
  });
  it('Cards empty: ', async () => {
    const { container } = render(
      <BrowserRouter>
        <ClassCardsBooks />
      </BrowserRouter>
    );
    expect(container).toBeEmptyDOMElement();
  });
});
