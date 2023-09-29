import JournChest from "./Chest"



const CardMain = (index) => {

    return (
        <main className="grid grid-cols-1 grid-rows-6 p-3 w-100px  ">
        {hoveredCard === index ? <JournChest/> : ''}
        
      <JournChest  />
      
      </main>
    )
}



export default CardMain