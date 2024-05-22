import AppPage from "./Components/AppPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeJournCards } from "./reducers/journCardReducer";
//import { useState, useEffect, useCallback } from "react"


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
      const initializeAsync = async () => {
        await dispatch(initializeJournCards());
        // Additional code that depends on the dispatch result, if needed
      };
    
      initializeAsync();
    }, [dispatch]);


  return (
    <div className='overflow-hidden'>
       
      <Router>
        <Routes>
          <Route path='/' element={<AppPage />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
