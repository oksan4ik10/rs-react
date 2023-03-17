import ClassInput from '../components/ClassInput';
import ClassCardsBooks  from '../components/ClassCardsBooks';
import * as objBooks from '../date.json';

import { IOneBook } from 'types/types';
export const Mainpage = () => {
  const books: IOneBook[] = objBooks.books;

  return (
    <>
      <h1>RS-Books</h1>
      <ClassInput />
      <ClassCardsBooks />
      
    </>
  );
};
