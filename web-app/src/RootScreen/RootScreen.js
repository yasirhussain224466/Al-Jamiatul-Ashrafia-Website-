import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "./Layout/Layout";
export default function ControlledSpeedDial() {
  return (
    <Box sx={{ height: "100vh", transform: "translateZ(0px)", flexGrow: 1 }}>
      <Layout />
    </Box>
  );
}