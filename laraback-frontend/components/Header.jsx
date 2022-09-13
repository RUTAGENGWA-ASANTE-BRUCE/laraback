import React from "react";
import Link from 'next/link'
import { BsFillBagFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FiUser, FiChevronDown } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Logo from "../public/laraback-logo.png";
import Image from "next/image";
import NavBarDropDown from "./NavBarDropdown"
import {useRouter} from "next/router"
function Header() {

  return (
    <div className="flex flex-col lg:flex-row sticky bg-white w-full p-1  px-3 justify-between border-b">
      {/* <div className="text-[30px] flex flex-row text-orange-400 font-semibold ">
            <BsFillBagFill className=" mt-1" />
            <p className="">Laraback<span className="text-black">pro</span></p>
        </div> */}
      <div className="flex flex-row justify-between w-[100%] lg:w-[80%]">
        <div className="hidden lg:flex flex-row  font-semibold">
          <div className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-3 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm sm:px-8">
            <p>Offers</p>
            <FiChevronDown className=" text-sm mt-2 ml-0.5" />
          </div>
          <div className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-3 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm sm:px-8">
            <p>Explore</p>
            <FiChevronDown className=" text-sm mt-2 ml-0.5" />
          </div>
          <div className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-3 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm sm:px-8">
            <p>Contact us</p>
            <FiChevronDown className=" text-sm mt-2 ml-0.5" />
          </div>
        </div>
        <form className="flex flex-row bg-skin-button-accent-hover rounded-md pl-1 h-10 mt-1">
          <input
            type="text"
            placeholder="Search Cashback, Stores & Categories"
            className="outline-none border-none  md:w-80 mr-2   bg-transparent"
          />
          <button
            type="submit"
            className="  rounded-md text-white hover:bg-opacity-70   bg-skin-button-muted w-10 h-10  items-center"
          >
            <FaSearch className="text-xl m-auto" />
          </button>
        </form>
        <div className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-3 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm sm:px-8">
          <p>English</p>
          <FiChevronDown className=" text-sm mt-1.5 ml-0.5" />
        </div>
        <div className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-3 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm sm:px-8">
          <FiUser className=" text-base mt-1 mr-0.5" />
          <p>Sign in</p>
        </div>
        <Link href='/admin'>

        <button className="text-skin-base bg-skin-button-muted flex items-center justify-center px-3 py-3 border border-transparent text-sm font-medium rounded-md shadow-sm bg-opacity hover:bg-opacity-70 sm:px-8">
          <IoMdAdd className="md:text-2xl text-lg" />
          Join Us
        </button>
        </Link>
        <div className='visible lg:hidden mt-1 h-10 bg-purple-800 rounded-md cursor-pointer'>
    <NavBarDropDown />
     
      </div>
      </div>
    </div>
  );
}

export default Header;
