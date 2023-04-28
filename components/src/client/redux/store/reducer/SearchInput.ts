import { PayloadAction } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

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
