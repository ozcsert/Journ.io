import {  FaTrash,} from 'react-icons/fa';
import { HiMiniRectangleStack } from 'react-icons/hi2';
import { HiPhotograph } from 'react-icons/hi';
import SideBarIcon from './SideBarIcon';
import { useEffect} from 'react';
import { FaGripLinesVertical } from 'react-icons/fa';
import { PiArrowFatLinesRightBold } from 'react-icons/pi';


const SideBar = ( { index, hovered, onClick1, onClick2, className, classNameText, sidebarsize } ) => {
    //const sidebarsize = 12
    const sidebarSize= ` transition-all duration-500 w-${sidebarsize} `

    const iconsize = ` transition-all duration-500 w-${sidebarsize*2}`

    const renderView = () => {
        console.log(sidebarSize);
        if (hovered === index) {
            return (
                <div>
                <SideBarIcon className={`sidebar-icon  ${iconsize}`} classNameText={"sidebar-tooltip"} icon={<FaTrash />} onClick={onClick2} text="Delete Journ"/>
                <SideBarIcon className={`sidebar-icon  ${iconsize}`} classNameText={"sidebar-tooltip"} icon={<PiArrowFatLinesRightBold />} onClick={onClick1} text="Slide right"/>
                <SideBarIcon className={`sidebar-icon  ${iconsize}`} classNameText={"sidebar-tooltip"} icon={<HiMiniRectangleStack />}/>
                <SideBarIcon className={`sidebar-icon  ${iconsize}`} classNameText={"sidebar-tooltip"} icon={<HiPhotograph  />} text="Add an image"/>
                </div>
            )
        }
        return (
            <div>
                <SideBarIcon className={`sidebar-icon  ${iconsize}`} classNameText={"sidebar-tooltip"} icon={<FaGripLinesVertical  />} text="Add an image"/>
                <SideBarIcon className={`sidebar-icon  ${iconsize}`} classNameText={"sidebar-tooltip"} icon={<PiArrowFatLinesRightBold  />} text="Add an image"/>
            </div>
        )
    }
    return (
        <div className= {` flex-col ${sidebarSize} size-full rounded-r-lg flex items-center justify-center  bg-white text-primary  bg-opacity-75 `}>
            {renderView()}
        </div> 
    )
}






export default SideBar; 