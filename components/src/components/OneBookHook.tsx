import { useState } from 'react';
import { IOneBook, IMyStatelikes } from '../types/types';

export const OneBookHook = (props: IOneBook) => {
  let likeProps: IMyStatelikes = {
    date: '',
    count: 10,
  };
  if (props.check) {
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
  return (
    <>
      <div className="card">
        <img src={props.img} className="card__img" />
        <div className="card__info">
          <div className="card__head">
            <h3 className="card__title">{props.title}</h3>
            <div className="card__year">
              <span>Year: </span>
              {props.year}
            </div>
          </div>

          <div className="card__author">
            <span>Author: </span>
            {props.author}
          </div>
          <div className="card__genre">
            <span>Genre: </span>
            {props.genre}
          </div>
          <div className="card__desc">{props.desc}</div>
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
