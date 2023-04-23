// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IOneBook } from '../../types/types';

import pkg from '@reduxjs/toolkit/dist/query/react/index.js';
const { createApi, fetchBaseQuery } = pkg;

interface IMainRequest {
  page: number;
  query: string;
  type: string;
}

export const booksAPI = createApi({
  reducerPath: 'booksAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rs-server-react.onrender.com/api/books' }),
  tagTypes: ['Books', 'OneBook'],
  endpoints: (build) => ({
    fetchAllBooks: build.query<IOneBook[], IMainRequest>({
      query: ({ page, query, type }) => {
        if (type === 'search') {
          return {
            url: `/search`,
            params: {
              query: query,
            },
          };
        }
        return {
          url: `/pagination`,
          params: {
            page: page,
          },
        };
      },
      providesTags: () => ['Books'],
    }),

    fetchOneBooks: build.query<IOneBook, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),
  }),
});
