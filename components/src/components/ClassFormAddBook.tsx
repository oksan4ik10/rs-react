import React, { FormEvent, RefObject } from 'react';
import { ClassOptions } from './ClassOptions';
import { IAddBook } from '../types/types';
import ClassCardsBooks from './ClassCardsBooks';

export class ClassFormAddBook extends React.Component {
  title: RefObject<HTMLInputElement>;
  year: RefObject<HTMLInputElement>;
  selectRef: RefObject<HTMLSelectElement>;
  radioRefHorror: RefObject<HTMLInputElement>;
  radioRefFantasy: RefObject<HTMLInputElement>;
  radioRefDetective: RefObject<HTMLInputElement>;
  radioRefOther: RefObject<HTMLInputElement>;
  check: RefObject<HTMLInputElement>;
  fileInput: RefObject<HTMLInputElement>;
  desc: RefObject<HTMLTextAreaElement>;
  images: string[];
  state: IAddBook;
  constructor(props: Record<string, never>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.title = React.createRef();
    this.desc = React.createRef();
    this.year = React.createRef();
    this.selectRef = React.createRef();
    this.radioRefHorror = React.createRef();
    this.radioRefFantasy = React.createRef();
    this.radioRefDetective = React.createRef();
    this.radioRefOther = React.createRef();
    this.check = React.createRef();

    this.fileInput = React.createRef();
    this.images = [];

    this.state = {
      cards: {
        books: [],
      },
    };
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    const desc = this.desc.current?.value;
    const title = this.title.current?.value;
    const year = this.year.current?.value;

    const author = this.selectRef.current?.value;
    let genre = '';
    genre = this.radioRefDetective.current?.checked
      ? genre + this.radioRefDetective.current.value + ','
      : genre;
    genre = this.radioRefFantasy.current?.checked
      ? genre + this.radioRefFantasy.current.value + ','
      : genre;
    genre = this.radioRefHorror.current?.checked
      ? genre + this.radioRefHorror.current.value + ','
      : genre;
    genre = this.radioRefOther.current?.checked
      ? genre + this.radioRefOther.current?.value + ','
      : genre;

    if (genre) genre = genre.slice(0, genre.length - 1);

    const check = this.check.current?.checked;
    if (this.fileInput.current) {
      if (this.fileInput.current.files) {
        const selecteds = this.fileInput.current.files[0];
        if (year && author && desc && title && genre) {
          const numYear = Number(year.split('-')[0]);
          const newBook = {
            author: author,
            desc: desc,
            title: title,
            genre: genre,
            year: numYear,
            img: URL.createObjectURL(selecteds),
            check: check,
          };
          this.state.cards.books.push(newBook);
          this.setState({ cards: this.state.cards });
        }

        this.images.push();
      }
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" ref={this.title} />
          </label>
          <label>
            Desc:
            <textarea ref={this.desc} />
          </label>
          <br />
          <label>
            Year:
            <input type="date" ref={this.year} />
          </label>
          <span>Author</span>
          <select ref={this.selectRef}>
            <ClassOptions />
          </select>
          <h4>Genre</h4>
          <p>
            <label>
              Horror
              <input type="checkbox" ref={this.radioRefHorror} name="radio" value="Horror" />
            </label>
            <label>
              Fantasy
              <input type="checkbox" ref={this.radioRefFantasy} name="radio" value="Fantasy" />
            </label>
            <label>
              Detective
              <input type="checkbox" ref={this.radioRefDetective} name="radio" value="Detective" />
            </label>
            <label>
              Other
              <input type="checkbox" ref={this.radioRefOther} name="radio" value="Other" />
            </label>
          </p>

          <p>
            Like
            <input type="checkbox" ref={this.check} />
          </p>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} accept="image/*" />
          </label>

          <input type="submit" value="Create card" />
        </form>
        <ClassCardsBooks {...this.state.cards} />
      </>
    );
  }
}
