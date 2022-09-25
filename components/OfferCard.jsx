import React from 'react'

function OfferCard({coupon,store}) {
  return (
    <div className="flex flex-col space-y-8 pt-4">
    {store["Logo"] &&
    <img className="w-28 h-16 object-fit mx-auto" src={store["Logo"]} alt="" />
    }
    {coupon["Coupon End Date"] &&
    <p className="font-light  w-fit mx-auto">ends on {coupon["Coupon End Date"]}</p>
    }
    {store["Cashback Percent"] &&
    <p className="text-skin-inverted  w-fit mx-auto font-semibold">Up to {store["Cashback Percent"]} Cashback</p>
    }
    <div className="flex flex-row  w-fit mx-auto">
    <button className="rounded-tl-md rounded-bl-md text-white font-semibold bg-skin-fill p-1 px-2 h-10 w-40 items-center mt-1">Get Code</button>
<button className="rounded-tr-md  rounded-br-md text-white font-semibold bg-skin-button-accent-hover p-1 px-1 h-10 w-10   mt-1">{coupon["Code"] && ccoupon["Code"].slice(0,2)}..</button>
    </div>
</div>
  )
}

export default OfferCard