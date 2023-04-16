import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IInputSerach {
  searchQuery: string;
}
const initialState: IInputSerach = {
  searchQuery: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveSearch(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export default searchSlice.reducer;
