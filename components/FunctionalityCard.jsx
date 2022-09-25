import React from 'react'

function FunctionalityCard({Icon,title,description}) {
  return (
    <div className="flex flex-row w-[100%] md:w-[50%]">
    <div className="flex flex-col  h-[55px] w-[55px]  bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90 rounded-md">
      <div className="bg-skin-fill flex border-2 border-white  flex-row p-0.5 rounded-md w-full space-x-1">
        <div className="w-0.5 h-0.5 rounded-full bg-black" />
        <div className="w-0.5 h-0.5 rounded-full bg-black" />
        <div className="w-0.5 h-0.5 rounded-full bg-black" />
        <div className="w-0.5 h-0.5 rounded-full bg-black" />
        <div className="w-7 h-0.5 bg-black  rounded-full" />
      </div>
      <div className="flex flex-1 items-center bg-white mb-0.5 mx-0.5 rounded-md mt-0.5">
             {Icon}
      </div>
    </div>
    <div className="flex flex-col ml-2">
      <h5 className="font-semibold">{title}</h5>
      <p className="font-light mt-1.5 text-skin-muted">
      {description}
      </p>
    </div>
  </div>
  )
}

export default FunctionalityCard