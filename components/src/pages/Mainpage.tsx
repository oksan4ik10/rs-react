import { InputHookSearchMain } from '../components/InputHookSearchMain';
import { CardsBooksHook } from '../components/CardsBooksHook';
import { Loader } from '../components/Loader';
import { useEffect, useState } from 'react';
import { IOneBook } from 'types/types';

export const Mainpage = () => {
  const [books, setBooks] = useState<IOneBook[]>([]);
  const [isLoader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
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
  return (
    <>
      <h1>RS-Books</h1>
      <InputHookSearchMain search={returnSearchDate} />
      {isLoader && <Loader />}
      {books.length > 0 && <CardsBooksHook books={books} />}
      {books.length === 0 && <p>Книг не найдено</p>}
    </>
  );
};
