import React, { ChangeEvent, FormEvent, RefObject } from 'react';
import { ClassOptions } from './ClassOptions';
import { IAddBook, IChangeElement } from '../types/types';
import ClassCardsBooks from './ClassCardsBooks';

export class ClassFormAddBook extends React.Component {
  title: RefObject<HTMLInputElement>;
  year: RefObject<HTMLInputElement>;
  selectRef: RefObject<HTMLSelectElement>;
  radioRefHorror: RefObject<HTMLInputElement>;
  radioRefFantasy: RefObject<HTMLInputElement>;
  radioRefDetective: RefObject<HTMLInputElement>;
  radioRefOther: RefObject<HTMLInputElement>;
  checkYes: RefObject<HTMLInputElement>;
  checkNo: RefObject<HTMLInputElement>;

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
    this.checkYes = React.createRef();
    this.checkNo = React.createRef();
    this.fileInput = React.createRef();

    this.state = {
      cards: {
        books: [],
      },
      message: '',
      errorTitle: '',
      errorDesc: '',
      errorYear: '',
      errorAuthor: '',
      errorGenre: '',
      errorFile: '',
      errorCheck: '',
    };
    this.change = this.change.bind(this);
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
  errorDesc(str: string | undefined) {
    if (str) {
      if (str.length < 10) {
        this.setState({ errorDesc: `Length desc < 10` });
      } else {
        if (str[0].toUpperCase() !== str[0]) {
          this.setState({ errorDesc: `Desc must start with a capital letter` });
        } else this.setState({ errorDesc: '' });
      }
    } else {
      this.setState({ errorDesc: `Desc field is empty` });
    }
  }

