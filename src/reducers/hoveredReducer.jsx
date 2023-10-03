import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const hoveredCardValueSlice = createSlice({
  name: 'hoveredCard',
  initialState: null,
  reducers: {
    setHoveredCard(state, action)  {
      return action.payload;
    },
  },
});


export const { setHoveredCard } = hoveredCardValueSlice.actions;
export default hoveredCardValueSlice.reducer