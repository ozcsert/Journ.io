
import { useState } from "react";
import SideBarIcon from "../Card/SideBarIcon"

import TextEditor from "../TextEditor";
import { IoIosAddCircleOutline } from "react-icons/io";
import NewTextEditor from "../NewTextEditor";

import Fab from '@mui/material/Fab';



const MainSideBar = ( onClick ) => {
const [text, setText] = useState(null)
const [textArea, setTextArea] = useState(false)
    
    const handleCreateTextArea =  () => {
        console.log("text area activated");
        console.log(text);
        setTextArea(true)
        } 

        const HandleAddJourn =  () => {
            console.log("journ added");
            console.log(text);
            setTextArea(false)
            } 


        
        const renderView = () => {
            if (textArea === false)  { 
                return ( 
                    <div className="row-span-5 rounded-xl mt-40" >
                    <SideBarIcon className={"sidebar-icon"} classNameText={"sidebar-tooltip"} icon={<IoIosAddCircleOutline size="48" />} onClick={handleCreateTextArea} text="Add Journ"/>
                    </div>
                )
            } else if (textArea === true) {
                return (
                    <div className="row-span-5 rounded-xl" >
                        <NewTextEditor />
                        <div >
                            <Fab color="primary" aria-label="add">
                                <SideBarIcon 
                                className={"sidebar-icon"} 
                                classNameText={"sidebar-tooltip"} 
                                icon={<IoIosAddCircleOutline size="28" />} 
                                onClick={HandleAddJourn} 
                                text="Done"/>
                            </Fab>
                        </div>
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