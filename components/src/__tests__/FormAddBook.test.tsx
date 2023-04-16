import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store/store';

const store = setupStore();

import '@testing-library/jest-dom';

import { FormAddBook } from '../components/FormAddBook';

describe('AddForm', () => {
  it('Empty area ', async () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <FormAddBook />
        </BrowserRouter>
      </Provider>
    );
    const form = container.querySelector('form');
    if (form) {
      fireEvent.submit(form);

      await waitFor(() => {
        const spanTitle = screen.getByRole('errorTitle');
        const spanDesc = screen.getByRole('errorDesc');
        const spanYear = screen.getByRole('errorYear');
        const spanAuthor = screen.getByRole('errorAuthor');
        expect(spanTitle).toHaveTextContent('Title field is empty');
        expect(spanDesc).toHaveTextContent('Desc field is empty');
        expect(spanYear).toHaveTextContent('Year field is empty');
        expect(spanAuthor).toHaveTextContent('Choose an author');
      });
    }
  });
});
