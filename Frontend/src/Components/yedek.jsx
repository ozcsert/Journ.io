import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CardContainer = () => {
  const JournCards = useSelector((state) => state.journCards);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Function to add a new card to the row
  const addCard = () => {
    const newJournCard = {
      // Replace this with your card data
      title: 'Card Title',
      content: 'Card Content',
    };
    // Add new card to Redux store here
  };

  return (
    <div className="w-screen overflow-x-auto ">
      <div className="flex flex-nowrap p-4">
        {JournCards.map((card, index) => (
          <div
            key={index}
            className={`flex-none w-64 bg-white rounded-lg shadow-lg p-4 transition-transform ${
              hoveredCard === index ? 'scale-110' : ''
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
        <div className="flex-none w-64 p-4">
          <button
            onClick={addCard}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Add Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
