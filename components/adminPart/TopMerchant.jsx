import React from "react"
import { MdModeEditOutline } from "react-icons/md";
import { setSelectedFormData,setSelectedObjectKeys } from "../../utils/redux/slices/selectingSlice";
import { useDispatch } from "react-redux";
export default function TopMerchant(){
    const dispatch= useDispatch()
    const editAction=(document)=>{
        dispatch(setSelectedFormData(document))
        // dispatch(setSelectedObjectKeys(objectKeys))
        // router.push(`/admin/${params[0]}/edit/${document._id}`)
      }
    return(
        <div className="w-full flex flex-row p-2 border-b justify-between">
            <div className="w-[20%] h-10 border" />
            <div className="space-y-1 w-[60%]">
                <p className="text-sm">Aview WWW</p>
                <p className="text-sm">Views: 68</p>
            </div>
            <button  onClick={()=>editAction()} className="space-x-2 flex w-fit px-5 bg-emerald-400 text-white h-10 rounded-md justify-center items-center">
              <MdModeEditOutline className="text-2xl" />
            </button>

        </div>
    )
}