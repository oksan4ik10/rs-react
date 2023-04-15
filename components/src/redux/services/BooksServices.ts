import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IOneBook } from '../../types/types';

export const booksAPI = createApi({
  reducerPath: 'booksAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rs-server-react.onrender.com/api/books' }),
  tagTypes: ['Books', 'OneBook'],
  endpoints: (build) => ({
    fetchAllBooks: build.query<IOneBook[], number>({
      query: (page = 0) => ({
        url: `/pagination`,
        params: {
          page: page,
        },
      }),
      providesTags: () => ['Books'],
    }),
    fetchOneBooks: build.query<IOneBook, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),
  }),
});
