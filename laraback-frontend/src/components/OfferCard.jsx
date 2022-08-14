import React from 'react'

function OfferCard({town,rate,image,untilDate}) {
  return (
    <div className="flex flex-col space-y-8 pt-4">
    <img className="w-28 h-16 object-cover mx-auto" src={image} alt="" />
    <p className="font-light  w-fit mx-auto">{town} until {untilDate}</p>
    <p className="text-purple-800  w-fit mx-auto font-semibold">Up to {rate}% Cashback</p>
    <div className="flex flex-row  w-fit mx-auto">
<button className="rounded-tl-md rounded-bl-md text-white font-semibold bg-purple-800 p-1 px-2 h-10 w-40 items-center mt-1">Get Code</button>
<button className="rounded-tr-md  rounded-br-md text-white font-semibold bg-zinc-400 p-1 px-2 h-10  items-center mt-1">DE</button>
    </div>
</div>
  )
}

export default OfferCard