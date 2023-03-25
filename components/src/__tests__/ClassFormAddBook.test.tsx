import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import { ClassFormAddBook } from '../components/ClassFormAddBook';

describe('AddForm', () => {
  it('Empty area ', async () => {
    const { container } = render(
      <BrowserRouter>
        <ClassFormAddBook />
      </BrowserRouter>
    );
    const form = container.querySelector('form');
    if (form) {
      const spanTitle = screen.getByRole('errorTitle');
      const spanDesc = screen.getByRole('errorDesc');
      const spanYear = screen.getByRole('errorYear');
      const spanAuthor = screen.getByRole('errorAuthor');
      const spanGenre = screen.getByRole('errorGenre');

      fireEvent.submit(form);

      expect(spanTitle).toHaveTextContent('Title field is empty');
      const inputTitle = screen.getByRole('title') as HTMLInputElement;
      fireEvent.change(inputTitle, { target: { value: 'go' } });
      expect(spanTitle).toHaveTextContent('Length title < 3');
      fireEvent.change(inputTitle, { target: { value: 'gooo' } });
      expect(spanTitle).toHaveTextContent('Title must start with a capital letter');

      expect(spanDesc).toHaveTextContent('Desc field is empty');
      const inputDesc = screen.getByRole('desc') as HTMLInputElement;
      fireEvent.change(inputDesc, { target: { value: 'go' } });
      expect(spanDesc).toHaveTextContent('Length desc < 10');
      fireEvent.change(inputDesc, { target: { value: 'testtesttesttesttest' } });
      expect(spanDesc).toHaveTextContent('Desc must start with a capital letter');

      const inputYear = screen.getByRole('year') as HTMLInputElement;
      expect(spanYear).toHaveTextContent('Date field is empty');
      fireEvent.change(inputYear, { target: { value: '2025-11-01' } });
      expect(spanYear).toHaveTextContent('Year selected incorrectly');

      const inputAuthor = screen.getByRole('author') as HTMLInputElement;
      expect(spanAuthor).toHaveTextContent('Choose an author');
      fireEvent.change(inputAuthor, { target: { value: 'Stiven King' } });
      expect(spanAuthor).toHaveTextContent('');

      const inputGenre = screen.getByRole('genre') as HTMLInputElement;
      fireEvent.click(inputGenre);
      expect(spanGenre).toHaveTextContent('');
    }
  });
});
