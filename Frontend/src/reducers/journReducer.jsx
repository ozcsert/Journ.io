import { createSlice } from "@reduxjs/toolkit";

const initialState = ""


const journValueSlice = createSlice({
  name: 'journs',
  initialState,
  reducers: {
    setJourns(state, action)  {
      return action.payload;
    },
  },
});



export const initializeJourns = () => {
  return async dispatch => {
    dispatch(setJourns(""))
  }
}




export const { setJourns } = journValueSlice.actions;
export default journValueSlice.reducer