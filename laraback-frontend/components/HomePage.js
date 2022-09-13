import React, { useState, useEffect } from "react";
import FunctionalityCard from "./FunctionalityCard";
import AuthForm from "./AuthForm";
import BlackFridayImage from "../public/blackblow.png";
import SliderComponent from "./SliderComponent";
import Store from "./Store";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsGift } from "react-icons/bs";
import OfferCard2 from "./OfferCard2";
import { deals, functionalities, offers, ourCV } from "../data";
import DealCard from "./DealCard";
import advertCard1 from "../public/advertCard1.png";
import advertCard2 from "../public/advertCard2.png";
import advertCard3 from "../public/advertCard3.png";
import Image from "next/image";
import { selectUserData, setUserData } from "../utils/redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const headings = {
  store: [
    {
      id: "songwoity39687y3htnwmgjogw",
      title: "Financial programs",
    },
    {
      id: "lnfgwotythnwghwogtij5yp3ty6u4",
      title: "Online supermarkets",
    },
  ],
  offer: [
    {
      id: "ohg3y8t98oOHORHQOR",
      title: "Health & Beauty",
    },
    {
      id: "lkgj8u3jtg3't303t3",
      title: "Clothing",
    },
    {
      id: "kjgb3i7tuhn8944242g4bfqadlhpjh8h",
      title: " Jobs & Education",
    },
  ],
  deal: [
    {
      id: "biuvwht28yh2fsfsfsf",
      title: "I'm sure,",
    },
    {
      id: "ibugwugt2872h41",
      title: "I've looked,",
    },
    {
      id: "buyf2tr82rtg2r2",
      title: "I'm mad,",
    },
  ],
};
//
function HomePage() {
  const dispatch = useDispatch();
  const [selectedStoreHeading, setSelectedStoreHeading] = useState(
    headings.store[0]
  );
  const [selectedOfferHeading, setSelectedOfferHeading] = useState(
    headings.offer[0]
  );
  const [selectedDealHeading, setSelectedDealHeading] = useState(
    headings.deal[0]
  );
  const [coupons, setCoupons] = useState();
  const [stores, setStores] = useState();
  useEffect(() => {
    const getData = async () => {
      await fetch("/api/stores", { method: "GET" })
        .then((res) => res.json())
        .then((data) => setStores(data));
      await fetch("/api/coupon_&_offers", { method: "GET" })
        .then((res) => res.json())
        .then((data) => {
          setCoupons(data);
          console.log("Coupons===============", data);
        });
    };
    getData();
  }, []);

  // const message=useSelector(selectUserData);

  return (
    <div className="bg-skin-fill bg-opacity-90">
      <div className="flex flex-row px-4 flex-wrap relative">
        <div className="w-[100%] md:w-[65%] pt-20">
          <div>
            <h1 className=" text-[35px] md:text-[45px] font-semibold  text-skin-base mt-3">
              Get up to 40% Cashback at over 2,500 stores
            </h1>
            <p className="mt-2 font-light">
              1620 Free Coupon Codes & Discount Deals added this week
            </p>
          </div>

          <p className="text-lg text-center font-light mt-10 ">How it works?</p>
          <p className="font-light text-skin-muted mt-2 text-center">
            Earning cashback is as easy as 1-2-3-4...
          </p>
          <div className="mt-8 flex flex-row gap-y-10 flex-wrap">
            {functionalities.map((functionality, i) => (
              <FunctionalityCard
                title={`${i < 10 ? "0" + String(i + 1) : i}.${
                  functionality.title
                }`}
                Icon={functionality.icon}
                description={functionality.description}
              />
            ))}
          </div>
        </div>
        {/* {props.userData == "" &&  */}
        <AuthForm />
        {/* } */}
        

      </div>
      <div className="p-4">
        <div className="flex flex-wrap space-y-2 flex-row mt-10">
          <div className="w-[100%] md:w-[70%] h-96 relative">
            <Image src={BlackFridayImage} layout="fill" />
          </div>
          <div className="flex flex-col w-[100%] md:w-[25%] mx-auto md:pb-0 pb-10 border border-purple-900 rounded-md bg-white">
            <p className="py-2 text-center text-skin-inverted  border-b">
              Offer Of The Day
            </p>
            {coupons && offers ? (
              <SliderComponent coupons={coupons} stores={stores} />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="mt-12 ">
          <div className="flex flex-row justify-between  pb-0 border-b">
            <h3 className="text-3xl pb-2">Top Stores</h3>
            <div className="flex flex-row">
              {headings.store.map((heading) => (
                <button
                  className={`pb-1 mr-5 ${
                    selectedStoreHeading?.id === heading.id
                      ? "border-b-4  border-white text-white"
                      : "text-black"
                  } font-semibold text-xs md:text-base`}
                  onClick={() => {
                    setSelectedStoreHeading(heading);
                  }}
                >
                  {heading.title}
                </button>
              ))}
            </div>
          </div>
          <p className=" text-skin-muted  mt-5">
            Browse the cashback offers from top store and enjoy the discount!
          </p>
          <div className="flex flex-row flex-wrap pt-5 gap-2.5">
            {stores &&
              stores.map((store) => < Store store={store} key={store._id} />)}
          </div>
        </div>
        <button className="rounded-md mt-8  font-semibold transition-all  border-2  text-skin-muted duration-700 transform  hover:text-skin-inverted hover:bg-skin-button-accent h-12 w-full ">
          View More Financial programs Stores{" "}
          <FaLongArrowAltRight className=" inline-flex" />
        </button>

        <div className="mt-12">
          <div className="flex flex-row justify-between  pb-0 border-b">
            <h3 className="text-3xl pb-2">Top Offers</h3>
            <div className="flex flex-row">
              {headings.offer.map((heading) => (
                <button
                  className={`pb-1 mr-5 ${
                    selectedOfferHeading?.id === heading.id
                      ? "border-b-4  border-white text-white"
                      : "text-black"
                  } font-semibold text-xs md:text-base`}
                  onClick={() => {
                    setSelectedOfferHeading(heading);
                  }}
                >
                  {heading.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap pt-4 gap-4">
          {coupons &&
            coupons.map((coupon) => {
              const store = stores.find(
                (store) => store._id == coupon["Store Id"]
              );
              return (
                <OfferCard2 key={coupon._id} store={store} coupon={coupon} />
              );
            })}
        </div>
        <button className="rounded-md mt-8  font-semibold transition-all  border-2  text-skin-muted duration-700 transform  hover:text-skin-inverted hover:bg-skin-button-accent  h-12 w-full ">
          View More Health & Beauty Coupons{" "}
          <FaLongArrowAltRight className=" inline-flex" />
        </button>
        <div className="mt-12 ">
          <div className="flex flex-row justify-between  pb-0 border-b">
            <h3 className="text-3xl pb-2">Top Deals</h3>
            <div className="flex flex-row">
              {headings.deal.map((heading) => (
                <button
                  className={`pb-1 mr-5 ${
                    selectedDealHeading?.id === heading.id
                      ? "border-b-4  border-white text-white"
                      : "text-black"
                  } font-semibold text-xs md:text-base`}
                  onClick={() => {
                    setSelectedDealHeading(heading);
                  }}
                >
                  {heading.title}
                </button>
              ))}
            </div>
          </div>
          <p className=" text-skin-muted  mt-5">
            Grab the best deals of the day from popular stores along with the
            cashback.
          </p>
          <div className="flex flex-row flex-wrap gap-2.5 mt-4">
            {deals.map((deal) => (
              <DealCard key={deal.image} deal={deal} />
            ))}
          </div>
        </div>
        <button className="rounded-md mt-8  font-semibold transition-all  border-2  text-skin-muted duration-700 transform  hover:text-skin-inverted hover:bg-skin-button-accent  h-12 w-full ">
          View More I'm sure. Deals
          <FaLongArrowAltRight className=" inline-flex" />
        </button>
        <div className="flex flex-row justify-between mt-10 w-full">
          <div className="h-[450px] w-[30%]  relative">
            <Image src={advertCard1} layout="fill" objectFit="contain" />{" "}
          </div>
          <div className="h-[450px] w-[30%] relative ">
            <Image src={advertCard2} layout="fill" objectFit="contain" />{" "}
          </div>
          <div className="h-[450px] w-[30%]  relative">
            <Image src={advertCard3} layout="fill" objectFit="contain" />{" "}
          </div>
        </div>
        <div className=" mt-10 bg-skin-button-accent-hover  flex flex-row justify-between  p-5 rounded-md">
          <div className="flex flex-row">
            <BsGift className="mt-1 text-[60px] text-skin-inverted" />
            <div className="ml-2">
              <h1 className="text-lg md:text-3xl text-skin-inverted ">
                Join larackPRO Now and{" "}
                <span className="text-black">Get a Rp40 Bonus</span> Today!
              </h1>
              <p className="mt-2 text-xs md:text-base">
                The best deals, sales, coupons & more 10,000 offers you can find
                here.
              </p>
            </div>
          </div>
          <div>
            <button className="rounded-tl-md rounded-md text-white font-semibold bg-skin-fill hover:bg-opacity-70 p-1 px-2 h-10 w-40 items-center mt-1">
              Join now
            </button>
            <p className="text-center mt-2">
              {" "}
              Existing user{" "}
              <span className="cursor-pointer text-skin-inverted font-normal">
                Sign In
              </span>
            </p>
          </div>
        </div>
        <div className=" mt-28 relative ">
          <div className=" relative mx-auto  w-fit space-y-5 -top-12 p-5">
            <h1 className="text-2xl text-center font-medium text-black">
              How Popular We Are...
            </h1>
            <p className="text-skin-muted text-center">
              Number tells louder the words...
            </p>
          </div>
          <div className="flex flex-row flex-wrap justify-between md:mx-10">
            {ourCV.map((info) => (
              <div className="space-y-2">
                <p className=" text-3xl pt-3 rounded-md text-skin-inverted font-semibold bg-skin-button-accent-hover p-1 px-2 h-16 w-56 text-center mt-1">
                  {info.number}
                </p>
                <p className="text-xl  font-semibold text-center">
                  {info.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" mt-28 relative ">
          <div className="relative mx-auto  w-fit space-y-5 -top-12 p-5">
            <h1 className="text-2xl text-center font-semibold text-black">
              Cashback can be withdrawn using Paypal or Bank Transfer
            </h1>
            <p className="text-skin-muted text-center">
              We offer the cashback payment with multiple payment mode.
            </p>
          </div>
          <div className="flex flex-row md:gap-0 gap-5 md:justify-between flex-wrap md:mx-10">
            {[
              "https://naturalsbynaomi.ie/wp-content/uploads/2021/05/gift-voucher.jpg",
              "https://i0.wp.com/financebuddha.com/blog/wp-content/uploads/2016/12/23155635/UPI1.jpg?fit=945%2C709&ssl=1",
              "https://rocketbit.io/images/bank_transfer.png",
              "https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.jpg",
              "https://www.apnavacancy.com/wp-content/uploads/2021/11/Manager-Jobs-For-Freshers.png",
            ].map((bank) => (
              <div className="p-1 w-48 h-32 bg-white border rounded-md">
                <img
                  src={bank}
                  alt=""
                  className="border h-full w-full  flex-1 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 space-y-10">
          <div>
            <h1 className="text-base md:text-2xl font-semibold text-black">
              Cashback can be withdrawn using Paypal or Bank Transfer
            </h1>
            <p className="mt-4 text-sm  md:text-[18px] text-white font-light">
              LarabackPro, SImply known among the top Cashback sites in th
              world, serves its users by catering them best details, discounts
              and coupons which are tested manually every day for the ease of
              the customer to compare and purchase their favorite products on
              500+ various online website (e.g,Flikpart, Amazon, Jabong,
              Makemytrip, Yatra, Ajio, Myntra, Foodpanda etc) along with the
              Etra Cashback on their transactions.
              <br />
              We help our users save upto 100% with our Cashback offers on their
              online shopping. Our mission is to be a single platform, where any
              user can get best experience at browsing their favorite items,
              knowning th best discount & offer on it and earning extra cashback
              as well.
            </p>
          </div>

          <div>
            <h1 className="text-base md:text-2xl font-semibold text-black">
              Why LarabackPro
            </h1>
            <p className="mt-4 text-sm md:text-[18px] text-white font-light">
              We help our users save upto 100% with our Cashback offers on their
              online shopping. Our mission is to be a single platform, where any
              user can get best experience at browsing their favorite items,
              knowning th best discount & offer on it and earning extra cashback
              as well.
            </p>
          </div>
          <div>
            <h1 className="text-base md:text-2xl font-semibold text-black">
              Highest Cahsback
            </h1>
            <p className="mt-4 text-sm md:text-[18px] text-white font-light">
              We help our users save upto 100% with our Cashback offers on their
              online shopping. Our mission is to be a single platform, where any
              user can get best experience at browsing their favorite items,
              knowning th best discount & offer on it and earning extra cashback
              as well.
            </p>
          </div>
          <div>
            <h1 className="text-base md:text-2xl font-semibold text-black">
              100% Trustworthy
            </h1>
            <p className="mt-4 text-sm md:text-[18px] text-white font-light">
              We help our users save upto 100% with our Cashback offers on their
              online shopping. Our mission is to be a single platform, where any
              user can get best experience at browsing their favorite items,
              knowning th best discount & offer on it and earning extra cashback
              as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



export default HomePage;
