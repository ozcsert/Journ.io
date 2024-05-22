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
    appendJournCard(state, action) {
      state.push(action.payload)
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

export const createJourn = content => {
  return async dispatch => {
    console.log("createJournReducer triggered with the" + content.journ);
    const newJourn = await JournCardServices.createNew(content)
    dispatch(appendJournCard(newJourn))
  }
}

//export const createQuote = content => {
//  return async dispatch => {
//    console.log(content);
//    const newAnecdote = await JournCardServices.createNew(content)
//    dispatch(appendAnecdote(newAnecdote))
//  }
//}



export const { setJournCards, appendJournCard } = journCardValueSlice.actions;
export default journCardValueSlice.reducer