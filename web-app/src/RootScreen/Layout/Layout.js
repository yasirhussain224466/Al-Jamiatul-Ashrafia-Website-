import React, { useState } from "react";
import Aside from "./Aside/Aside";
import Main from "./Main/Main";
import SearchAppBar from "../Components/SearchAppBar";
import SpeedDial from "../Components/SpeedDial";
import { Grid } from "@mui/material";

function Layout() {
  // const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <>
      <SpeedDial />
      <SearchAppBar
        handleToggleSidebar={handleToggleSidebar}
        toggled={toggled}
      />

      <div className={`app ${toggled ? "toggled" : ""}`}>
      
            <Aside
              image={image}
              collapsed={collapsed}
              toggled={toggled}
              handleToggleSidebar={handleToggleSidebar}
            />
            {console.log(toggled)}
          {/* </Grid> */}
        
        
        <Main
          image={image}
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
          handleImageChange={handleImageChange}
        />
      </div>
    </>
  );
}

export default Layout;
