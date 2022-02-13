import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";
// import Button from '@mui/material/Button';
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import firebase from "./Firebase";
// import { SnackbarProvider, useSnackbar } from 'notistack';
// import Zoom from "@material-ui/core/Zoom";
import ContactFormApi from "./Apis/ContactFormApi";
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
    marginTop: "20px",
    padding: "30px",
    border: "3px solid #b6722d",
    borderRadius: "15px",
  },
});
const initialValue = {
  Name: "",
  Email: "",
  ContactNo: "",
  Country: "",
  Message: "",
};

const Contact = () => {
  const [user, setUser] = useState(initialValue);

  const OnChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { Name, Email, ContactNo, Country, Message } = user;

  const classes = useStyle();
  const height = 70;
  return (
    <>
      <div className={classes.inputfeild}>
        <Typography variant="h4" gutterBotton>
          <div className={classes.header}> Contact Us</div>
        </Typography>
        {/* <form method="POST"> */}
        <Grid container spacing={4}>
          <CssBaseline />
          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.field}
              required
              id="Name"
              name="Name"
              value={Name}
              label="Name"
              fullWidth
              // autoComplete="given-name"
              variant="standard"
              onChange={(e) => OnChangeUser(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              className={classes.field}
              id="email"
              name="Email"
              value={Email}
              label="Email"
              fullWidth
              // autoComplete="family-name"
              variant="standard"
              onChange={(e) => OnChangeUser(e)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.field}
              id="ContactNo"
              name="ContactNo"
              value={ContactNo}
              label="Contact No."
              required
              fullWidth
              // autoComplete="shipping address-line2"
              variant="standard"
              type={Number}
              onChange={(e) => OnChangeUser(e)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.field}
              id="country"
              name="Country"
              value={Country}
              required
              label="Country"
              fullWidth
              variant="standard"
              onChange={(e) => OnChangeUser(e)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              className={classes.field}
              id="message"
              name="Message"
              value={Message}
              label="Message"
              fullWidth
              inputProps={{
                style: {
                  height,
                },
              }}
              variant="standard"
              onChange={(e) => OnChangeUser(e)}
            />
          </Grid>

          <Grid item xs={12}>
            <ContactFormApi user={user} setUser={setUser} />
            {/* <Button onClick={(e)=>AddData(e)}></Button> */}
          </Grid>
        </Grid>
        {/* </form> */}
      </div>
      {/* <div className="row"> */}
        {/* <div className="col-md-12">
                    <div style={{ marginTop: '20px', padding: '5px', border: '3px solid #b6722d', borderRadius: '15px' }} className="mu-contact-right">
                        <div>
                            <Typography variant="h4" gutterBotton>

                                <div  className={classes.header2}>Location</div>
                            </Typography>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.3655467381714!2d67.00370842920208!3d24.95038501494491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3401c730f2dd7%3A0xa6b41cf971421368!2sPlot%20181%2C%20Sector%2013%20Sector%2013%20F%20Orangi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1614769888821!5m2!1sen!2s"
                                width='100%'
                                height='450px'
                            />
                        </div>
                    </div>
                </div> */}
      {/* </div> */}
    </>
  );
};
export default Contact;
