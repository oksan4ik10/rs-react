import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';

import React from 'react';

import '@testing-library/jest-dom';

import { ClassOneBook } from '../components/ClassOneBook';

describe('ClassOneBook', () => {
  it('Click like in book: ', () => {
    const { container } = render(
      <BrowserRouter>
        <ClassOneBook />
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
