import {  createSlice } from "@reduxjs/toolkit";
import JournCardServices from '../services/JournCard'


const initialState = []


const journCardValueSlice = createSlice({
  name: 'journCards',
  initialState,
  reducers: {
    setJournCards(state, action)  {
      return action.payload;
    },
  },
});



export const initializeJournCards = () => {
  return async dispatch => {
    const JournCards = await JournCardServices.getAll()
    console.log(JournCards);
    dispatch(setJournCards(JournCards))
  }
}





export const { setJournCards } = journCardValueSlice.actions;
export default journCardValueSlice.reducer