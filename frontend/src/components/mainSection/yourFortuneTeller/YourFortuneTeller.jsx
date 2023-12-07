import React, { useState, useEffect } from "react";
import axios from "axios";
import "./yourFortuneTeller.css";



export default function YourFortuneTeller() {
  const [tarotData, setTarotData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  

  useEffect(() => {
    async function fetchTarotData() {
      try {
        const response = await axios.get("http://localhost:5500/yourfortuneteller");
        setTarotData(response.data[0]);
      } catch (error) {
        console.error("Error fetching tarot data:", error);
      }
    }

    fetchTarotData();
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const renderSelectedCard = () => {
    if (selectedCard !== null) {
      return (
         <div className="selected-card">
          <img src={selectedCard.imageUrl} alt={selectedCard.name} />
          <h2>{selectedCard.name}</h2>
          <p>{selectedCard.description}</p>
           
        </div>
      );
    }
    return null;
  };

  return (
    <div className="fortuneTeller-container">
      <h2 className="fortuneTeller-title">Select a card for your fortune</h2>
      <div className="card-row">
        {tarotData &&
          Object.keys(tarotData).map((key, index) => {
            const card = tarotData[key];
            return (
              <img src={card.tarotUrl}            
                className={`card card-${index}`}
                onClick={() => handleCardClick(card)}
              />
            );
          })}
      </div>
      {renderSelectedCard()}
    </div>
  );
}
