import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import React from 'react';

import '@testing-library/jest-dom';

import App from '../App';

describe('App', () => {
  it('should', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/RS-BOOK/gi)).toBeInTheDocument();
  });
})
