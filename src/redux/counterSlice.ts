import { createSlice } from '@reduxjs/toolkit';

// Sliceの作成
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// ActionCreatorのエクスポート
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// Reducerのエクスポート
export default counterSlice.reducer;
