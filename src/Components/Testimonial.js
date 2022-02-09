import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonial.css'
import AllUsers from '../Api/TestimonialApi'


const Testimonial = () => {
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >


            {AllUsers.map((currElem, id) => {
                return (
                    <div key={id}>
                        <img src={`${currElem.img}?w=164&h=164&fit=crop&auto=format`} />
                        <div className="myCarousel">
                            <h3>{currElem.Name}</h3>
                            <h4>{currElem.title}</h4>
                            <p>
                                {currElem.Quote}
                            </p>
                        </div>
                    </div>
                )
            })
            }


        </Carousel>
    );
}
export default Testimonial;
