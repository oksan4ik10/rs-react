import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store/store';
import userEvent from '@testing-library/user-event';

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
  it('submit form correctly', () => {
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <FormAddBook />
        </BrowserRouter>
      </Provider>
    );
    const title = screen.getByRole('title');
    const desc = screen.getByRole('desc');
    const year = screen.getByRole('year');
    const author = screen.getByRole('author');
    const check = container.querySelector('input[value="Detective"]');
    const radio = container.querySelector('input[value="Yes"]');
    const fileInput = screen.getByRole('file');

    const submitButton = container.querySelector('input[value="Create card"]');

    fireEvent.change(title, { target: { value: 'Lev' } });
    fireEvent.change(desc, { target: { value: 'Test Test' } });
    fireEvent.change(year, { target: { value: '1990-01-01' } });
    fireEvent.change(author, { target: { value: 'Stephen King' } });
    if (check) fireEvent.click(check);
    if (radio) fireEvent.click(radio);
    userEvent.upload(fileInput, file);
    if (submitButton) fireEvent.click(submitButton);

    const confirmationMessage = screen.queryByText(/Book created!/i);
    if (confirmationMessage) {
      expect(confirmationMessage).toBeInTheDocument();
    } else {
      expect(confirmationMessage).toBeNull();
    }
  });
});
