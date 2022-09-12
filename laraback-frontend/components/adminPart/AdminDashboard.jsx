import React from "react";

function AdminDashboard({ dashboardData }) {
  return (
    <div className="flex-1 px-7 ">
      <div className=" h-14 w-full mt-8 flex shadow-lg   items-center px-3 flex-row bg-white justify-between">
        <h3 className="font-semibold">Dashboard</h3>
      </div>
      <div className=" w-full mt-3 flex  py-4 px-2   items-center flex-row justify-between">
        <div className="w-[20%] h-12 bg-white space-y-4 rounded-md">
          <h5 className="text-gray-500">Total Earnings</h5>
          <h5 className="text-2xl">{dashboardData?.totalEarning}</h5>
        </div>
        <div className="w-[20%] h-12 bg-white space-y-4 rounded-md">
          <h5 className="text-gray-500">Total Bonus</h5>
          <h5 className="text-2xl">{dashboardData?.totalBonus}</h5>
        </div>
        <div className="w-[20%] h-12 bg-white space-y-4 rounded-md">
          <h5 className="text-gray-500">Total Cashback</h5>
          <h5 className="text-2xl">{dashboardData?.totalCashback}</h5>
        </div>
        <div className="w-[20%] h-12 bg-white space-y-4 rounded-md">
          <h5 className="text-gray-500">Net Profit</h5>
          <h5 className="text-2xl text-black">{dashboardData?.totalMoney}</h5>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
