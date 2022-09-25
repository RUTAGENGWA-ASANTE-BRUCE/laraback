import React from 'react'

function HeaderDescription({content1,button,content2}) {
  return (
    <div className="mt-5 w-full p-2 bg-amber-100 px-3 flex flex-row rounded-md space-x-1">
    <p className="mt-1">{content1}</p>
    {button} 

<p className="mt-1">
{content2}
    
    </p>
  </div>
  )
}

export default HeaderDescription