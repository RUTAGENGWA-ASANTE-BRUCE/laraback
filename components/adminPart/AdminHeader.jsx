import React from "react";
import {
  AiOutlineMenu,
  AiOutlineDesktop,
  AiFillBell,
  AiOutlineDown,
} from "react-icons/ai";
import { BsArrowRepeat,BsBoxArrowRight } from "react-icons/bs";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
function AdminHeader() {
  return (
    <div className="flex fle-row bg-white px-7 justify-between shadow-lg py-3">
      <button className="w-8 h-8 rounded-md border justify-center items-center flex shadow-sm shadow-sky-300">
        <AiOutlineMenu className="" />
      </button>
      <div className="flex fle-row space-x-10">
        <BsArrowRepeat className="text-xl" />
        <AiOutlineDesktop className="text-xl" />
        <div className="relative flex flex-row space-x-1.5">
          <div className="flex fle-row">
            <AiFillBell className="text-xl" />
            <div className="absolute left-3 top-0 h-3.5 flex w-3.5 rounded-full bg-violet-900 items-center justify-center">
              <p className="text-white text-xs">0</p>
            </div>
          </div>
          <AiOutlineDown className=" mt-2 opacity-50 text-xs" />
        </div>
        <div className="relative flex flex-row space-x-1">
          <TbAdjustmentsHorizontal className="text-xl" />
          <AiOutlineDown className=" mt-2 opacity-50 text-xs" />
        </div>
        <BsBoxArrowRight className="text-xl" />

      </div>
    </div>
  );
}

export default AdminHeader;
