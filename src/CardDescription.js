import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemList } from "./dump.js";

const CardDescription = () => {
  const { id } = useParams();

  const card = itemList.items.find((item) => String(item.id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="cardDescription"
      style={{ backgroundImage: card.color, fontFamily: card.font }}
    >
      <div className="image">
        <img
          className="descriptionImg innerImage"
          src={card.image}
          alt={card.name}
        />
      </div>
      <div className="text">
        <div className="headers">
          <h1>{card.name}</h1>
          <h2>{card.tagline}</h2>
        </div>
        <div className="mobileImage">
          <img
            className="descriptionImg innerImage"
            src={card.image}
            alt={card.name}
          />
        </div>
        <div className="scrollable-content">
          {card.text && card.text.map((paragraph, index) => <p>{paragraph}</p>)}
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
