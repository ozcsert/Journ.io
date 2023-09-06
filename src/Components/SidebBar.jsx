import {  FaTrash,} from 'react-icons/fa';
import { HiMiniRectangleStack } from 'react-icons/hi2';
import SideBarIcon from './SideBarIcon';


const SideBar = () => {
    return (
        <div className= "fixed top-0 right-0 h-screen w-16 m-0 flex flex-col bg-fourth text-primary shadow">
            <SideBarIcon icon={<FaTrash size="28" />}/>
            <SideBarIcon icon={<HiMiniRectangleStack size="28" />}/>
        </div> 
    )
}






export default SideBar; 