import React from "react";
import OfferCard from "./OfferCard";
import Slider from "react-slick";
import { offersOfDay } from "../data";

const   SliderComponent=({coupons,stores})=> {
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
        {coupons.map((coupon)=>{ 
          const store=stores.find(store=>store._id==coupon["Store Id"]);
           return(<OfferCard store={store} coupon={coupon} />)}) }

        </Slider>
      </div>
    );
}
export default SliderComponent