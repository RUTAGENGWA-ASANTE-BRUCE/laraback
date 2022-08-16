import React from 'react'

function OfferCard2({offer}) {
  return (
    <div className="w-[480px] px-2 h-56 border bg-white rounded-md py-5 space-y-5 flex flex-col  border-purple-800">
    <div className="flex fle-row justify-between">
    <img className="w-28 h-10 object-contain " src={offer.companyImage} alt="" />
    {offer.rate && (<p className="text-purple-800">{offer.upto?`Upto ${offer.rate}% Cahsback`:`Flat ${offer.rate}% Cashback`}</p>)}
    </div>
    <p className="text-lg h-10">{offer.desc}</p> 
    {offer.buttonCode?(

    <div className="flex flex-row  w-fit mx-auto">
<button className="rounded-tl-md rounded-bl-md text-white font-semibold bg-purple-800 p-1 px-2 h-10 w-40 items-center mt-1">Get Code</button>
<button className="rounded-tr-md  rounded-br-md text-white font-semibold bg-zinc-400 p-1 px-2 h-10 w-8  items-center mt-1">{offer.buttonCode}</button>
    </div>    
    ):(
<button className="rounded-tl-md rounded-md text-white font-semibold w-48 bg-purple-800 p-1 px-2 h-10 mx-auto items-center mt-1">GET DISCOUNT</button>

    )} 
    </div>
  )
}

export default OfferCard2