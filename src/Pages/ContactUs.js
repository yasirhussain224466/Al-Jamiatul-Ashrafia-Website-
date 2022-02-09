import React from "react";
import Links from "../Components/Links";
import Header from "../Components/Header";
import Contact from "../Components/Contact";
import Mureed from "../Components/Mureed";
import OnlineFatwa from "../Components/OnlineFatwa";
import Testimonial from "../Components/Testimonial";
import LinksContact from "../Components/LinksContact";
import SideAd from "../Components/SideAd";

const ContactUs = () => {
  return (
    <>
      <Links />
      <Header /> {/* AppName - Carousel - Ticker  */}
      <div style={{ marginBottom: "20px" }} className="row ChildMain">
        <div className="col-md-9">
          <LinksContact />
          <Contact />
        </div>

        <SideAd/>
      </div>
      <Testimonial />
    </>
  );
};

export default ContactUs;
