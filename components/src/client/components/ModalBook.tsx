import { IOneBook } from '../types/types';

interface IModalBook {
  book: IOneBook;
  closeModal: () => void;
}

export const ModalBook = (props: IModalBook) => {
  const book = props.book;

  return (
    <>
      <div className="modal" onClick={props.closeModal}>
        <div className="card">
          <div className="close" onClick={props.closeModal}></div>
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
          </div>
        </div>
      </div>
    </>
  );
};
