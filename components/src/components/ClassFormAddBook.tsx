import React, { FormEvent, RefObject } from 'react';
import { IOneBook } from '../types/types';
import * as objBooks from '../date.json';
export class ClassFormAddBook extends React.Component {
  title: RefObject<HTMLInputElement>;
  year: RefObject<HTMLInputElement>;
  selectRef: RefObject<HTMLSelectElement>;
  books: IOneBook[];
  constructor(props: Record<string, never>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.title = React.createRef();
    this.year = React.createRef();
    this.selectRef = React.createRef();
    this.books = objBooks.books;
  }

  handleSubmit(event: FormEvent) {
    if (this.selectRef.current) alert('A name was submitted: ' + this.selectRef.current.value);
    event.preventDefault();
    const author = new Set(this.books.map((item) => item.author));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" ref={this.title} />
        </label>
        <label>
          Year:
          <input type="date" ref={this.year} />
        </label>
        <span>Author</span>
        <select ref={this.selectRef}>
          <option value="J. R. R. Tolkien">J. R. R. Tolkien</option>
          <option value="Arthur Conan Doyle">Arthur Conan Doyle</option>
        </select>
        <input type="submit" value="Create card" />
      </form>
    );
  }
}
