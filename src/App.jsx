import Background from "./Components/Background";
import SideBar from "./Components/SidebBar"
import TextInput from "./Components/TextInputField"
//import { useState, useEffect, useCallback } from "react"

function App() {

  return (
    
    <div className="flex">
        <main>
          <Background />
        <SideBar />
        <TextInput />
        </main>
      
    </div>
   
  )
}

export default App
