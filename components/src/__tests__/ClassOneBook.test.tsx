import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { IOneBook } from 'types/types';

import '@testing-library/jest-dom';

import { ClassOneBook } from '../components/ClassOneBook';

describe('ClassOneBook', () => {
  const item: IOneBook = {
    author: 'test',
    desc: 'test',
    genre: 'test',
    img: 'test',
    title: 'test',
    year: 2023,
    check: false,
  };
  it('Click like in book: ', async () => {
    const { container } = render(
      <BrowserRouter>
        <ClassOneBook {...item} />
      </BrowserRouter>
    );
    const foo = container.querySelector('.card__likes');

    if (foo) {
      fireEvent.click(foo);
      expect(screen.getByRole('image')).toHaveClass('active');
      fireEvent.click(foo);
      expect(screen.getByRole('image')).not.toHaveClass('active');
    }
  });
});
