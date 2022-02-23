import React from "react";
import BookCard from "../../../../../Components/BookCard";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Container,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import CardData from "../../../../../../assets/booksData";
import MultiCarousel from "../../../../../Components/MultiCarousel";

const Books = () => {
  return (
    <>
      <Container>
        <Grid
          className="GridContainer"
          container
          sx={{ width: "100%", flexGrow: 1 }}
        >
          {CardData.map((currElem) => {
            return (
              <BookCard
                img={currElem.img}
                title={currElem.title}
                id={currElem.id}
              />
            );
          })}
        </Grid>
        {/* <Container
          sx={{
            padding:5,
            borderTop: 5,
            borderBottom: 5,
            borderLeft: 5,
            borderRight: 5,
            borderRadius:5,
            borderColor: "#5f3103",
            backgroundColor:'#e9dccf'
          }}
        >
          <MultiCarousel />
        </Container> */}
      </Container>
    </>
  );
};

export default Books;
