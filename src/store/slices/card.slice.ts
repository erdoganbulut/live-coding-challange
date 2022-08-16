import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';

export interface ICard {
  id: string;
  name: string;
  listId: string;
}

export interface ICardState {
  cards: ICard[];
}

const initialState: ICardState = {
  cards: [],
};

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (_state, action: PayloadAction<ICard>) => {
      const state = _state;
      state.cards = [...state.cards, action.payload];
    },
  },
  extraReducers: () => {},
});

export const { addCard } = cardSlice.actions;

export const selectCards = (state: RootState) => state.card.cards;
export const selectCardItem = (id: string) => (state: RootState) =>
  state.card.cards.find((o) => o.id === id);
export const selectListCardItems = (id: string) => (state: RootState) =>
  state.card.cards.filter((o) => o.listId === id);

export default cardSlice.reducer;
