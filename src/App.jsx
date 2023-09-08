
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Background from "./Components/Background";
import JournChest from "./Components/Chest";
import SideBar from "./Components/SideBar"
import TextInput from "./Components/TextInputField"
import { initializeJourns } from './Reducers/journReducer';
//import { useState, useEffect, useCallback } from "react"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeJourns())
  }, [dispatch])



  return (
    
    <div className="flex">
        <main>
          <Background />
          <JournChest />
          <TextInput />
          <SideBar />
        </main>
    </div>
   
  )
}

export default App
