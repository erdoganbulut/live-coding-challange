import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import listReducer from './slices/list.slice';
import cardReducer from './slices/card.slice';

export const store = configureStore({
  reducer: {
    list: listReducer,
    card: cardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
