import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import CardDescription from "./CardDescription";
import Carousel from "./carousel";
import Featured from "./featured";
import All from "./All";

const NavigationBar = () => {
  return (
    <nav>
      <Link to="/">bailaesthetic</Link>
    </nav>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<All />} />
        <Route path="/card/:id" element={<CardDescription />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
