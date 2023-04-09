import { IOneBook } from '../types/types';
import { OneBookHook } from './OneBookHook';

interface IPropsCards {
  books: IOneBook[];
  openModal: (id: string) => void;
}

export const CardsBooksHook = (props: IPropsCards) => {
  const books = props.books;
  return (
    <>
      <div className="cards">
        {books.length > 0 &&
          books.map((item) => (
            <OneBookHook key={item._id} books={item} openModal={props.openModal} />
          ))}
      </div>
    </>
  );
};
