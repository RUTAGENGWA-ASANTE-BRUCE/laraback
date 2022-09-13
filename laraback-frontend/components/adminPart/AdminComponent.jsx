import React from "react";
import AdminHeader from "../../components/adminPart/AdminHeader";
import AdminNavBar from "../../components/adminPart/AdminSideBar";
import { AiOutlineRight, AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import { BsPlusLg, BsArrowRepeat, BsThreeDotsVertical } from "react-icons/bs";
import { BiSortDown } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import Table from "../../components/adminPart/Table";
import Link from 'next/link'
function AdminComponent({ pageDescriptions, dashboard,form, tableData,routes,objectKeys,viewDocument }) {
  return (
    <div className="flex flex-row bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90 theme-swiss min-h-screen">
      <AdminNavBar />
      <div className="flex-1">
        {/* Feed */}
        {/* <AdminHeader /> */}
        {dashboard?dashboard:
        <div className="flex-1 px-7 ">
          <div className=" h-14 w-full mt-8 flex shadow-lg   items-center px-3 flex-row bg-white justify-between">
            <h3 className="font-semibold">{routes[routes.length-1]?.split('_').join(' ').toUpperCase()}</h3>
            <div className="flex flex-row space-x-2 text-skin-inverted">
              <div className="space-x-1 flex flex-row">
              <h5>Dashboard</h5>

              <AiOutlineRight className="mt-2 text-xs text-black" />

                <h5>{routes[routes.length-2]}</h5>
                <AiOutlineRight className="mt-2 text-xs text-black" />
              </div>
              <h5>{routes[routes.length-1]?.split('_').join(' ')}</h5>
            </div>
          </div>
          {tableData && (
            <div>
              <h5 className="text-lg mt-5">All Records</h5>
              <div className="flex-1 bg-white h-full py-5 px-4 mb-5 mt-2">
                <div className="flex flex-row pt-3 border-t justify-between">
                  <div className="flex flex-row space-x-1">
                  <Link href={`/admin/${routes[routes.length-1]}/form`}>
                    <button className="space-x-2 flex w-fit px-5 bg-indigo-900 text-white h-10 rounded-md justify-center items-center">
                      <BsPlusLg />
                      <p>Create New</p>
                    </button>
                  </Link>
                
                  </div>
                  
                </div>
                <div className="mt-3">
                  <Table
                    params={routes}
                    tableHeader={tableData.tableHeader}
                    tableRows={tableData.tableRows}
                    objectKeys={objectKeys}
                  />
                </div>
              </div>
            </div>
          )}
          {form && form}
            {viewDocument && viewDocument}
        </div>
        }
      </div>
    </div>
  );
}

export default AdminComponent;
