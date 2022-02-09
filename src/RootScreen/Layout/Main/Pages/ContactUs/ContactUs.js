import React from "react";
import Header from "../../../../Components/Header";
import Contact from "../../../../Components/Contact";
import Testimonial from "../../../../Components/Testimonial";
import LinksContact from "../../../../Components/LinksContact";
import SideAd from "../../../../Components/SideAd";

const ContactUs = () => {
  return (
    <>
      <Header /> {/* Links - AppName - Carousel - Ticker  */}
      <div style={{ marginBottom: "20px" }} className="row ChildMain">
        <div className="col-md-9">
          <LinksContact />
          <Contact />
        </div>
        <SideAd />
      </div>
      <Testimonial />
    </>
  );
};

export default ContactUs;
