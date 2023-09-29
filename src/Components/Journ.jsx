import JournChest from "./Card/Chest"
import TextInput from "./Card/TextInputField"
import SideBar from "./Card/SideBar"
import { useState } from "react"


const JournCard = () => {
  const [enlarged, setEnlarged] = useState(false)

  const renderView = () => { 
    
}


    return (
      <div className="flex justify-center items-center h-screen ">
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
    )
}


export default JournCard