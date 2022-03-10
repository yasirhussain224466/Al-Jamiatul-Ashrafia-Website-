import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { VscClose } from "react-icons/vsc";
import { useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa"; //Home
import { ImBook } from "react-icons/im"; //library
import { TiContacts } from "react-icons/ti"; //contact
import { MdPermMedia } from "react-icons/md"; //Media
// import { AiFillInfoCircle } from "react-icons/ai"; //About Us
// import {
//   BsFillPeopleFill, // Khanwada Ashrafiya
//   BsFillPersonLinesFill, //Shijra
// } from "react-icons/bs";

const SearchAppBar = ({ handleToggleSidebar, toggled }) => {
  let AppName;
  const location = useLocation();
  const pathName = location.pathname;
  if (pathName === "/Contact") {
    AppName = "Contact Us";
  }
  else if (pathName === "/") {
    AppName = "Home";
  }
  else if (pathName === "/library/books") {
    AppName = "Library/Books";
  }
  else if (pathName === "/library/articles") {
    AppName = "Library/Articles";
  }
  else if (pathName === "/Library_MilladIbneKaseer") {
    AppName = "Library";
  }
  else if (pathName === "/Library_hindustankaTazkirah") {
    AppName = "Library";
  }
  else if (pathName === "/Gallery") {
    AppName = "Media";
  }
  else{
    AppName = "Page Not Found"
  }
  let [val, setVal] = React.useState(true);

  const changeBolean = () => {
    setVal(!val);
    handleToggleSidebar(val);
  };

  if (val === toggled) {
    val = true;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          backgroundColor: "#b6722d",
          height: "45px",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
        position="fixed"
      >
        <Toolbar
          style={{
            minHeight: "20px",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            <span>
              {pathName === "/" ? (
                <FaHome />
              ) : pathName === "/library/books" ? (
                <ImBook />
              ) : pathName === "/library/articles" ? (
                <ImBook />
              ) : pathName === "/Library_MilladIbneKaseer" ? (
                <ImBook />
              ) : pathName === "/Library_hindustankaTazkirah" ? (
                <ImBook />
              ) : pathName === "/Gallery" ? (
                <MdPermMedia />
              ) : pathName === "/Contact" ? (
                <TiContacts />
              ) : null}

              
            </span>{" "}
            <span>{AppName}</span>
          </Typography>
          <IconButton
            size="large"
            color="inherit"
            aria-label="open drawer"
            style={{
              alignItems: "center",
              float: "right",
              marginRight: "-10px",
            }}
            sx={{ display: { sm: "block", md: "none" } }}
          >
            {val ? (
              <MenuIcon
                onClick={() => changeBolean()}
                style={{ paddingBottom: "1px", fontSize: "30px" }}
              />
            ) : (
              <VscClose
                onClick={() => changeBolean()}
                style={{ paddingBottom: "1px", fontSize: "30px" }}
              />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default SearchAppBar;
