import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IOneBook } from '../../types/types';

export const booksAPI = createApi({
  reducerPath: 'booksAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rs-server-react.onrender.com/api/books' }),
  tagTypes: ['Books'],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IOneBook[], number>({
      query: (limit = 5) => ({
        url: `/pagination`,
        params: {
          page: limit,
        },
      }),
      providesTags: () => ['Books'],
    }),
  }),
});
