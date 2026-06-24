import React from "react";
import { itemList } from "./dump.js";

const Carousel = ({ categoryName, goToCardDescription }) => {
  return (
    <div className="carousel-div">
      <h1>{categoryName}</h1>
      <div className={`${categoryName} carousel-container`}>
        <ul>
          {itemList.items
            .filter(
              (item) =>
                item.category === categoryName && item.status !== "featured"
            )
            .map((item) => (
              <li key={item.id} onClick={() => goToCardDescription(item)}>
                <img src={item.image} className="descriptionImg" />
                <div className="carousel-p-container">
                  <p className="bold">{item.name}</p>
                  <p>{item.tagline}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
