import React, { Component } from "react";
import OfferCard from "../components/OfferCard";
import Slider from "react-slick";
import { offersOfDay } from "../../data";

const SliderComponent=()=> {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>
        <Slider {...settings}>
        {offersOfDay.map((offer)=>(<OfferCard key={offer.image} town={offer.town} rate={offer.rate} image={offer.image} untilDate={offer.until} />)) }

        </Slider>
      </div>
    );
}
export default SliderComponent