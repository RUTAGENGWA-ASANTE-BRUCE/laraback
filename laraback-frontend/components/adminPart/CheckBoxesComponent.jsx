import * as React from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CheckBoxesComponent({title,checkBox1,checkBox2,checkBox3,subscripted}) {
    const onChange=()=>{
        return;
    }
  return (
    <div className="flex flex-row space-x-3 mt-2">
      <h6 className="text-lg mt-2 font-semibold">
        {title}
        {subscripted && <sup className="text-bold">*</sup>}

      </h6>
      <div className="flex flex-row space-x-1">
        <p className="text-lg mt-2">{checkBox1}</p>
  <input type="radio" id="vehicle1" name={title} className="h-5 w-5 mt-3" value={checkBox1}/>    </div>
      <div className="flex flex-row space-x-1">
        <p className="text-lg mt-2">{checkBox2}</p>
  <input type="radio" id="vehicle1" name={title} className="h-5 w-5 mt-3" value={checkBox2}/>    </div>
       
    </div>
  );
}
