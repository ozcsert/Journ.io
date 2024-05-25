import {  FaTrash,} from 'react-icons/fa';
import { HiMiniRectangleStack } from 'react-icons/hi2';
import { HiPhotograph } from 'react-icons/hi';
import SideBarIcon from './SideBarIcon';
import { useEffect} from 'react';
import { FaGripLinesVertical } from 'react-icons/fa';
import { PiArrowFatLinesRightBold } from 'react-icons/pi';


const SideBar = ( { index, hovered, onClick1, onClick2, className, classNameText } ) => {





    const renderView = () => {
        if (hovered === index) {
            return (
                <div>
                <SideBarIcon className={"sidebar-icon"} classNameText={"sidebar-tooltip"} icon={<FaTrash size="28" />} onClick={onClick2} text="Delete Journ"/>
                <SideBarIcon className={"sidebar-icon"} classNameText={"sidebar-tooltip"} icon={<PiArrowFatLinesRightBold size="28" />} onClick={onClick1} text="Slide right"/>
                <SideBarIcon className={"sidebar-icon"} classNameText={"sidebar-tooltip"} icon={<HiMiniRectangleStack size="28" />}/>
                <SideBarIcon className={"sidebar-icon"} classNameText={"sidebar-tooltip"} icon={<HiPhotograph size="28" />} text="Add an image"/>
                </div>
            )
        }
        return (
            <div>
                <SideBarIcon className={"sidebar-icon"} classNameText={"sidebar-tooltip"} icon={<FaGripLinesVertical size="28" />} text="Add an image"/>
                <SideBarIcon className={"sidebar-icon"} classNameText={"sidebar-tooltip"} icon={<PiArrowFatLinesRightBold size="28" />} text="Add an image"/>
            </div>
        )
    }

    return (
        <div className= "flex-col w-16 h-full rounded-r-lg  bg-white text-primary  bg-opacity-75 ">
            {renderView()}
        </div> 
    )
}






export default SideBar; 