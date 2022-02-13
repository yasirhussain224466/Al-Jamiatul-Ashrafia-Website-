import * as React from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";
import firebase from "../../Database/firebaseConfig";
import { SnackbarProvider, useSnackbar } from "notistack";
import Zoom from "@material-ui/core/Zoom";
require("firebase/database");

const useStyle = makeStyles({
  header: {
    marginBottom: "10px",
    textAlign: "start",
    marginLeft: "8px",
  },
  header2: {
    marginBottom: "20px",
    marginTop: "10px",
    textAlign: "start",
    marginLeft: "40px",
  },
  field: {
    "& label.Mui-focused": {
      color: "#b6722d",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#b6722d",
    },
  },
  buttomSet: {
    backgroundColor: "#b6722d",
  },
  inputfeild: {
    padding: "30px",
    border: "3px solid #b6722d",
    borderRadius: "15px",
  },
});

const Notification = ({ user, setUser }) => {
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyle();

  const AddData = () => {
    const { Name, Email, ContactNo, Country, Message } = user;
    if (Name && Email && ContactNo && Country && Message) {
      const fireStore = firebase.database().ref("/ContactUsUserInfo");
      fireStore.push(user);
      console.log(firebase);

      const connectedRef = firebase.database().ref(".info/connected");
      connectedRef.on("value", (snap) => {
        const Data = snap.val();
        if (Data === true) {
          enqueueSnackbar("Submission Successful!", {
            variant: "success",
            autoHideDuration: 2000,
          });
          setUser({
            Name: "",
            Email: "",
            ContactNo: "",
            Country: "",
            Message: "",
          });
        } else {
          enqueueSnackbar("Internet Not Connected!", {
            variant: "warning",
            autoHideDuration: 2000,
          });
          setUser({
            Name: "",
            Email: "",
            ContactNo: "",
            Country: "",
            Message: "",
          });
        }
      });
    } else {
      enqueueSnackbar("Please Fill the Data!", {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };

  return (
    <>
      <Button
        style={{
          backgroundColor: "#b6722d",
        }}
        className={classes.buttomSet}
        type="submit"
        required
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={() => {
          AddData();
        }}
      >
        Submit
      </Button>
    </>
  );
};

const ContactForm = ({ user, setUser }) => {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      TransitionComponent={Zoom}
      maxSnack={4}
    >
      <Notification user={user} setUser={setUser} />
    </SnackbarProvider>
  );
};

export default ContactForm;
