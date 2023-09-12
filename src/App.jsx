
import Background from "./Components/Background";
import JournChest from "./Components/Chest";
import SideBar from "./Components/SideBar"
import TextInput from "./Components/TextInputField"

import Header from './Components/Header';
import backgroundSvg from './assets/layered-waves-dense.svg';

//import { useState, useEffect, useCallback } from "react"

function App() {
//  const dispatch = useDispatch()
//
//  useEffect(() => {
//    dispatch(initializeJourns())
//  }, [dispatch])
//
//

  return (
    <div className=" relative bg-custom-svg-background bg-cover font-"
    style={{ backgroundImage: `url(${backgroundSvg})` }} >
      <Header />
    <div className="flex justify-center items-center  h-screen ">
        <div className='flex grid-cols-5 rounded-xl h-4/6 border-black bg-third text-primary shadow '>
            <main className='grid grid-cols-1 grid-rows-6 p-3'>
              <JournChest  />
              <TextInput  />
            </main>
            <aside className= ' col-start-5 rounded-r-lg bg-white pl-1 ' >
              <SideBar />
            </aside>
        </div>
    </div>
    </div>
  )
}

export default App
