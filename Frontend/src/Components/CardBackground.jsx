import '../cardContainer.css'


const CardBackgroundComponent = ({ index, hoveredPosition, hoveredStyle, hovered}) => {

//    const hoveredStyle = () => {
//      if (hovered !== null & hovered === index) {
//        return `transform transition-transform duration-300 absolute
//        translate-x-[30px] skew-y-[0deg] skew-x-[2deg] scale-150 `
//      } else if (hovered !== null) {
//        const translateX = index > hovered ? 'translate-x-0' : 'translate-x-[-150px]';
//        return `transition-transform duration-500 ${translateX} skew-y-[15deg] -mr-[80px] skew-x-[2deg]`;
//      } else if (hovered === null) {
//        return `transition-transform duration-500 translate-x-0 skew-y-[15deg] -mr-[80px] skew-x-[2deg]  `;
//      }
//      else if ( hovered !== null & hovered !==index ) {
//        return 'transition-transform duration-1000 translate-x-0 skew-y-[15deg] -mr-[80px] skew-x-[2deg] '
//      } 
//    }
//
//    const hoveredPosition = {
//      left: `${hoveredCardPosition.x - 75}px`, 
//      top: `${hoveredCardPosition.y - 10}px`,
//      zIndex: JournCards.length - index,
//    };

    return (
    <div
    key={index}
    className={` absolute cardBackground flex grid-cols-5 rounded-xl mt-5 h-48 w-36 l
     text-primary  transition-transform duration-1000 -mr-[80px] skew-y-[15deg] skew-x-[2deg] ${hoveredStyle} `}
     style= {hoveredPosition}
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
    )
  }


  export default CardBackgroundComponent