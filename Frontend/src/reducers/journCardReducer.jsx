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
    deleteJournCard(state, action) {
      const index = state.findIndex(card => card._id === action.payload._id);
      console.log(action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
  }
}
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

export const deleteJourn =  journ => {
  return async dispatch => {
    console.log("createJournReducer triggered with the" + journ._id);

    const request = await JournCardServices.remove(journ._id)
    console.log(request);
    dispatch(deleteJournCard(journ))
  }
}

export const { setJournCards, appendJournCard, deleteJournCard } = journCardValueSlice.actions;
export default journCardValueSlice.reducer