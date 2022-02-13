import React from "react";
import reactLogo from "../assets/Images/logo.png";

const AppName = () => {
  return (
    <div className="logo-class">
      <h1>
        <img
          width={80}
          className="classlogo"
          src={reactLogo}
          alt="react logo"
        />{" "}
        Al-Jamiatul Ashrafiya
      </h1>
    </div>
  );
};

export default AppName;
