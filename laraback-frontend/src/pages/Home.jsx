import React from "react";
import { FaSearchDollar } from "react-icons/fa";
import {BsCart3}from "react-icons/bs"
import {GiTakeMyMoney} from "react-icons/gi"
import {FaMoneyBillAlt} from "react-icons/fa"
import FunctionalityCard from "../components/FunctionalityCard";
import AuthForm from "../components/AuthForm";

const functionalities=[
    {
        title:"Browse",
        description:"Browse Cashback and choose from thousands of stores",
        icon:   <FaSearchDollar className="text-3xl m-auto   bg-clip-text bg-gradient-to-r from-orange-400 to-purple-800" />
    },
    {
        title:"Shop",
        description:"Follow the link to your favorite store or deal and purchase as normal",
        icon:   <BsCart3 className="text-3xl m-auto   bg-clip-text bg-gradient-to-r from-orange-400 to-purple-800" />
    },
    {
        title:"Earn",
        description:"Cash Back added to your account",
        icon:   <GiTakeMyMoney className="text-3xl m-auto   bg-clip-text bg-gradient-to-r from-orange-400 to-purple-800" />
    },
    {
        title:"Withdraw",
        description:"Request payment and get via bank transfer, Paypal or gift voucher",
        icon:   <FaMoneyBillAlt className="text-3xl m-auto   bg-clip-text bg-gradient-to-r from-orange-400 to-purple-800" />
    }
]
function Home() {
  return (
    <h1 className=" bg-orange-50  min-h-screen">
      <div className="flex flex-row pl-3">
        <div className="w-[65%] pt-20">
          <div>
            <h1 className="text-[45px] font-semibold  text-orange-400 mt-3">
              Get up to 40% Cashback at over 2,500 stores
            </h1>
            <p className="mt-2 font-light">
              1620 Free Coupon Codes & Discount Deals added this week
            </p>
          </div>

          <p className="text-lg text-center font-light mt-10 ">How it works?</p>
          <p className="font-light text-gray-500 mt-2 text-center">
            Earning cashback is as easy as 1-2-3-4...
          </p>
          <div className="mt-8 flex flex-row gap-y-10 flex-wrap">
            {functionalities.map((functionality,i)=>(<FunctionalityCard title={`${i<10?'0'+String(i+1):i}.${functionality.title}`} Icon={functionality.icon} description={functionality.description} />))}
          </div>
        </div>
        <AuthForm />
      </div>

      {/* <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 320"><path fill="rgb(233 213 255)" fill-opacity="1" d="M0,288L120,293.3C240,299,480,309,720,266.7C960,224,1200,128,1320,80L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
      <svg className="absolute bottom-0 z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(233 213 255)" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,282.7C384,299,480,309,576,288C672,267,768,213,864,197.3C960,181,1056,203,1152,176C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </h1>
  );
}

export default Home;
