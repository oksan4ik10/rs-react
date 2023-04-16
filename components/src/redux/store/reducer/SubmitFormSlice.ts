import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IOneBook } from 'types/types';

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
