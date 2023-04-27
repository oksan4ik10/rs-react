import * as rtkQuery from '@reduxjs/toolkit/dist/query/react/index.js';
import createApi from './createApi';
import { IOneBook } from '../../../types/types';

interface IMainRequest {
  page: number;
  query: string;
  type: string;
}

type TypeRtkQuery = typeof rtkQuery & { default?: unknown };
const { fetchBaseQuery } = ((rtkQuery as TypeRtkQuery).default ?? rtkQuery) as typeof rtkQuery;

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
