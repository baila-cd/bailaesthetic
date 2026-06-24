import React from "react";
import { useNavigate } from "react-router-dom";
import { itemList } from "./dump.js";

const All = () => {
  const navigate = useNavigate();
  const goToCardDescription = (item) => {
    navigate(`/card/${item.id}`);
  };

  return (
    <>
      <h1 className="allH1">All articles</h1>
      <div className="allDiv">
        {itemList.items.map((item) => (
          <li
            key={item.id}
            onClick={() => goToCardDescription(item)}
            className="allLi"
          >
            <img src={item.image} className="allImg" />
            <div className="all-p-container">
              <p className="bold">{item.name}</p>
              <p>{item.tagline}</p>
            </div>
          </li>
        ))}
      </div>
    </>
  );
};

export default All;
