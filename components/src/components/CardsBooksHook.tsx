import { IOneBook } from '../types/types';
import { OneBookHook } from './OneBookHook';

interface IMyProps {
  books: IOneBook[];
}

export const CardsBooksHook = (props: IMyProps) => {
  const books = props.books;
  return (
    <>
      <div className="cards">
        {books && books.map((item) => <OneBookHook key={item._id} {...item} />)}
      </div>
    </>
  );
};
