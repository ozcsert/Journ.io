import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import JournCard from './Journ';
import JournChest from './Card/Chest';
import TextInput from './Card/TextInputField';
import SideBar from './Card/SideBar';
import '../styles.css'

import { setHoveredCard } from '../reducers/hoveredReducer';
import debounce from 'lodash/debounce';

const CardContainer = () => {
  const JournCards = useSelector((state) => state.journCards);
  //const hoveredCard = useSelector((state) => state.hoveredCard);
  //const dispatch = useDispatch()
  const [lastHovered, setLastHovered] = useState(null)
  const [hovered, setHovered] = useState(null)
  const [hoveredCardPosition, setHoveredCardPosition] = useState({ x: 0, y: 0 });
  const currentHovered = hovered;

const handleMouseLeave = () => {

  setTimeout(() => {
    // Check if the current hovered value is still the same as when the timeout was set
      setLastHovered(currentHovered);

  }, 0);
  if (hovered !== lastHovered) {
  setHovered(null);
      console.log("mouseLeft hovered is " + hovered);
  }
  setTimeout(() => {
    setLastHovered(null);
  }, 3000);
}

const handleMouseEnter =  (event, index) => {
  
  //calculates the position of the parent element where the mouse cursor is inside
  const cardRect =  event.target.getBoundingClientRect();
  const x =  Math.round(cardRect.left + window.scrollX);
  const y =  Math.round(cardRect.top + window.scrollY);

    hovered === null ?
    setHoveredCardPosition({ x, y }) 
    :
    null

    console.log("index is" + index);
    lastHovered === index ?
    null
    :
    setHovered(index);
    console.log("hovered is " + hovered);

    setLastHovered(currentHovered)
    console.log(x);
    
  };

//  const handleMouseEnterDebounced = debounce((event, index) => {
//    handleMouseEnter(event, index);
//  }, 0);
//
//  const handleMouseLeaveDebounced = debounce(() => {
//    handleMouseLeave();
//  }, 0);

  // Function to add a new card to the row
  const addCard = () => {
    const newJournCard = {
      // Replace this with your card data
      title: 'Card Title',
      content: 'Card Content',
    };
    // Add new card to Redux store here
  };

  const SpawnPlaceHolder = () => {

    const zIndex = {
      zIndex: JournCards.length - hovered,
    };

    return (
    <div
    key={hovered}
    className={`flex grid-cols-5 rounded-xl mt-5 h-48 w-36 drop-shadow-2xl border-black
     text-primary shadow  transition-transform duration-1000 -mr-[80px] skew-y-[15deg] skew-x-[2deg] bg-opacity-50`}
    style= {zIndex}
  >
    <main className='grid col-start-1 grid-cols-1 grid-rows-6'>
      <div
        className="w-24 h-full p-2 "
        onBlur={(e) => {
          const updatedContent = e.target.innerText;
        }}
      >
      </div>
    </main>
    <aside
      className="col-start-5 rounded-r-lg bg-white"
    >
      <SideBar/>
    </aside>
  </div>
    )
  }

  return (
    <div className=" ml-10 mt-10 ">
      <div className="text-left">12, Sept  hovered{hovered}  lasthovered{lastHovered} current{currentHovered} </div>
      <div className=" flex p-2  h-full overflow-x-auto scrollbar-hide ">
        <div className="flex flex-nowrap items-start ml-5 mr-10 ">
          
          {JournCards.map((card, index) => {
            
            const hoveredPosition = {
              left: `${hoveredCardPosition.x - 75}px`, 
              top: `${hoveredCardPosition.y - 10}px`,
              zIndex: JournCards.length - index,
            };

            const hoveredStyle = () => {
              if (hovered !== null & hovered === index) {
                return `transform transition-transform duration-300 absolute
                translate-x-[30px] skew-y-[0deg] skew-x-[2deg] scale-150 `
              } else if (hovered !== null) {
                const translateX = index > hovered ? 'translate-x-0' : 'translate-x-[-150px]';
                return `transition-transform duration-500 ${translateX} skew-y-[15deg] -mr-[80px] skew-x-[2deg]`;
              } else if (hovered === null) {
                return `transition-transform duration-500 translate-x-0 skew-y-[15deg] -mr-[80px] skew-x-[2deg]  `;
              }
              else if ( hovered !== null & hovered !==index ) {
                return 'transition-transform duration-1000 translate-x-0 skew-y-[15deg] -mr-[80px] skew-x-[2deg] '
              } 
            }

            return (
            <>
            {hovered === index && <SpawnPlaceHolder hoveredPosition={hoveredPosition} />}
            <div
              key={index}
              className={`flex grid-cols-5 rounded-xl mt-5 h-48 w-36 drop-shadow-m  border-black
              bg-third text-primary shadow  ${hoveredStyle()}`}
              style= {hoveredPosition}
              //onMouseEnter={(event) => calculateCardPosition(event)}
              onClick={() => console.log(hovered)}
              onMouseLeave={() => handleMouseLeave()}
             // onMouseLeave={handleMouseLeave}
            >
              <main className='grid col-start-1 grid-cols-1 grid-rows-6'>
                {/* Replace <p> with an editable <div> */}
                <div
                  className="w-24 h-full p-2 "
                  onBlur={(e) => {
                    // Handle the onBlur event to update the card content
                    const updatedContent = e.target.innerText;
                    // Update the content in your state or Redux store as needed
                    // You can use the 'index' to identify which card is being edited
                    // Example: dispatch an action to update the content in Redux
                  }}
                >
                  {card.title}
                </div>
              </main>
              <aside
                className="col-start-5 rounded-r-lg bg-white"
                onMouseEnter={(event) => handleMouseEnter(event, index)}
                //onMouseEnter={() => hoverCardHandle(index) } // Set the hovered card
                
                 // Unset the hovered card
              >
                <SideBar index={index} hovered={hovered} />
              </aside>
            </div>
            </>
          )
          })}
          
          <div className="flex-none w-64 p-4">
            <button
              onClick={addCard}
              className="bg-blue-500 hover:bg-blue-600 
              text-white font-semibold py-2 px-4 rounded-lg"
            >
              Add Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
