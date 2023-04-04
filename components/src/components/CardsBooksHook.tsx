import { IObjDate } from '../types/types';
import { OneBookHook } from './OneBookHook';

export const CardsBooksHook = (props: IObjDate) => {
  const books = props.books;
  if (!books) return <></>;
  return (
    <>
      <div className="cards">
        {books.map((item, index) => (
          <OneBookHook key={index} {...item} />
        ))}
      </div>
    </>
  );
};
