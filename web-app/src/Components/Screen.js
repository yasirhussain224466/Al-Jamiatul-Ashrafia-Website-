import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "../Layout";
import SpeedDial from "./SpeedDial";
export default function ControlledOpenSpeedDial() {
  return (
    <Box sx={{ height: "100vh", transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial />
      <Layout />
    </Box>
  );
}