import { PayloadAction } from '@reduxjs/toolkit';
import { IOneBook } from 'types/types';

import * as toolkitRaw from '@reduxjs/toolkit';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

export interface ISubmitForm {
  books: IOneBook[];
}
const initialState: ISubmitForm = {
  books: [],
};

export const submitFormSlice = createSlice({
  name: 'formBooks',
  initialState,
  reducers: {
    addBooks(state, action: PayloadAction<IOneBook>) {
      state.books.push(action.payload);
    },
  },
});

export default submitFormSlice.reducer;
