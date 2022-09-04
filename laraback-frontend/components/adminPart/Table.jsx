import * as React from "react";
import { FaFilter, FaTrashAlt } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";
import { BsFillEyeFill } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import {Link} from 'next/Link'
const makeColumns=(titlesArray,stringsOnly)=>{
  var titles=[
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "action",
      renderCell: () => {
        return (
          <div className="space-x-2  flex-row flex">
            <button className="space-x-2 flex w-fit px-5 bg-indigo-900 text-white h-10 rounded-md justify-center items-center">
              <BsFillEyeFill className="text-lg" />
            </button>
            <button className="space-x-2 flex w-fit px-5 bg-emerald-400 text-white h-10 rounded-md justify-center items-center">
              <MdModeEditOutline className="text-lg" />
            </button>
            <button className="space-x-2 flex w-fit px-5 bg-rose-400 text-white h-10 rounded-md justify-center items-center">
              <FaTrashAlt className="text-lg" />
            </button>
          </div>
        );
      },
      width:210 
    },

  ];
  titlesArray.forEach(title=>{


    const stringOnly=stringsOnly.includes(title);
    if(stringOnly){
      
      titles.push(
        {
        field:title,
        headerName:title,
        width:130
      }  
      )
    }
    else{
      titles.push(
        {
        field:title,
        renderCell:(cellValue)=>{
          if(cellValue.row.hasOwnProperty(title)){

            return(<div>
              <p className='text-blue-600'>Edit</p>
              <p>{cellValue.row[title]}</p>
          </div>)
            }
        },
        headerName:title,
        width:130
      }  
      )
    }
  })
  return titles;  
}




export default function DataTable({tableHeader,tableRows}) {
  React.useEffect(()=>{
    const print=()=>{
      const student={
        name:'bruce'
      }
      const name='bruce'
      console.log(student.name)
      console.log(makeColumns(['User','Network','Store','Cashback','Currency','Status','Lock Cashback Status','Lock Cashback Amount'],['User','Network','Store',]))
    }
    print();
  })
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={tableRows}
        columns={makeColumns(tableHeader.columns,tableHeader.dataOnly)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
