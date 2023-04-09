import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import * as objBooks from '../date.json';

import '@testing-library/jest-dom';

import { CardsBooksHook } from '../components/CardsBooksHook';

describe('App', () => {
  it('Cards in main: ', async () => {
    const date = await fetch('https://rs-server-react.onrender.com/api/books/pagination');
    const res = await date.json();
    render(
      <BrowserRouter>
        <CardsBooksHook books={res} openModal={() => null} />
      </BrowserRouter>
    );
    const items = await screen.findAllByRole('image');
    expect(items).toHaveLength(6);
  });
  it('Cards empty: ', async () => {
    const { container } = render(
      <BrowserRouter>
        <CardsBooksHook books={[]} openModal={() => null} />
      </BrowserRouter>
    );
    expect(container).toBeEmptyDOMElement();
  });
});
