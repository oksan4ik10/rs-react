import React, { ChangeEvent, FormEvent, RefObject } from 'react';
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
  state: IAddBook;
  submitForm: boolean;
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

    this.state = {
      cards: {
        books: [],
      },
      errorTitle: '',
      errorDesc: '',
      errorYear: '',
      errorAuthor: '',
      errorGenre: '',
      errorFile: '',
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDesc = this.changeDesc.bind(this);
    this.submitForm = true;
  }
  errorTitle(str: string | undefined) {
    if (str) {
      if (str.length < 3) {
        this.setState({ errorTitle: `Length title < 3` });
      } else {
        if (str[0].toUpperCase() !== str[0]) {
          this.setState({ errorTitle: `Title must start with a capital letter` });
        } else this.setState({ errorTitle: '' });
      }
    } else {
      this.setState({ errorTitle: `Title field is empty` });
    }
  }
  changeTitle(event: ChangeEvent<HTMLInputElement>) {
    if (this.submitForm) return;
    const target = event.target as HTMLInputElement;
    const title = target.value;
    this.errorTitle(title);
  }
  errorDesc(str: string | undefined) {
    if (str) {
      if (str.length < 10) {
        this.setState({ errorDesc: `Length title < 10` });
      } else {
        if (str[0].toUpperCase() !== str[0]) {
          this.setState({ errorDesc: `Desc must start with a capital letter` });
        } else this.setState({ errorDesc: '' });
      }
    } else {
      this.setState({ errorDesc: `Desc field is empty` });
    }
  }

  changeDesc(event: ChangeEvent<HTMLTextAreaElement>) {
    if (this.submitForm) return;
    const target = event.target as HTMLTextAreaElement;
    const desc = target.value;
    this.errorDesc(desc);
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    this.submitForm = false;
    const error = true;
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

    //validation
    this.errorTitle(title);
    this.errorDesc(desc);

    const check = this.check.current?.checked;
    if (this.fileInput.current) {
      if (this.fileInput.current.files) {
        const selecteds = this.fileInput.current.files[0];
        if (year && author && desc && title && genre && error) {
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
      }
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input type="text" ref={this.title} onChange={this.changeTitle} />
            <span className="error">{this.state.errorTitle}</span>
          </label>
          <label>
            Desc
            <textarea ref={this.desc} onChange={this.changeDesc} />
            <span className="error">{this.state.errorDesc}</span>
          </label>
          <br />
          <label>
            Year:
            <input type="date" ref={this.year} />
            <span className="error">{this.state.errorYear}</span>
          </label>
          <span>Author</span>
          <select ref={this.selectRef}>
            <ClassOptions />
          </select>
          <span className="error">{this.state.errorAuthor}</span>
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
            <span className="error">{this.state.errorGenre}</span>
          </p>

          <p>
            Like
            <input type="checkbox" ref={this.check} />
          </p>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} accept="image/*" />
            <span className="error">{this.state.errorFile}</span>
          </label>

          <input type="submit" value="Create card" />
        </form>
        <ClassCardsBooks {...this.state.cards} />
      </>
    );
  }
}
