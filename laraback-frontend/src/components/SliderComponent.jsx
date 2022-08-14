import React, { Component } from "react";
import OfferCard from "../components/OfferCard";
import Slider from "react-slick";
const offers=[
    {   town:"Shangai",
        until:"31.12.2022",
        rate:0.80,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmla-K4ZPSEWxls8LZymMAzw-3J_zCfw_bbQwbwL953o7J4vx9tJRq&usqp=CAU"
    },
    {
        town:"Texas",
        until:"20.11.2022",
        rate:0.76,
        image:"https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
    },
    {
        town:"Hawai",
        until:"15.08.2023",
        rate:0.65,
        image:"https://play-lh.googleusercontent.com/9F77E_9s7aiXK8dvavEi1IHLhMXpulpyPU1hdZVfajI9PELVhRsfw3hdcZ15nsQePA"
    },
    {
        town:"Hashirama",
        until:"11.08.2022",
        rate:0.70,
        image:"https://www.tradingpedia.com/wp-content/uploads/2013/11/Alibaba-logo.jpg"
    }
]
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
        {offers.map((offer)=>(<OfferCard key={offer.image} town={offer.town} rate={offer.rate} image={offer.image} untilDate={offer.until} />)) }

        </Slider>
      </div>
    );
}
export default SliderComponent