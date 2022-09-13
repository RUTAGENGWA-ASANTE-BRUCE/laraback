import React from 'react'
import {Bar} from 'chartjs'
function OfferCard2({coupon,store}) {
  return (
    <div className="w-[100%] md:w-[480px] px-2 h-56 border bg-white rounded-md py-5 space-y-5 flex flex-col  border-purple-800">
    <div className="flex fle-row justify-between">
    {store["Logo"] &&
    <img className="w-28 h-10 object-contain " src={store["Logo"]} alt="" />
    }
    {store["Cashback Percent"] && (<p className="text-skin-inverted">{store["Cashback Percent"]} Cashback</p>)}
    </div>
    <p className="text-lg h-10 w-[97%] truncate"> {coupon["Descrition"] &&   coupon["Description"]}</p> 
    {coupon["Code"]?(

    <div className="flex flex-row  w-fit mx-auto">
<button className="rounded-tl-md rounded-bl-md text-white font-semibold bg-skin-fill p-1 px-2 h-10 w-40 items-center mt-1">Get Code</button>
<button className="rounded-tr-md  rounded-br-md text-white font-semibold bg-black p-1 px-1 h-10 w-10   mt-1">{ coupon["Code"].slice(0,2)}..</button>
    </div>    
    ):(
<button className="rounded-tl-md rounded-md text-white font-semibold w-48 bg-skin-fill p-1 px-2 h-10 mx-auto items-center mt-1">GET DISCOUNT</button>

    )} 
    </div>
  )
}

export default OfferCard2