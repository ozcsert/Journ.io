
import { useState } from "react";
import SideBarIcon from "../Card/SideBarIcon"

import TextEditor from "../TextEditor";
import { IoIosAddCircleOutline } from "react-icons/io";

const MainSideBar = ( onClick ) => {
const [text, setText] = useState(null)
const [textArea, setTextArea] = useState(false)
    
    const handleCreateTextArea =  () => {
        console.log("text area activated");
        console.log(text);
        setTextArea(true)
        } 
         
        const renderView = () => {

            if (textArea === false)  { 
                return ( 
                    <div className="row-span-5 rounded-xl mt-40" >
                    <SideBarIcon icon={<IoIosAddCircleOutline size="48" />} onClick={handleCreateTextArea} text="Add Journ"/>
                    </div>
                )
            } else if (textArea === true) {
                return (
                    <div className="row-span-5 rounded-xl " >
                        <TextEditor />
                    
                    </div>
                ) 
        }
    }

    return (
        <div>
        {renderView()}
        </div>
        
    )


}




export default MainSideBar