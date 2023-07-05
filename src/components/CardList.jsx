import React, { useState } from "react";

const CardList = ({ cards }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="container">
      {cards && cards.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {cards.map((card, index) => (
            <div
              className={`col mb-4 ${
                hoveredCard === index ? "card-hovered" : ""
              }`}
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="card h-100">
                <img
                  src={card.links[0].href}
                  className="card-img-top"
                  alt={card.data[0].title}
                />
                <div className="card-body">
                  <h5 className="card-title">{card.data[0].title}</h5>
                  <p className="card-text">{card.data[0].description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="loadingData">No cards found with that filter!
        </p>
      )}
    </div>
  );
};

export default CardList;
