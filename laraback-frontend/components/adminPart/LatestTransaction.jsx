import React from "react";
import { MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { BsFillEyeFill } from "react-icons/bs";
import {
  setSelectedFormData,
  setSelectedObjectKeys,
} from "../../utils/redux/slices/selectingSlice";

export default function LatestTransaction() {
  const dispatch = useDispatch();
  const viewAction = (document) => {
    // dispatch(setSelectedObjectKeys(objectKeys))
    dispatch(setSelectedFormData(document));
    // router.push(`/admin/${params[0]}/${document._id}`)
  };
  return (
    <div className="w-full flex flex-row p-2 h-fit border-b justify-between">
      <div className="w-[50%] space-y-2">
        <div className="space-y-1 flex flex-row flex-wrap">
          <p className="text-sm w-fit">
          <strong>Name: </strong>
          MockNetwork
          </p>
          
        </div>
        <div className="space-y-1 flex flex-row flex-wrap">
          <p className="text-sm w-fit">
          <strong>Sale Amount: </strong>
          5000
          </p>
        </div>
        <div className="space-y-1 flex flex-row flex-wrap">
          <p className="text-sm w-fit">
          <strong>Date: </strong>
          02-05-2019
          </p>
          
        </div>
      </div>
      <div className="w-[50%] space-y-2">
        <div className="space-y-1 flex flex-row flex-wrap">
          <p className="text-sm w-fit"><strong>campaign: </strong></p>
        </div>
        <div className="space-y-1 flex flex-row flex-wrap">
          <p className="text-sm w-fit">
          <strong>Commission: </strong>
          3000
          </p>
        </div>
        <button
          onClick={() => viewAction()}
          className="space-x-2 flex w-fit px-5 bg-indigo-900 text-white h-10 rounded-md justify-center items-center"
        >
          <BsFillEyeFill className="text-lg" />
        </button>
      </div>
    </div>
  );
}
