import React from "react";
import AppName from "./AppName";
import Carousel from "./Carousel";
import Ticker from "./Ticker";
import Links from "./Links";

const Header = () => {
  return (
    <>
      <Links />
      <header>
        <AppName />
        <Carousel />
        <Ticker />
      </header>
    </>
  );
};

export default Header;
