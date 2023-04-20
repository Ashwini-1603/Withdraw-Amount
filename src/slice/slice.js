import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 20000,
  error: 'your balence is low',
  // 2490701
};

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrementby10: (state) => {
      if (state.value >= 10000) {
        state.value -= 10000;
      } else {
        state.error;
      }
    },
    decrementby5: (state) => {
      console.log(state.value);
      if (state.value >= 5000) {
        state.value -= 5000;
      } else {
        console.log(state.error);
        state.error;
      }
    },
  },
});

export const { decrementby10, decrementby5 } = slice.actions;

export default slice.reducer;
