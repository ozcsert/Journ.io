
import backgroundSvg from '../assets/layered-waves-dense.svg';
//import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import JournChest from './Card/Chest';
import Header from './Header'
import CardContainer from './MainSpace/CardContainer';
//import TextInput from './Card/TextInputField'
//import SideBar from './Card/SideBar'
//import JournCard from './Journ';
//import JournCardSmall from './JournSmall';
import '../cardContainer.css'
import MainDesktop from './MainDesktop';


const AppPage = () => {

  return (
    <div className=" h-screen w-screens bg-gradient-to-b from-slate-800 to-grey-900 bg-cover "
     >
      
      
      <Header />
      
      <MainDesktop />
        
      </div>
        
        
   
  )
}


export default AppPage