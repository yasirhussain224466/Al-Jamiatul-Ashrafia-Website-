import React from "react";
import { Figure } from "react-bootstrap";
import ProductCard from "../../assets/Images/ProductCard.jpg";

function Cards() {
  return (
    <>
      <div className="col-md-3">
        <a href="#">
          <div className="card" style={{ width: "17rem", height: "16rem" }}>
            <div className="imgSection">
              <div
                className="cardImg "
                style={{ width: "13rem", height: "8rem" }}
              >
                <figure className="td-figure">
                  <img
                    // width="100%"
                    // height="100%"
                    alt="Card Image"
                    src={ProductCard}
                    className="ImageClass block width-100%"
                  />
                </figure>
              </div>
            </div>
            <div className="contSection">
              <div className="cardPrice">
                <h5>
                  <b>Rs 1000</b>
                </h5>
              </div>
              <div className="cardName">
                <h6>Hello World</h6>
              </div>
              <div className="cardBox"></div>
              <div className="cardDate">
                <h7>
                  <b>12-june</b>
                </h7>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
export default Cards;
// <section className='padding-x-md padding-y-lg'>
//     <div className='col-4'>
//         {/* <figure className='td-figure'>
//             <img className='block width-100%' src={CardImage} alt="Book1" />
//         </figure> */}
//     </div>

// </section>
