import React from "react";
import "./banner.css";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <div className="Banner">
      <Carousel
        controls={false}
        indicators={false}
        touch={false}
        pause={false}
        id="home-banner"
      >
        <Carousel.Item interval={2000} className="carousel-banner-item">
          <a href="#">
            <img
              src={require("../../../images/Home/banner/website-banner-pharma.jpg")}
              alt=""
              className="carousel-banner-home-img"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item interval={2000} className="carousel-banner-item">
          <a href="#">
            <img
              src={require("../../../images/Home/banner/website-banner-biotech.jpg")}
              alt=""
              className="carousel-banner-home-img"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item interval={2000} className="carousel-banner-item">
          <a href="#">
            <img
              src={require("../../../images/Home/banner/website-banner-electronics.jpg")}
              alt=""
              className="carousel-banner-home-img"
            />
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
