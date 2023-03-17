import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';

import '@testing-library/jest-dom';

import { Mainpage } from '../pages/Mainpage';
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
