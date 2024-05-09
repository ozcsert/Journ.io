
import SideBarIcon from "../Card/SideBarIcon"
import { FaTrash } from "react-icons/fa"



const MainSideBar = () => {

    return (
        <div className="row-span-5 rounded-xl " >
            <p>activateSlider</p>
            <SideBarIcon icon={<FaTrash size="28" />} text="Delete Journ"/>
        </div>
        
    )
}



export default MainSideBar