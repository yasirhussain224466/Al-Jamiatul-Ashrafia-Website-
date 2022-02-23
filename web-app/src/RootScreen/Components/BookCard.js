// import React from "react";
// import { Figure } from "react-bootstrap";
// import ProductCard from "../../assets/Images/ProductCard.jpg";

// function Cards() {
//   return (
//     <>
//       <div className="col-md-3">
//         <a href="#">
//           <div className="card" style={{ width: "17rem", height: "16rem" }}>
//             <div className="imgSection">
//               <div
//                 className="cardImg "
//                 style={{ width: "13rem", height: "8rem" }}
//               >
//                 <figure className="td-figure">
//                   <img
//                     // width="100%"
//                     // height="100%"
//                     alt="Card Image"
//                     src={ProductCard}
//                     className="ImageClass block width-100%"
//                   />
//                 </figure>
//               </div>
//             </div>
//             <div className="contSection">
//               <div className="cardPrice">
//                 <h5>
//                   <b>Rs 1000</b>
//                 </h5>
//               </div>
//               <div className="cardName">
//                 <h6>Hello World</h6>
//               </div>
//               <div className="cardBox"></div>
//               <div className="cardDate">
//                 <h7>
//                   <b>12-june</b>
//                 </h7>
//               </div>
//             </div>
//           </div>
//         </a>
//       </div>
//     </>
//   );
// }
// export default Cards;
// <section className='padding-x-md padding-y-lg'>
//     <div className='col-4'>
//         {/* <figure className='td-figure'>
//             <img className='block width-100%' src={CardImage} alt="Book1" />
//         </figure> */}
//     </div>

// </section>
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  return (
    <>
      <Grid item className="GridItem td-figure" lg={4} md={4} sm={6} xs={12}>
        <Card
          className="MUiCard"
          sx={{ maxWidth: 345, height: 550, borderRadius: 4 }}
        >
          <Link
            className="MUICardLink"
            to={{ pathname: "/library/books/description", state: props.id }}
          >
            <CardMedia
              className="MuiCardImage"
              component="img"
              height="430"
              image={props.img}
            ></CardMedia>
            <CardActions
              sx={{
                justifyContent: "center",
                margin: 2,
                borderTop: 3,
                borderBottom: 3,
                borderColor: "#b6722d",
              }}
            >
              <Typography align="center" className="MUITitle" component="div">
                {props.title}
              </Typography>
            </CardActions>
          </Link>
        </Card>
      </Grid>
    </>
  );
};

export default BookCard;
