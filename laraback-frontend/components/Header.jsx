import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FiUser, FiChevronDown } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Logo from "../public/laraback-logo.png";
import Image from "next/image";
import NavBarDropDown from "./NavBarDropdown"
function Header() {
  return (
    <div className="flex flex-col lg:flex-row sticky bg-white w-full p-1  px-3 justify-between border-b">
      {/* <div className="text-[30px] flex flex-row text-orange-400 font-semibold ">
            <BsFillBagFill className=" mt-1" />
            <p className="">Laraback<span className="text-black">pro</span></p>
        </div> */}
      <Image src={Logo} width={200} height={50} layout="fixed" />
      <div className="flex flex-row justify-between w-[100%] lg:w-[80%]">
        <div className="hidden lg:flex flex-row text-lg font-semibold mt-2.5">
          <div className=" flex-row ml-3 flex">
            <p>Offers</p>
            <FiChevronDown className=" text-sm mt-2 ml-0.5" />
          </div>
          <div className="flex flex-row ml-3">
            <p>Explore</p>
            <FiChevronDown className=" text-sm mt-2 ml-0.5" />
          </div>
          <div className="flex flex-row ml-3">
            <p>Contact Us</p>
            <FiChevronDown className=" text-sm mt-2 ml-0.5" />
          </div>
        </div>
        <form className="flex flex-row bg-orange-50 rounded-md pl-1 h-10 mt-1">
          <input
            type="text"
            placeholder="Search Cashback, Stores & Categories"
            className="outline-none border-none  md:w-80 mr-2   bg-transparent"
          />
          <button
            type="submit"
            className="  rounded-md text-white bg-purple-800 w-10 h-10  items-center"
          >
            <FaSearch className="text-xl m-auto" />
          </button>
        </form>
        <div className="hidden lg:flex flex-row ml-3 mt-2.5 font-semibold">
          <p>English</p>
          <FiChevronDown className=" text-sm mt-1.5 ml-0.5" />
        </div>
        <div className="flex flex-row md:text-base text-sm  ml-3 mt-2.5 font-semibold">
          <FiUser className=" text-base mt-1 mr-0.5" />
          <p>Sign in</p>
        </div>
        <button className="rounded-md text-white font-semibold md:text-base text-sm flex flex-row bg-purple-800 p-1 px-2 h-10  items-center mt-1">
          <IoMdAdd className="md:text-2xl text-lg" />
          Join Us
        </button>
        <div className='visible lg:hidden mt-1 h-10 bg-purple-800 rounded-md cursor-pointer'>
    <NavBarDropDown />
     
      </div>
      </div>
    </div>
  );
}

export default Header;
