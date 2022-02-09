import React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { SiWhatsapp, SiInstagram, SiTwitter } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineYoutube } from "react-icons/ai";

const Dial = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
      <SpeedDial
        FabProps={{ style: { backgroundColor: "#b6722d" } }}
        ariaLabel="SpeedDial uncontrolled open example"
        sx={{ position: "absolute", bottom: 50, right: 18 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        <SpeedDialAction
          FabProps={{ style: { backgroundColor: "#FF0000" } }}
          key="Youtube"
          icon={
            <Link
              target="_blank"
              href="https://www.youtube.com/channel/UC6Rs9c3zZgvYwDq9m2T3smQ"
            >
              {" "}
              <AiOutlineYoutube
                style={{ fontSize: "25px", color: "#f1f1f1" }}
              />
            </Link>
          }
          tooltipTitle="Youtube"
          onClick={handleClose}
        />

        <SpeedDialAction
          FabProps={{
            style: {
              backgroundImage:
                "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
            },
          }}
          key="Instagram"
          icon={
            <Link
              target="_blank"
              href="https://www.instagram.com/syed_jamal_ashraf_official/?utm_medium=copy_link"
            >
              <SiInstagram style={{ fontSize: "25px", color: "#f1f1f1" }} />
            </Link>
          }
          tooltipTitle="Instagram"
          onClick={handleClose}
        />
        <SpeedDialAction
          FabProps={{ style: { backgroundColor: "#1DA1F2" } }}
          key="Twitter"
          icon={
            <Link target="_blank" href="https://twitter.com/infoashrafia7?s=09">
              <SiTwitter style={{ fontSize: "25px", color: "#f1f1f1" }} />
            </Link>
          }
          tooltipTitle="Twitter"
          onClick={handleClose}
        />
        <SpeedDialAction
          FabProps={{ style: { backgroundColor: "#4267B2" } }}
          key="Facebook"
          icon={
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100008217362725"
            >
              {" "}
              <FaFacebookF style={{ fontSize: "25px", color: "#f1f1f1" }} />
            </Link>
          }
          tooltipTitle="Facebook"
          onClick={handleClose}
        />
        <SpeedDialAction
          FabProps={{ style: { backgroundColor: "#25D366" } }}
          key="Whatsapp"
          icon={
            <Link
              target="_blank"
              href="https://chat.whatsapp.com/Jcvdz3av0lB83VEjZJyESx"
            >
              <SiWhatsapp style={{ fontSize: "25px", color: "#f1f1f1" }} />
            </Link>
          }
          tooltipTitle="Whatsapp"
          onClick={handleClose}
        />
      </SpeedDial>
    </>
  );
};

export default Dial;