import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';

export interface IList {
  id: string;
  name: string;
}

export interface ListState {
  lists: IList[];
}

const initialState: ListState = {
  lists: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addList: (_state, action: PayloadAction<IList>) => {
      const state = _state;
      state.lists = [...state.lists, action.payload];
    },
    removeList: (_state, action: PayloadAction<string>) => {
      const state = _state;
      state.lists = state.lists.filter((l) => l.id !== action.payload);
    },
  },
  extraReducers: () => {},
});

export const { addList, removeList } = listSlice.actions;

export const selectLists = (state: RootState) => state.list.lists;
export const selectListItem = (id: string) => (state: RootState) =>
  state.list.lists.find((l) => l.id === id);

export default listSlice.reducer;
