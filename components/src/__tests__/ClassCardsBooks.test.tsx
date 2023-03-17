import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
