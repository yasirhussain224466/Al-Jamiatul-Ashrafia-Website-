import React from "react";
import Data from "../../assets/booksData";
import {
  Grid,
  Container,
  Typography,
  CssBaseline,
  Button,
} from "@mui/material";
import BookModal from "./BookModal";


// import { Container } from "react-bootstrap";


const BookDescription = (props) => {
  const myObj = Data.find((currElem) => {
    return currElem.id === `${props.location.state}`;
  });
  return (
    <>
      <div className="BookDescriptionContainer">
        <Grid container className="BookContainer">
          <Grid sm={12} xs={12} item className="BookImage">
            <div className="object">
            <img className="BookTransition" src={myObj.img} alt="" />
            </div>
          </Grid>
          <Grid item className="BookDetal">
            <Container>
              <Typography
                className="BookInformationHead"
                align="center"
                variant="h5"
                component="div"
              >
                {myObj.title}
              </Typography>
              <Typography className="BookInformationCon">
                <div className="BookDetailhead">Book Details:</div>

                <Typography className="BookInformation">
                  Publisher: {myObj.Publisher}
                </Typography>
                <Typography className="BookInformation">
                  Publication Date: {myObj.locatPublicationDate}
                </Typography>
                <Typography className="BookInformation">
                  Author: {myObj.Author}
                </Typography>
                <Typography className="BookInformation">
                  Total Pages: {myObj.TotalPages}
                </Typography>
                <Typography className="BookInformation">
                  ISBN No: {myObj.ISBNNo}
                </Typography>
              </Typography>
            </Container>
            <Grid Container xs={12} className="BookBottom" spacing={6}>
              <CssBaseline />
              <Grid item sx={{ margin: "6px" }} xs={6}>
                <Button
                  style={{
                    backgroundColor: "white",
                    color: "#b6722d",
                    fontWeight: "bold",
                  }}
              
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  View
                </Button>
              </Grid>
              <Grid item sx={{ margin: "6px" }} xs={6}>
                <BookModal BookTitleUrdu={myObj.UrduTitle} BookTitle={myObj.title}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default BookDescription;
