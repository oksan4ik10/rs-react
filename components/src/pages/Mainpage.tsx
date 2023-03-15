import ClassInput from '../components/ClassInput';
import { ClassOneBook } from '../components/ClassOneBook';
import * as objBooks from '../date.json';

import { IOneBook } from 'types/types';
export const Mainpage = () => {
  const books: IOneBook[] = objBooks.books;

  return (
    <>
      <h1>RS-Books</h1>
      <ClassInput />
      <div className="cards">
        {books.map((item, index) => (
          <ClassOneBook key={index} {...item} />
        ))}
      </div>
    </>
  );
};
