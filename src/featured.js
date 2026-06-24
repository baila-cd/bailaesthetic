import React from "react";
import { itemList } from "./dump.js";

const Featured = ({ goToCardDescription }) => {
  let featuredItem = itemList.items.filter(
    (item) => item.status === "featured"
  );
  let bgcolor = featuredItem[0].color;
  let font = featuredItem[0].font;

  return (
    <div
      className="featuredDiv"
      style={{
        backgroundImage: bgcolor,
        fontFamily: font,
      }}
    >
      <h1>Featured Article</h1>
      {featuredItem.map((item) => (
        <li key={item.id} onClick={() => goToCardDescription(item)}>
          <img src={item.image} />
          <div className="p-container">
            <p>{item.name}</p>
            <p>{item.extendedTagline}</p>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Featured;
