import React from 'react';
import * as objBooks from '../date.json';
import { ClassOneBook } from '../components/ClassOneBook';

import { IOneBook } from '../types/types';
class ClassCardsBooks extends React.Component {
  books: IOneBook[];
  constructor(props: Record<string, never>) {
    super(props);
    this.books = objBooks.books;
  }
  render() {
    return (
      <>
        <div className="cards">
          {this.books.map((item, index) => (
            <ClassOneBook key={index} {...item} />
          ))}
        </div>
      </>
    );
  }
}

export default ClassCardsBooks;
