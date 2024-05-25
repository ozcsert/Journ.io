import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SideBar from '../Card/SideBar';
import "../../styles.css"
import { deleteJourn } from '../../reducers/journCardReducer'
import '../../cardContainer.css'

//import backgroundSvg from '../assets/layered-waves-dense.svg';
const CardContainer = () => {
  const JournCards = useSelector((state) => state.journCards);
  const dispatch = useDispatch()
  //const hoveredCard = useSelector((state) => state.hoveredCard);
  //const dispatch = useDispatch()
  const [lastHovered, setLastHovered] = useState(null)
  const [hovered, setHovered] = useState(null)
  const [hoveredCardPosition, setHoveredCardPosition] = useState({ x: 0, y: 0 });
  const [sliderActive, setSliderActive] = useState(false)

  const currentHovered = hovered;

  const handleMouseLeave = () => {
    if (sliderActive === false) {
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
  }

  const handleMouseEnter =  (event, index) => {
    if (sliderActive === false) {
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
      } 
  };

  const activateSlider = () => {
    setSliderActive(!sliderActive)
    
  }

  const HandleDeleteJourn = async (card) => {
      const cardToDelete = await JournCards.find(a => a.id === card.id)
      
      dispatch(deleteJourn(cardToDelete))
  }

  const SpawnPlaceHolder = () => {

    const zIndex = {
      zIndex: JournCards.length - hovered,
    };

    return (
      <div className="col-span-4 row-span-4 col-start-2 row-start-2" >
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
            className="col-start-5 rounded-r-lg"
          >
          </aside>
        </div>
      </div>
    )
  }

  return (
    <div className=" ml-10 mt-10 h-80 ">
      <div className="text-left">12, Sept  hovered{hovered}  lasthovered{lastHovered} current{currentHovered} </div>
      <div className=" flex p-2  h-full overflow-x-auto scrollbar-hide ">
        <div className="flex  flex-nowrap items-start ml-5 mr-10 ">
          
          {JournCards.map((card, index) => {
            
            const hoveredPosition = {
              left: `${hoveredCardPosition.x - 75}px`, 
              top: `${hoveredCardPosition.y - 10}px`,
              zIndex: JournCards.length - index,
            };

            const boxShadow = {
              boxShadow: 'rgb(180, 180, 219) 0px 0px 0px 2px inset, rgb(192, 226, 240) 10px -5px 0px -3px, rgb(91, 158, 90) 10px -5px, rgb(255, 255, 255) 20px -13px 0px -3px, rgb(255, 217, 19) 20px -13px',
            };

            const hoveredStyle = () => {
              if (hovered !== null & hovered === index) {
                return `transform transition-transform duration-300 absolute
                translate-x-[30px] skew-y-[0deg] skew-x-[2deg] scale-150 `
              } else if (hovered !== null) {
                const translateX = index > hovered ? 'translate-x-0' : 'translate-x-[-150px]';
                return `transition-transform duration-500 ${translateX} skew-y-[15deg] -mr-[80px] skew-x-[2deg]   `;
              } else if (hovered === null) {
                return `transition-transform duration-500 translate-x-0 skew-y-[15deg] -mr-[80px] skew-x-[2deg] `;
              }
              else if ( hovered !== null & hovered !==index ) {
                return `transition-transform duration-1000 translate-x-0 skew-y-[15deg] -mr-[80px] skew-x-[2deg] `
              } 
            }

            return (
            <>
            {hovered === index && <SpawnPlaceHolder hoveredPosition={hoveredPosition} />}
            
            <div
              key={index}
              className={` flex grid-cols-5 rounded-xl mt-5 h-48 w-36 drop-shadow-m border-black
              bg-third text-primary bg-opacity-75 ${hoveredStyle()}`}
              
              style= {{...hoveredPosition}}
              //onMouseEnter={(event) => calculateCardPosition(event)}
              
              onMouseLeave={() => handleMouseLeave()}
             // onMouseLeave={handleMouseLeave}
            >
              <main className='grid col-start-1 grid-cols-1 grid-rows-6 rounded-xl bg-third text-primary bg-opacity-75 '>
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
                  {card.journ}
                  {card.date}
                  
                </div>
              </main>
              <aside
                className=" col-start-5 rounded-r-lg"
                onMouseEnter={(event) => handleMouseEnter(event, index)}
                //onMouseEnter={() => hoverCardHandle(index) } // Set the hovered card
                
                 // Unset the hovered card
              >
                <SideBar index={index} hovered={hovered} onClick1={activateSlider} onClick2={() => HandleDeleteJourn(card)} />
              </aside>
            <div className=" absolute h-48 w-36 cardBackground rounded-xl  ml-5 -z-10 -translate-y-3 bg-[rgba(173, 216, 230, 0.7)] backdrop-blur-xl"></div>
            <div className="absolute cardBlur h-3 w-[125px]  -translate-y-3 ml-5 -skew-x-[60deg]"></div>
            
            <div className="absolute cardBlur h-3 w-[125px]  translate-y-[180px] ml-5  -skew-x-[60deg] -z-10"></div>
            <div className="absolute cardBlur w-5 h-[170px] translate-x-[144px] translate-y-[3px] -skew-y-[30deg] "></div>
            <div className="absolute cardBlur w-5 h-[170px] translate-y-[3px] -skew-y-[30deg] -z-10 "></div>
            <div className="absolute corner h-[70px] w-[25px] -translate-y-[64px] translate-x-[185px]  -skew-x-[60deg] skew-y-[20deg]"></div>
          </div>
            </>
          )
          })}
          <div className="flex-none w-64 p-4">
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;




