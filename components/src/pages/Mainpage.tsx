import { InputHookSearchMain } from '../components/InputHookSearchMain';
import { CardsBooksHook } from '../components/CardsBooksHook';
import { Loader } from '../components/Loader';
import { useEffect, useState } from 'react';
import { IOneBook } from 'types/types';
import { ModalBook } from '../components/ModalBook';

export const Mainpage = () => {
  const [books, setBooks] = useState<IOneBook[]>([]);
  const [isLoader, setLoader] = useState(true);

  const [isModal, setModal] = useState(true);
  const [dateModal, setDateModal] = useState<IOneBook>();

  useEffect(() => {
    (async () => {
      const localDate = localStorage.getItem('date');
      if (localDate) {
        returnSearchDate(localDate);
        return;
      }
      const date = await fetch('https://rs-server-react.onrender.com/api/books/pagination');
      const res = await date.json();
      setLoader(false);
      setBooks(res);
    })();
  }, []);
  async function returnSearchDate(query: string) {
    setLoader(true);
    const date = await fetch(
      `https://rs-server-react.onrender.com/api/books/search?query=${query}`
    );
    const res = await date.json();
    setLoader(false);
    setBooks(res);
  }

  async function openModal(id: string) {
    setLoader(true);
    const date = await fetch(`https://rs-server-react.onrender.com/api/books/${id}`);
    const res = await date.json();
    setLoader(false);
    setDateModal(res);
  }
  function closeModal() {
    setDateModal(undefined);
  }
  return (
    <>
      <h1>RS-Books</h1>
      <InputHookSearchMain search={returnSearchDate} />
      {isLoader && <Loader />}
      {books.length > 0 && <CardsBooksHook books={books} openModal={openModal} />}
      {books.length === 0 && <p>Книг не найдено</p>}
      {dateModal && <ModalBook book={dateModal} closeModal={closeModal} />}
    </>
  );
};
