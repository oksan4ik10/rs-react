import React from 'react';
import { IOneBook, IMyStatelikes } from 'types/types';

export class ClassOneBook extends React.Component {
  date: IOneBook;
  state: IMyStatelikes;
  constructor(props: Record<string, never>) {
    super(props);
    this.date = {
      author: props.author,
      desc: props.desc,
      genre: props.genre,
      img: props.img,
      title: props.title,
      year: props.year,
      check: props.check,
    };
    this.state = {
      date: '',
      count: 10,
    };
    if (this.date.check) {
      this.state = {
        date: 'active',
        count: 11,
      };
    }
    this.changeState = this.changeState.bind(this);
  }
  changeState() {
    if (!this.state.date) {
      this.setState({ date: 'active', count: this.state.count + 1 });
    } else {
      this.setState({ date: '', count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <>
        <div className="card">
          <img src={this.date.img} className="card__img" />
          <div className="card__info">
            <div className="card__head">
              <h3 className="card__title">{this.date.title}</h3>
              <div className="card__year">
                <span>Year: </span>
                {this.date.year}
              </div>
            </div>

            <div className="card__author">
              <span>Author: </span>
              {this.date.author}
            </div>
            <div className="card__genre">
              <span>Genre: </span>
              {this.date.genre}
            </div>
            <div className="card__desc">{this.date.desc}</div>
            <div className="card__likes" onClick={this.changeState}>
              <svg role="image" className={'card__like ' + this.state.date}>
                <use xlinkHref="/like.svg#like"></use>
              </svg>
              <span>{this.state.count}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
