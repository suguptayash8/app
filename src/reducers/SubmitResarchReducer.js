import { submitResarch, ADD_NEW_PAPER } from "../actions/SubmitResarch";
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    vedicResearch: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.vedicResearch += 1
    },
    decrement: (state) => {
      state.vedicResearch -= 1
    },
    incrementByAmount: (state, action) => {
      state.vedicResearch += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

const counterReducer = counterSlice.reducer;

export default counterReducer;