import React from "react";
import AdminHeader from "../../components/adminPart/AdminHeader";
import AdminNavBar from "../../components/adminPart/AdminSideBar";
import { AiOutlineRight, AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import { BsPlusLg, BsArrowRepeat, BsThreeDotsVertical } from "react-icons/bs";
import { BiSortDown } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import Table from "../../components/adminPart/Table";
function AdminComponent({ pageDescriptions, form, tableData,routes }) {
  return (
    <div className="flex flex-row bg-slate-100 min-h-screen">
      <AdminNavBar />
      <div className="flex-1">
        {/* Feed */}
        <AdminHeader />

        <div className="flex-1 px-7 ">
          <div className=" h-14 w-full mt-8 flex shadow-lg   items-center px-3 flex-row bg-white justify-between">
            <h3 className="font-semibold">{routes[routes.length-1]}</h3>
            <div className="flex flex-row space-x-2 text-gray-400">
              <div className="space-x-1 flex flex-row">
              <h5>Dashboard</h5>

              <AiOutlineRight className="mt-2 text-xs" />

                <h5>{routes[routes.length-2]}</h5>
                <AiOutlineRight className="mt-2 text-xs" />
              </div>
              <h5>{routes[routes.length-1]}</h5>
            </div>
          </div>
          {tableData && (
            <div>
              <h5 className="text-lg mt-5">All Records</h5>
              <div className="flex-1 bg-white h-full py-5 px-4 mb-5 mt-2">
                <div className="flex flex-row pt-3 border-t justify-between">
                  <div className="flex flex-row space-x-1">
                    <button className="space-x-2 flex w-fit px-5 bg-indigo-900 text-white h-10 rounded-md justify-center items-center">
                      <BsPlusLg />
                      <p>Create New</p>
                    </button>
                    <button className="space-x-2 flex w-fit px-5 bg-rose-500 text-white h-10 rounded-md justify-center items-center">
                      <AiOutlineMenu className="" />
                      <AiOutlineDown className="text-sm mt-1" />
                    </button>
                    <button className="space-x-2 flex w-fit px-5 bg-white text-indigo-900 h-10 border-indigo-900 border-2 rounded-md justify-center items-center">
                      <BiSortDown className="text-lg" />
                    </button>
                  </div>
                  <div className="flex flex-row">
                    <button className="space-x-2 flex w-fit px-5 bg-indigo-900 text-white h-10 rounded-l-md justify-center items-center">
                      <FaFilter className="" />
                      <p>Filter</p>
                    </button>
                    <input
                      type="text"
                      className="p-2 h-10 outline-none border rounded-r-md "
                      placeholder="Type And Hit Enter"
                    />
                    <BsArrowRepeat className="opacity-50 ml-2 my-auto" />
                    <BsThreeDotsVertical className="opacity-50 ml-2 my-auto" />
                  </div>
                </div>
                <div className="mt-3">
                  <Table
                    tableHeader={tableData.tableHeader}
                    tableRows={tableData.tableRows}
                  />
                </div>
              </div>
            </div>
          )}
          {form && form}
        </div>
      </div>
    </div>
  );
}

export default AdminComponent;
