import React from 'react'

function ViewDocument({objectKeys,document,routes}) {
  return (
    <div className="w-full rounded-t-md bg-white p-3 h-fit my-3">
    <div className="w-[80%] border-b border-black pb-2 flex flex-row justify-between">
    <h4 className="w-fit text-xl font-extralight ">{routes[routes.length-2]} Info:</h4>
    <h4 className="w-fit text-xl font-extralight">{routes[routes.length-1]}</h4>

    </div>
    <div className="space-y-2 mt-3">

        {objectKeys.map(key=>(
            <div className="w-[80%] flex flex-row justify-between">
                <h4 className="w-fit text-xl ">{key}:</h4>
                <p className="w-[70%]">{document[key]}</p>
            </div>
        ))}
    </div>
    </div>
  )
}

export default ViewDocument