  errorYear(str: string | undefined) {
    if (str) {
      const numYear = Number(str.split('-')[0]);
      const yearNow = new Date().getFullYear();
      if (numYear > yearNow) {
        this.setState({ errorYear: `Year selected incorrectly` });
      } else this.setState({ errorYear: '' });
    } else {
      this.setState({ errorYear: `Date field is empty` });
    }
  }
  errorAuthor(str: string | undefined) {
    if (str === 'Change author') {
      this.setState({ errorAuthor: `Choose an author` });
    } else {
      this.setState({ errorAuthor: `` });
    }
  }
  errorRadio() {
    if (
      this.radioRefDetective.current?.checked ||
      this.radioRefFantasy.current?.checked ||
      this.radioRefOther.current?.checked ||
      this.radioRefHorror.current?.checked
    ) {
      this.setState({ errorGenre: '' });
    } else this.setState({ errorGenre: 'Please select at least one genre' });
  }
  errorCheck() {
    if (this.checkYes.current?.checked || this.checkNo.current?.checked)
      this.setState({ errorCheck: '' });
    else this.setState({ errorCheck: 'Please select Yes/No' });
  }
  errorFile(str: string | undefined) {
    if (str) {
      const arrValue = str.split('.');
      const exp = arrValue[arrValue.length - 1].toLocaleLowerCase();
      if (exp === 'png' || exp === 'jpg' || exp === 'jpeg' || exp === 'svg' || exp === 'gif') {
        this.setState({ errorFile: '' });
      } else {
        this.setState({ errorFile: 'Extension is not .jpg, .png, .gif, .svg' });
      }
    } else {
      this.setState({ errorFile: 'File not selected' });
    }
  }
  change(event: ChangeEvent<IChangeElement>) {
    if (this.submitForm) return;
    const target = event.target as IChangeElement;
    const value = target.value;
    const name = target.name;
    if (name === 'title') this.errorTitle(value);
    else if (name === 'author') this.errorAuthor(value);
    else if (name === 'year') this.errorYear(value);
    else if (name === 'desc') this.errorDesc(value);
    else if (name === 'radio') this.errorRadio();
    else if (name === 'check') this.errorCheck();
    else if (name === 'file') this.errorFile(value);
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    this.submitForm = false;
    const error = true;
    if (
      this.desc.current &&
      this.title.current &&
      this.year.current &&
      this.fileInput.current &&
      this.selectRef.current &&
      this.radioRefDetective.current &&
      this.radioRefFantasy.current &&
      this.radioRefHorror.current &&
      this.radioRefOther.current &&
      this.checkYes.current &&
      this.checkNo.current &&
      this.fileInput.current
    ) {
      const desc = this.desc.current?.value;
      const title = this.title.current?.value;
      const year = this.year.current?.value;
      const file = this.fileInput.current?.value;
      const author = this.selectRef.current?.value;
      //validation
      this.errorTitle(title);
      this.errorDesc(desc);
      this.errorYear(year);
      this.errorAuthor(author);
      this.errorRadio();
      this.errorCheck();
      this.errorFile(file);

      for (const key in this.state) {
        const t = key as keyof IAddBook;
        if (key === 'cards' || key === 'message') continue;
        if (this.state[t]) return;
      }

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

      const check = this.checkYes.current?.checked
        ? true
        : this.checkNo.current?.checked
        ? false
        : undefined;

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
          this.title.current.value = '';
          this.desc.current.value = '';
          this.title.current.value = '';
          this.year.current.value = '';
          this.fileInput.current.value = '';
          this.selectRef.current.value = '';
          this.radioRefHorror.current.value = '';
          this.radioRefFantasy.current.value = '';
          this.radioRefDetective.current.value = '';
          this.radioRefOther.current.value = '';
          this.checkYes.current.value = '';
          this.checkNo.current.value = '';
          this.fileInput.current.value = '';
          this.setState({ message: 'Book created!' });
          setTimeout(() => this.setState({ message: '' }), 4000);
        }
      }
    }
  }

  render() {
    return (
      <>
        <h3>{this.state.message}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input type="text" name="title" role="title" ref={this.title} onChange={this.change} />
            <span className="error" role="errorTitle">
              {this.state.errorTitle}
            </span>
          </label>
          <label>
            Desc
            <textarea ref={this.desc} name="desc" role="desc" onChange={this.change} />
            <span className="error" role="errorDesc">
              {this.state.errorDesc}
            </span>
          </label>
          <br />
          <label>
            Year:
            <input type="date" name="year" ref={this.year} role="year" onChange={this.change} />
            <span className="error" role="errorYear">
              {this.state.errorYear}
            </span>
          </label>
          <span>Author</span>
          <select ref={this.selectRef} name="author" role="author" onChange={this.change}>
            <ClassOptions />
          </select>
          <span className="error" role="errorAuthor">
            {this.state.errorAuthor}
          </span>
          <h4>Genre</h4>
          <p>
            <label>
              Horror
              <input
                role="genre"
                type="checkbox"
                ref={this.radioRefHorror}
                name="radio"
                value="Horror"
                onChange={this.change}
              />
            </label>
            <label>
              Fantasy
              <input
                type="checkbox"
                ref={this.radioRefFantasy}
                name="radio"
                value="Fantasy"
                onChange={this.change}
              />
            </label>
            <label>
              Detective
              <input
                type="checkbox"
                ref={this.radioRefDetective}
                name="radio"
                value="Detective"
                onChange={this.change}
              />
            </label>
            <label>
              Other
              <input
                type="checkbox"
                ref={this.radioRefOther}
                name="radio"
                value="Other"
                onChange={this.change}
              />
            </label>
            <span className="error" role="errorGenre">
              {this.state.errorGenre}
            </span>
          </p>

          <p>
            Like
            <label>
              Yes{' '}
              <input
                type="radio"
                ref={this.checkYes}
                name="check"
                value="Yes"
                onChange={this.change}
              />
            </label>
            <label>
              No{' '}
              <input
                type="radio"
                ref={this.checkNo}
                name="check"
                value="No"
                onChange={this.change}
              />
            </label>
            <span className="error">{this.state.errorCheck}</span>
          </p>
          <label>
            Upload file:
            <input
              type="file"
              ref={this.fileInput}
              accept="image/*"
              name="file"
              onChange={this.change}
            />
            <span className="error">{this.state.errorFile}</span>
          </label>

          <input type="submit" value="Create card" />
        </form>
        <ClassCardsBooks {...this.state.cards} />
      </>
    );
  }
}
