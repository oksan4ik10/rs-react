import { InputHookSearchMain } from '../components/InputHookSearchMain';
import { CardsBooksHook } from '../components/CardsBooksHook';
import { Loader } from '../components/Loader';
import { useState } from 'react';
import { IOneBook } from 'types/types';
import { ModalBook } from '../components/ModalBook';

import { booksAPI } from '../redux/services/BooksServices';
import { searchSlice } from '../redux/store/reducer/SearchInput';
import { useAppDispatch, useAppSelector } from '../redux/hooks/redux';

export const Mainpage = () => {
  const { searchQuery } = useAppSelector((state) => state.SearchInput);

  const dispatch = useAppDispatch();
  const { saveSearch } = searchSlice.actions;
  const {
    data: dataBooks,
    error,
    isLoading,
  } = booksAPI.useFetchAllBooksQuery({
    page: 0,
    query: searchQuery ? searchQuery : '',
    type: searchQuery ? 'search' : '',
  });

  function returnSearchDate(query: string) {
    dispatch(saveSearch(query));
  }

  const [dateModal, setDateModal] = useState<IOneBook>();
  const [isLoaderModal, setLoaderModal] = useState(false);
  const [getOneBook] = booksAPI.useLazyFetchOneBooksQuery();

  async function openModal(id: string) {
    setLoaderModal(true);
    const { data } = await getOneBook(id);
    setLoaderModal(false);
    setDateModal(data);
  }

  function closeModal() {
    setDateModal(undefined);
  }
  return (
    <>
      <h1>RS-Books</h1>
      <InputHookSearchMain search={returnSearchDate} />
      {(isLoading || isLoaderModal) && <Loader />}
      {dataBooks && <CardsBooksHook books={dataBooks} openModal={openModal} />}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      {dataBooks && dataBooks.length === 0 && <p>Книг не найдено</p>}
      {dateModal && <ModalBook book={dateModal} closeModal={closeModal} />}
    </>
  );
};
