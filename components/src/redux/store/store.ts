import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { booksAPI } from '../services/BooksServices';
import SearchInput from './reducer/SearchInput';

const rootReducer = combineReducers({
  SearchInput,
  [booksAPI.reducerPath]: booksAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
