import { redirect } from 'next/dist/server/api-utils';
import React from 'react'
import {useRouter} from "next/router"
import {useSelector,useDispatch} from "react-redux"
import {selectUserData} from '../utils/redux/slices/authSlice'
function Store({store}) {
  const router=useRouter();
  const userData=useSelector(selectUserData);
  const shopNow=async ()=>{
    await fetch(`/api/admin/store/${store._id}`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({visits:store.visits+1})
    })
    const click=await fetch(`/api/admin/click_log`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "User":userData["Email"],
        "Store":store['Name'],
        "Referral Percent":userData['Refferal Percent'],
        "Cashback Enabled":userData["Cashback Enabled"],
      })
    })
    if(store['Homepage']){
      const storePostbackUrl=store['Homepage']
      if(userData['_id']){
        storePostbackUrl.replace("{USERID}",userData['_id'])
      }
      if(click['_id']){
        storePostbackUrl.replace("{CLICKID}",click['_id'])
      }
      else{
      const storePostbackUrl=store['Homepage']
      storePostbackUrl.replace("{USERID}",userData['_id'])
      router.push(`/`)
      }
    }
  }

  return (
    <div className="md:w-72 w-[100%]   group relative hover:shadow-lg hover:shadow-purple-200  h-52   py-5 bg-white rounded-br-[70px] rounded-tl-[70px]">
    {store.Logo && 
    <img className="w-28 h-16 object-contain mx-auto" src={store.Logo} alt="" />
    }
<p className="text-skin-inverted  w-fit mx-auto font-semibold mt-1">{(!store['Cashback Percent'])? "0 offers":`Up to ${store['Cashback Percent']} Cashback`}</p>
<div className=" transform duration-700 ease-in-out bg-white  overflow-hidden h-40 w-1 top-4 left-7 z-30 absolute group-hover:w-[90%] md:group-hover:w-60 transition-all py-5 ">
<p className="  w-56 font-semibold mt-5 text-center cursor-pointer">View All Store Offers</p>
<a href="" className="">

<button onClick={shopNow} className="rounded-md mt-8 text-white font-semibold bg-skin-fill p-1 px-2 h-10 w-44 ml-5 items-center">Shop Now</button>
</a>

</div>
    </div>
  )
}

export default Store