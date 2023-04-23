import { PayloadAction } from '@reduxjs/toolkit';

import * as toolkitRaw from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { createSlice } = ((toolkitRaw as any).default ?? toolkitRaw) as typeof toolkitRaw;

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
