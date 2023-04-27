import { useState } from 'react';
import { IOneBook, IMyStatelikes } from '../types/types';

interface IPropsOneBook {
  books: IOneBook;
  openModal: (id: string) => void;
}

export const OneBookHook = (props: IPropsOneBook) => {
  const book = props.books;
  let likeProps: IMyStatelikes = {
    date: '',
    count: 10,
  };
  if (book.check) {
    likeProps = {
      date: 'active',
      count: 11,
    };
  }
  const [like, setLike] = useState(likeProps);

  function changeState() {
    if (!like.date) {
      setLike({
        date: 'active',
        count: like.count + 1,
      });
    } else {
      setLike({
        date: '',
        count: like.count - 1,
      });
    }
  }

  function clickBook() {
    props.openModal(book._id);
  }
  return (
    <>
      <div className="card" onClick={clickBook}>
        <img src={book.img} className="card__img" />
        <div className="card__info">
          <div className="card__head">
            <h3 className="card__title">{book.title}</h3>
            <div className="card__year">
              <span>Year: </span>
              {book.year}
            </div>
          </div>

          <div className="card__author">
            <span>Author: </span>
            {book.author}
          </div>
          <div className="card__genre">
            <span>Genre: </span>
            {book.genre}
          </div>
          <div className="card__desc">{book.desc}</div>
          <div className="card__likes" onClick={changeState}>
            <svg role="image" className={'card__like ' + like.date}>
              <use xlinkHref="/like.svg#like"></use>
            </svg>
            <span>{like.count}</span>
          </div>
        </div>
      </div>
    </>
  );
};
