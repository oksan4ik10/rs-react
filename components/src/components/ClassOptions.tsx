import React from 'react';
import * as objBooks from '../date.json';
export class ClassOptions extends React.Component {
  books: string[];
  constructor(props: Record<string, never>) {
    super(props);
    this.books = Array.from(new Set(objBooks.books.map((item) => item.author)));
  }
  render(): React.ReactNode {
    return (
      <>
        <option value="Change author">Change author</option>
        {this.books.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </>
    );
  }
}
