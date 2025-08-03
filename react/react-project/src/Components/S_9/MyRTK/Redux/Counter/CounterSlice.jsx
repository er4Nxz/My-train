import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inc: (state, action) => {
      state.count += action.payload;
    },
    dec: (state, action) => {
      state.count -= action.payload;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});
export const { inc, dec, reset } = CounterSlice.actions;
export default CounterSlice.reducer;
