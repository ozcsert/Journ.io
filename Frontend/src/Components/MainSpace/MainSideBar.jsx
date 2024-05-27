
import { useState } from "react";
import { createJourn } from '../../reducers/journCardReducer'
import { useDispatch } from 'react-redux'
import SideBarIcon from "../Card/SideBarIcon"

import TextEditor from "../TextEditor";
import { IoIosAddCircleOutline } from "react-icons/io";
import NewTextEditor from "../NewTextEditor";

import Fab from '@mui/material/Fab';

const MainSideBar = ( onClick  ) => {
    const dispatch = useDispatch()
    const [text, setText] = useState(null)
    const [textArea, setTextArea] = useState(false)
    const [editorContent, setEditorContent] = useState("");

    const handleCreateTextArea =  () => {
        console.log("text area activated");
        setTextArea(true)
        } 

    const handleEditorContentChange = (journObjectToAdd) => {
        setEditorContent(journObjectToAdd)
        console.log(editorContent);
    }

    const HandleAddJourn = async  () => {
        console.log(editorContent);
            
            await dispatch(createJourn(editorContent))
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
                        <NewTextEditor onEditorContentChange={handleEditorContentChange} />
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