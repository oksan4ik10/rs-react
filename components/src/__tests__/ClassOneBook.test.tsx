import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import ClassCardsBooks from '../components/ClassCardsBooks';

describe('App', () => {
  it('Cards in main: ', async () => {
    render(
      <BrowserRouter>
        <ClassCardsBooks />
      </BrowserRouter>
    );
    const items = await screen.findAllByRole('image');
    expect(items).toHaveLength(51);
  });
});
