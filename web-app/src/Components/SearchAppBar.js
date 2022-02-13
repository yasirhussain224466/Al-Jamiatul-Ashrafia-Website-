import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { FaHome } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";

const SearchAppBar = ({ handleToggleSidebar, toggled }) => {
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
              <FaHome />
            </span>{" "}
            <span>Home</span>
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
