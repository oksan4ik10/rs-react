import { InputHookSearchMain } from '../components/InputHookSearchMain';
import { CardsBooksHook } from '../components/CardsBooksHook';
import { Loader } from '../components/Loader';
import { useEffect, useState } from 'react';
import { IOneBook } from 'types/types';
import { ModalBook } from '../components/ModalBook';

import { booksAPI } from '../redux/services/BooksServices';

export const getDate = async () => {
  const date = await fetch('https://rs-server-react.onrender.com/api/books/pagination');
  const res = await date.json();
  return res;
};

export const Mainpage = () => {
  const [dateModal, setDateModal] = useState<IOneBook>();

  const { data: dateBooks, error, isLoading, refetch } = booksAPI.useFetchAllPostsQuery(7);
  console.log(dateBooks);

  useEffect(() => {
    (async () => {
      const localDate = localStorage.getItem('date');
      if (localDate) {
        // returnSearchDate(localDate);
        return;
      }
      const res = await getDate();
    })();
  }, []);

  async function openModal(id: string) {
    // setLoader(true);
    const date = await fetch(`https://rs-server-react.onrender.com/api/books/${id}`);
    const res = await date.json();
    // setLoader(false);
    setDateModal(res);
  }
  function closeModal() {
    setDateModal(undefined);
  }
  return (
    <>
      <h1>RS-Books</h1>
      {/* <InputHookSearchMain search={returnSearchDate} /> */}
      {isLoading && <Loader />}
      {dateBooks && <CardsBooksHook books={dateBooks} openModal={openModal} />}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      {dateBooks && dateBooks.length === 0 && <p>Книг не найдено</p>}
      {dateModal && <ModalBook book={dateModal} closeModal={closeModal} />}
    </>
  );
};
