import React, { ChangeEvent } from 'react';
import { IOneBook } from 'types/types';

import like from '../assets/like.svg'
export class ClassOneBook extends React.Component {
  state: IOneBook;
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      author: props.author,
      desc: props.desc,
      genre: props.genre,
      img: props.img,
      title: props.title,
      year: props.year,
    };
  }

  render() {
    return (
      <>
        <div className="card">
          <img src={this.state.img} className="card__img" />
          <div className="card__info">
            <div className="card__head">
              <h3 className="card__title">{this.state.title}</h3>
              <div className="card__year">
                <span>Year: </span>
                {this.state.year}
              </div>
            </div>

            <div className="card__author">
              <span>Author: </span>
              {this.state.author}
            </div>
            <div className="card__genre">
              <span>Genre: </span>
              {this.state.genre}
            </div>
            <div className="card__desc">{this.state.desc}</div>
            <div className="card__likes">
                <svg className="card__like">
                    <use xlinkHref="/like.svg#like"></use>
                </svg>
                <span>10</span>
            </div>

          </div>
        </div>
      </>
    );
  }
}
