import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../App.css";

const CarouselPage = (props) => {
  return (
    <Carousel className="carousel">
      <div>
        <img className="carousel--img" src={props.details[0].image} />
        <p className="legend">{props.details[0].title}</p>
      </div>
      <div>
        <img className="carousel--img" src={props.details[1].image} />
        <p className="legend">{props.details[1].title}</p>
      </div>
      <div>
        <img className="carousel--img" src={props.details[2].image} />
        <p className="legend">{props.details[2].title}</p>
      </div>
    </Carousel>
  );
};

export default CarouselPage;
