
import backgroundSvg from '../assets/layered-waves-dense.svg';
//import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import JournChest from './Card/Chest';
import Header from './Header'
import CardContainer from './CardContainer';
import TextInput from './Card/TextInputField'
import SideBar from './Card/SideBar'
import JournCard from './Journ';
import JournCardSmall from './JournSmall';


const AppPage = () => {

  return (
    <div className=" h-screen w-screens   bg-custom-svg-background bg-cover "
    style={{ backgroundImage: `url(${backgroundSvg})` }} >
      <Header />
      <div className="flex grid grid-cols-2 grid-rows-6 ">
      <CardContainer />

      </div>
        
        
    </div>
)}


export default AppPage