import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import image from "../../assets/Images/mureed.jpg";
import MureedForm from "../Forms/MureedForm";

const Gender_Option = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

const Mureed_Talib = [
  {
    value: "Mureed",
    label: "Mureed",
  },
  {
    value: "Talib",
    label: "Talib",
  },
];

const Sheikh_Option = [
  {
    value: "Khatib-e-Azam",
    label: "Khatib-e-Azam",
  },
  {
    value: "Jamal-e-Millat",
    label: "Jamal-e-Millat",
  },
];

const useStyle = makeStyles({
  heading: {
    fontFamily: "sans-serif",
    fontSize: "22px",
    lineHeight: "1",
    marginTop: "2px",
    marginBottom: "10px",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: "2px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#b6722d",
  },
  header: {
    marginBottom: "10px",
    textAlign: "start",
    marginLeft: "8px",
  },
  header2: {
    marginBottom: "20px",
    marginTop: "0px",
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
    padding: "20px 30px 20px 30px",
    borderRadius: "15px",
  },
  DivBorder: {
    border: "3px solid #b6722d",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
  },

});
const initialValue = {
  Email: "",
  FullName: "",
  FatherName: "",
  Book: "",
  Country: "",
  Gender: "",
  MureedTalib: "",
  Sheikh: "",
  Message: "",
};

const BookModal = (props) => {
  const [show, setShow] = useState(false);
  const [translate, setTranslate] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [user, setUser] = useState(initialValue);
  const OnChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const classes = useStyle();

  const BookList = [
    {
      value: `${props.BookTitle}`,
      label: `${props.BookTitle}`,
    }
  ];

  const {
    Email,
    FullName,
    FatherName,
    Book,
    Country,
    Gender,
    MureedTalib,
    Sheikh,
    Message,
  } = user;

  return (
    <>
      <Button
        onClick={handleShow}
        style={{
          backgroundColor: "white",
          color: "#b6722d",
          fontWeight: "bold",
        }}
        type="submit"
        fullWidth
        variant="contained"
      >
        To get it
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className='backgroundModal'
      >
        <div className={classes.inputfeild}>
          <div className={classes.DivBorder}>
            {translate ? (
              <div>
                اگر آپ "<b>{props.BookTitleUrdu}</b>" کتاب حاصل کرنا چاہتے ہیں تو آپ کو یہ فارم
                پُر کرنا ہوگا۔ ہماری ٹیم آپ کو یہ کتاب آپ کے ای میل ایڈریس کے
                ذریعے بھیجے گی۔{" "}
              </div>
            ) : (
              <div>
                If you want to get the <b> "{props.BookTitle}"</b> book then you
                will have to fill out this form. Our Team will send you this
                book through your Email Address.
              </div>
            )}

            <Button
              style={{
                backgroundColor: "#b6722d",
              }}
              className={classes.buttomSet}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => setTranslate(!translate)}
            >
              {translate ? "translate into English" : "اردو میں ترجمہ دیکھیں"}
            </Button>
          </div>

          <Grid container form spacing={4}>
            <CssBaseline />
            <Grid item xs={12} sm={6}>
              <TextField
                autoFocus
                className={classes.field}
                required
                id="Email"
                value={Email}
                name="Email"
                label="Email"
                fullWidth
                autoComplete="given-name"
                variant="standard"
                onChange={(e) => OnChangeUser(e)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                className={classes.field}
                id="FullName"
                name="FullName"
                value={FullName}
                label="Full Name"
                fullWidth
                autoComplete="family-name"
                variant="standard"
                onChange={(e) => OnChangeUser(e)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.field}
                id="FatherName"
                name="FatherName"
                value={FatherName}
                label="Father's Name"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard"
                type={Number}
                onChange={(e) => OnChangeUser(e)}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                className={classes.field}
                id="Age"
                value={Age}
                name="Age"
                label="Age"
                fullWidth
                variant="standard"
                onChange={(e) => OnChangeUser(e)}
              />
            </Grid> */}

            <Grid item xs={12} sm={6}>
            <TextField
                id="standard-select-Mureed"
                className={classes.field}
                required
                select
                fullWidth
                value={Book}
                name="Book"
                label="Select Book"
                onChange={(e) => {
                  OnChangeUser(e);
                }}
                variant="standard"
              >
                {BookList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-select-Gender"
                className={classes.field}
                required
                value={Gender}
                select
                fullWidth
                name="Gender"
                label="Gender"
                onChange={(e) => {
                  OnChangeUser(e);
                }}
                variant="standard"
              >
                {Gender_Option.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.field}
                id="Country"
                value={Country}
                name="Country"
                label="Country"
                fullWidth
                variant="standard"
                onChange={(e) => OnChangeUser(e)}
              />
            </Grid>
                  

            <Grid item xs={6}>
              <Button
                style={{
                  backgroundColor: "red",
                }}
                className={classes.buttomSet}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleClose}
              >
                {" "}
                Close
              </Button>
            </Grid>
            <Grid item xs={6}>
              <MureedForm
                user={user}
                setUser={setUser}
                handleClose={handleClose}
              />
            </Grid>
          </Grid>
        </div>
      </Modal>
    </>
  );
};

export default BookModal;
