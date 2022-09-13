import React, { useState } from "react";
import BarChart from "./BarChart";
import LatestTransaction from "./LatestTransaction";
import LineChart from "./LineChart";
import TopMerchant from "./TopMerchant";
import TopUser from "./TopUser";
export const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555,
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234,
  },
];
function AdminDashboard({ dashboardData }) {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="flex-1 px-7 pb-5 ">
      <div className=" h-14 w-full mt-8 flex shadow-lg   items-center px-3 flex-row bg-white justify-between">
        <h3 className="font-semibold">Dashboard</h3>
      </div>
      <div className=" w-full mt-5 flex   items-center flex-row justify-between">
        <div className="w-[20%]  bg-white  py-2 px-2  space-y-2 rounded-md">
          <h5 className="text-gray-500">Total Earnings</h5>
          <h5 className="text-2xl font-semibold">
            {dashboardData?.totalEarning} 0
          </h5>
        </div>
        <div className="w-[20%] bg-white space-y-2  py-2 px-2  rounded-md">
          <h5 className="text-gray-500">Total Bonus</h5>
          <h5 className="text-2xl font-semibold">
            {dashboardData?.totalBonus}0
          </h5>
        </div>
        <div className="w-[20%] bg-white space-y-2  py-2 px-2  rounded-md">
          <h5 className="text-gray-500">Total Cashback</h5>
          <h5 className="text-2xl font-semibold">
            {dashboardData?.totalCashback}0
          </h5>
        </div>
        <div className="w-[20%] bg-white space-y-2  py-2 px-2  rounded-md">
          <h5 className="text-gray-500">Net Profit</h5>
          <h5 className="text-2xl text-black">{dashboardData?.totalMoney}0</h5>
        </div>
      </div>
      <div className="mt-5 w-full flex flex-row justify-between">
        <div className="w-[49%] p-4 bg-white rounded-md">
          <h5 className="text-2xl my-2">Clicks / Transatcions</h5>
          <LineChart chartData={userData} />
          <div className="mt-2 w-full flex flex-row justify-between">
            <div>
              <h5 className="text-2xl text-center font-semibold">
                {dashboardData?.totalBonus}0
              </h5>
              <h5 className="text-gray-500">Total Clicks</h5>
            </div>
            <div>
              <h5 className="text-2xl text-center font-semibold">
                {dashboardData?.totalBonus}0
              </h5>
              <h5 className="text-gray-500">Total Transactions</h5>
            </div>
            <div>
              <h5 className="text-2xl text-center font-semibold">
                {dashboardData?.totalBonus}0
              </h5>
              <h5 className="text-gray-500">Average CTR %</h5>
            </div>
          </div>
        </div>
        <div className="w-[49%] p-4 bg-white rounded-md">
          <h5 className="text-2xl my-2">Commisison / Cashback</h5>
          <BarChart chartData={userData} />

          <div className="mt-2 w-full flex flex-row justify-between">
            <div>
              <h5 className="text-2xl text-center font-semibold">
                {dashboardData?.totalBonus}0
              </h5>
              <h5 className="text-gray-500">Total Commission</h5>
            </div>
            <div>
              <h5 className="text-2xl text-center font-semibold">
                {dashboardData?.totalBonus}0
              </h5>
              <h5 className="text-gray-500">Total Cashback</h5>
            </div>
            <div>
              <h5 className="text-2xl text-center font-semibold">
                {dashboardData?.totalBonus}0
              </h5>
              <h5 className="text-gray-500">Total Bonus</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 w-full flex flex-row justify-between">
        <div className="w-[49%] p-4 bg-white rounded-md">
          <h5 className="text-2xl my-2">Total Clicks</h5>
          <BarChart chartData={userData} />
          <div className="mt-2 w-full flex flex-row justify-between">
            <div>
              <h5 className="text-2xl text-center font-semibold">
                {dashboardData?.totalBonus}0
              </h5>
              <h5 className="text-gray-500">Coupon Clicks</h5>
            </div>
            <div>
              <h5 className="text-2xl text-center font-semibold">
                {dashboardData?.totalBonus}0
              </h5>
              <h5 className="text-gray-500">Total Store Clicks</h5>
            </div>
            <div>
              <h5 className="text-2xl text-center font-semibold">
                {dashboardData?.totalBonus}0
              </h5>
              <h5 className="text-gray-500">Store-Link Clicks</h5>
            </div>
          </div>
        </div>
        <div className="w-[49%] p-4 bg-white rounded-md">
          <h5 className="text-2xl my-2">Total Users</h5>

          <LineChart chartData={userData} />
          <div className="mt-2 w-full flex flex-row justify-between">
            <div>
              <h5 className="text-2xl text-center font-semibold">
                {dashboardData?.totalBonus}0
              </h5>
              <h5 className="text-gray-500">This Weeks</h5>
            </div>
            <div>
              <h5 className="text-2xl text-center font-semibold">
                {dashboardData?.totalBonus}0
              </h5>
              <h5 className="text-gray-500">Last Week</h5>
            </div>
            <div>
              <h5 className="text-2xl text-center font-semibold">
                {dashboardData?.totalBonus}0
              </h5>
              <h5 className="text-gray-500">Last Month</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h5 className="text-2xl my-2">Quick Links</h5>
        <div className=" w-full  flex   items-center flex-row justify-between">
          <div className="w-[19%] h-  bg-white  py-2 px-2  space-y-2 rounded-md">
            <h5 className="text-gray-500">Missing Cashback Tickets</h5>
            <h5 className="text-2xl font-semibold">
              {dashboardData?.totalEarning} 31
            </h5>
          </div>
          <div className="w-[19%] h- bg-white space-y-2  py-2 px-2  rounded-md">
            <h5 className="text-gray-500">Cashback Payment Requests</h5>
            <h5 className="text-2xl font-semibold">
              {dashboardData?.totalBonus}0
            </h5>
          </div>
          <div className="w-[19%] h- bg-white space-y-2  py-2 px-2  rounded-md">
            <h5 className="text-gray-500">Published Stores</h5>
            <h5 className="text-2xl font-semibold">
              {dashboardData?.totalCashback}0
            </h5>
          </div>
          <div className="w-[19%] h- bg-white space-y-2  py-2 px-2  rounded-md">
            <h5 className="text-gray-500">Active Offers</h5>
            <h5 className="text-2xl font-semibold">
              {dashboardData?.totalMoney}0
            </h5>
          </div>
          <div className="w-[19%] h- bg-white space-y-2  py-2 px-2  rounded-md">
            <h5 className="text-gray-500">Active Deals</h5>
            <h5 className="text-2xl font-semibold">
              {dashboardData?.totalMoney}0
            </h5>
          </div>
        </div>
      </div>
      <div className="w-full flex mt-5 flex-row justify-between">
      <div className="w-[32%]">
      <h5 className="text-2xl my-2">Top Merchants</h5>

        <div className="w-full bg-white rounded-md h-96 flex flex-col overflow-y-scroll py-3">
          <TopMerchant />
          <TopMerchant />
          <TopMerchant />
          <TopMerchant />
          <TopMerchant />
        </div>
      </div>
        <div className="w-[32%]">
        <h5 className="text-2xl my-2">Latest transactions</h5>

        <div className="w-full bg-white rounded-md h-96 flex flex-col overflow-y-scroll">
          <LatestTransaction />
          <LatestTransaction />
          <LatestTransaction />
        </div>
        </div>

        <div className="w-[32%]">
        <h5 className="text-2xl my-2">Top Users</h5>

        <div className="w-full bg-white rounded-md h-96 flex flex-col overflow-y-scroll">
          <TopUser />
          <TopUser />
          <TopUser />
        </div>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;
