import React from 'react'

function Store({company}) {
  return (
    <div className="w-72   group relative hover:shadow-lg hover:shadow-purple-200  h-52 border border-purple-900  py-5 bg-white rounded-br-[70px] rounded-tl-[70px]">
    <img className="w-28 h-16 object-contain mx-auto" src={company.image} alt="" />
<p className="font-light  w-fit mx-auto mt-7 h-5">{company.rate && `Was ${company.rate}`}</p>
<p className="text-purple-800  w-fit mx-auto font-semibold mt-1">{(!company.rate && !company.cashbackRate)? "0 offers":`Up to ${company.cashbackRate} Cashback`}</p>
<div className=" transform duration-700 ease-in-out bg-white  overflow-hidden h-40 w-1 top-4 left-7 z-30 absolute group-hover:w-60 transition-all py-5 ">
<p className="  w-56 font-semibold mt-5 text-center cursor-pointer">View All Store Offers</p>
<button className="rounded-md mt-8 text-white font-semibold bg-purple-800 p-1 px-2 h-10 w-44 ml-5 items-center">Shop Now</button>

</div>
    </div>
  )
}

export default Store