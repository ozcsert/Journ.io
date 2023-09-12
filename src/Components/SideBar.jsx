import {  FaTrash,} from 'react-icons/fa';
import { HiMiniRectangleStack } from 'react-icons/hi2';
import { HiPhotograph } from 'react-icons/hi';
import SideBarIcon from './SideBarIcon';


const SideBar = () => {
    return (
        <div className= "flex-col w-16 h-full rounded-r-lg  bg-fourth text-primary shadow ">
            <SideBarIcon icon={<FaTrash size="28" />} text="Delete Journ"/>
            <SideBarIcon icon={<HiMiniRectangleStack size="28" />}/>
            <SideBarIcon icon={<HiPhotograph size="28" />} text="Add an image"/>
        </div> 
    )
}






export default SideBar; 