import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { itemList } from "./dump.js";
import Carousel from "./carousel";
import Featured from "./featured";
import All from "./All";

const Home = () => {
  const navigate = useNavigate();
  const goToCardDescription = (item) => {
    navigate(`/card/${item.id}`);
  };

  const goToRandomCard = () => {
    let randomNumber = Math.floor(Math.random() * itemList.items.length);
    let randomCard = itemList.items[randomNumber];
    goToCardDescription(randomCard);
  };

  return (
    <>
      <Featured goToCardDescription={goToCardDescription} />
      <button onClick={() => goToRandomCard()} className="randomButton">
        <p>Random Article</p>
      </button>
      <Carousel
        categoryName={"Music"}
        goToCardDescription={goToCardDescription}
      />
      <Carousel
        categoryName={"Games"}
        goToCardDescription={goToCardDescription}
      />
      <Carousel
        categoryName={"Misc"}
        goToCardDescription={goToCardDescription}
      />
      <button
        onClick={() => navigate("/articles")}
        className="allArticlesButton"
      >
        All articles
      </button>
    </>
  );
};

export default Home;
