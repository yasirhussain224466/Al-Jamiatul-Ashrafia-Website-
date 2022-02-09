import React from "react";
import Header from "../../../../Components/Header";
import HomeText from "../../../../Components/HomeText";
import Testimonial from "../../../../Components/Testimonial";
import SideAd from "../../../../Components/SideAd";

const Home = () => {
  return (
    <>
      <Header />
      <div className="row ChildMain">
        <HomeText />
        <SideAd />
      </div>
      <Testimonial />
    </>
  );
};

export default Home;
