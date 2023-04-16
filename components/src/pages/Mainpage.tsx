import { InputHookSearchMain } from '../components/InputHookSearchMain';
import { CardsBooksHook } from '../components/CardsBooksHook';
import { Loader } from '../components/Loader';
import { useState } from 'react';
import { IOneBook } from 'types/types';
import { ModalBook } from '../components/ModalBook';

import { booksAPI } from '../redux/services/BooksServices';

export const Mainpage = () => {
  const [dateModal, setDateModal] = useState<IOneBook>();

  const [isLoaderModal, setLoaderModal] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const { data: dataBooks, error, isLoading } = booksAPI.useFetchAllBooksQuery(0);

  const [getOneBook] = booksAPI.useLazyFetchOneBooksQuery();

  const [getSearchBooks] = booksAPI.useLazyFetchSearchBooksQuery();
  const [dateSearchBooks, setDateSearchBooks] = useState<IOneBook[]>();

  async function openModal(id: string) {
    setLoaderModal(true);
    const { data } = await getOneBook(id);
    setLoaderModal(false);
    setDateModal(data);
  }
  async function returnSearchDate(query: string) {
    setIsSearch(true);
    setLoaderModal(true);

    const { data } = await getSearchBooks(query);

    setDateSearchBooks(data);
    setLoaderModal(false);
  }

  function closeModal() {
    setDateModal(undefined);
  }
  return (
    <>
      <h1>RS-Books</h1>
      <InputHookSearchMain search={returnSearchDate} />
      {(isLoading || isLoaderModal) && <Loader />}
      {!isSearch && dataBooks && <CardsBooksHook books={dataBooks} openModal={openModal} />}
      {isSearch && dateSearchBooks && dateSearchBooks.length > 0 && (
        <CardsBooksHook books={dateSearchBooks} openModal={openModal} />
      )}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      {isSearch && dateSearchBooks && dateSearchBooks.length === 0 && <p>Книг не найдено</p>}
      {dateModal && <ModalBook book={dateModal} closeModal={closeModal} />}
    </>
  );
};
