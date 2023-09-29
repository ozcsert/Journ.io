import {  FaTrash,} from 'react-icons/fa';
import { HiMiniRectangleStack } from 'react-icons/hi2';
import { HiPhotograph } from 'react-icons/hi';
import SideBarIcon from './SideBarIcon';
import { useEffect} from 'react';
import { FaGripLinesVertical } from 'react-icons/fa';
import { PiArrowFatLinesRightBold } from 'react-icons/pi';


const SideBar = ( { index, hovered } ) => {
    




    const renderView = () => {
        if (hovered === index) {
            return (
                <div>
                <SideBarIcon icon={<FaTrash size="28" />} text="Delete Journ"/>
                <SideBarIcon icon={<HiMiniRectangleStack size="28" />}/>
                <SideBarIcon icon={<HiPhotograph size="28" />} text="Add an image"/>
                </div>
            )
        }
        return (
            <div>
                <SideBarIcon icon={<FaGripLinesVertical size="28" />} text="Add an image"/>
                <SideBarIcon icon={<PiArrowFatLinesRightBold size="28" />} text="Add an image"/>
            </div>
        )
    }

    return (
        <div className= "flex-col w-16 h-full rounded-r-lg  bg-fourth text-primary shadow ">
            {renderView()}
        </div> 
    )
}






export default SideBar; 