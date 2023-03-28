import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import * as objBooks from '../date.json';

import '@testing-library/jest-dom';

import { CardsBooksHook } from '../components/CardsBooksHook';

describe('App', () => {
  it('Cards in main: ', async () => {
    render(
      <BrowserRouter>
        <CardsBooksHook {...objBooks} />
      </BrowserRouter>
    );
    const items = await screen.findAllByRole('image');
    expect(items).toHaveLength(51);
  });
  it('Cards empty: ', async () => {
    const { container } = render(
      <BrowserRouter>
        <CardsBooksHook />
      </BrowserRouter>
    );
    expect(container).toBeEmptyDOMElement();
  });
});
