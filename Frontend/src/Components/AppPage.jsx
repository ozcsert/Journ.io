
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
import backgroundImage from '../assets/image-(4).png'

const AppPage = () => {

  return (
    <div className=" h-screen w-screens bg-[url('/src/assets/image-(7).png')] bg-cover " 
     >
      
      
      <Header />
      
      <MainDesktop />
        
      </div>
        
        
   
  )
}


export default AppPage