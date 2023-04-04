export interface MyStateInput {
  date: string;
}

export interface MyStateRouteHeader {
  date: string;
}

export interface IMyStatelikes {
  date: string;
  count: number;
}

export interface IOneBook {
  author: string;
  desc: string;
  genre: string;
  img: string;
  title: string;
  year: number;
  check?: boolean;
}
export interface IObjDate {
  books?: IOneBook[];
}
export interface IAddBook {
  cards: {
    books: IOneBook[];
  };
  message: string;
  errorTitle: string;
  errorDesc: string;
  errorYear: string;
  errorAuthor: string;
  errorGenre: string;
  errorFile: string;
  errorCheck: string;
}
export type IChangeElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
