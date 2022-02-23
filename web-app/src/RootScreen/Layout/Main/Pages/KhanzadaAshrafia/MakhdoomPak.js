import React from "react";
import { Grid } from "@mui/material";
import HeaderImg from "../../../../../assets/Images/HeaderPhoto.jpg";
import SideAd from "../../../../Components/SideAd";
import MakhdoomPakContent from "../../../../Components/MakhdoomPakContent";

const MakhdoomPak = () => {
  return (
    <>
      <Grid container>
        <Grid item md={12}>
          <img className="MakhdoomImg" src={HeaderImg} alt="" />
        </Grid>
        <Grid container>
          <Grid md={9} sm={12}>
            <MakhdoomPakContent/>
          </Grid>
          <SideAd />
        </Grid>
      </Grid>
    </>
  );
};

export default MakhdoomPak;
