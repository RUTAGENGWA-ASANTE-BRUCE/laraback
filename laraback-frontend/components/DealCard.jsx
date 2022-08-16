import React from 'react'

function DealCard({deal}) {
  return (
    <div className="group w-72 border pl-5 py-6  relative border-purple-800 bg-white rounded-md flex flex-col space-y-4">
        <div className="flex flex-row justify-between">
    <img className="w-24 h-14 object-contain" src={deal.companyImage} alt="" />
    <button className="p-1 text-white bg-purple-800  h-10  items-center">{deal.description.toUpperCase()}</button>
        </div>
        <div className="px-2 mr-2 space-y-3">
    <img className="w-full h-48 object-cover" src={deal.image} />
    <p className="text-purple-800 font-semibold">{deal.upto?`Upto ${deal.rate}% Cahsback`:`Flat ${deal.rate}% LDPro Cashback`}</p>
<p className="text-yellow-500 font-semibold text-right">{deal.amount}</p>
    
        </div>
        <div className=" transform duration-700 ease-in-out bg-white  overflow-hidden h-[92%] w-1 top-0 left-0 z-30 absolute group-hover:w-full transition-all py-5 ">
<p className=" px-1 w-72 font-semibold mt-5 text-center text-black cursor-pointer">"{deal.description}" deal from {deal.companyName}. With {deal.rate} rate and amount of {deal.amount}</p>
<p className=" px-1  w-72 font-semibold mt-5 text-center text-purple-800 cursor-pointer">View All {deal.companyName} Deals</p>
<button className="rounded-md mt-8 text-white font-semibold bg-purple-800 p-1 px-2 h-10 w-44  ml-14">Shop Now</button>

</div>
    </div>
  )
}

export default DealCard