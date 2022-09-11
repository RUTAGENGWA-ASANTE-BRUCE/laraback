import React from 'react'

function OfferCard2({coupon,store}) {
  return (
    <div className="w-[100%] md:w-[480px] px-2 h-56 border bg-white rounded-md py-5 space-y-5 flex flex-col  border-purple-800">
    <div className="flex fle-row justify-between">
    <img className="w-28 h-10 object-contain " src={store["Logo"]} alt="" />
    {store["Cashback Percent"] && (<p className="text-purple-800">{store["Cashback Percent"]} Cashback</p>)}
    </div>
    <p className="text-lg h-10 w-[97%] truncate">{coupon["Description"]}</p> 
    {coupon["Code"]?(

    <div className="flex flex-row  w-fit mx-auto">
<button className="rounded-tl-md rounded-bl-md text-white font-semibold bg-purple-800 p-1 px-2 h-10 w-40 items-center mt-1">Get Code</button>
<button className="rounded-tr-md  rounded-br-md text-white font-semibold bg-zinc-400 p-1 px-1 h-10 w-10   mt-1">{coupon["Code"].slice(0,2)}..</button>
    </div>    
    ):(
<button className="rounded-tl-md rounded-md text-white font-semibold w-48 bg-purple-800 p-1 px-2 h-10 mx-auto items-center mt-1">GET DISCOUNT</button>

    )} 
    </div>
  )
}

export default OfferCard2