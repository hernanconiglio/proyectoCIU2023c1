import React from "react";

const CardList = ({ cards }) => {
  return (
    <div className="container">
      {cards && cards.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {cards.map((card, index) => (
            <div className="col" key={index}>
              <div className="card">
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
        <p>No se encontraron tarjetas.</p>
      )}
    </div>
  );
};

export default CardList;
