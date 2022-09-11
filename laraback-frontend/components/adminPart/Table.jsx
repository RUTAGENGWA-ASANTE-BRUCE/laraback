import * as React from "react";
import { FaFilter, FaTrashAlt } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";
import { BsFillEyeFill } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import {Link} from 'next/link'
import {useRouter} from "next/router"
import { setSelectedFormData,setSelectedObjectKeys } from "../../utils/redux/slices/selectingSlice";
import { useDispatch } from "react-redux";
const makeColumns=(titlesArray,stringsOnly,deleteAction,editAction,viewAction)=>{

  var titles=[
    { field: "_id", headerName: "ID", width: 210 },
    {
      field: "action",
      renderCell: (cellValue) => {
        return (
          <div className="space-x-2  flex-row flex">
            <button onClick={()=>viewAction(cellValue.row)} className="space-x-2 flex w-fit px-5 bg-indigo-900 text-white h-10 rounded-md justify-center items-center">
              <BsFillEyeFill className="text-lg" />
            </button>
            <button  onClick={()=>editAction(cellValue.row)} className="space-x-2 flex w-fit px-5 bg-emerald-400 text-white h-10 rounded-md justify-center items-center">
              <MdModeEditOutline className="text-lg" />
            </button>
            <button  onClick={()=>deleteAction(cellValue.row['_id'])} className="space-x-2 flex w-fit px-5 bg-rose-400 text-white h-10 rounded-md justify-center items-center">
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




export default function DataTable({tableHeader,tableRows,params,objectKeys}) {
  const dispatch = useDispatch()
  const router=useRouter();
  const deleteAction=async(documentId)=>{
    await fetch(`/api/${params[0]}/${documentId}`,{method:"DELETE"}).then(res=>{router.push(`/admin/${params[0]}`)})
  }
  const editAction=(document)=>{
    dispatch(setSelectedFormData(document))
    dispatch(setSelectedObjectKeys(objectKeys))
    router.push(`/admin/${params[0]}/edit/${document._id}`)
  }
  const viewAction=(document)=>{
    dispatch(setSelectedObjectKeys(objectKeys))
    dispatch(setSelectedFormData(document))
    router.push(`/admin/${params[0]}/${document._id}`)

  }
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={tableRows}
        columns={makeColumns(tableHeader.columns,tableHeader.dataOnly,deleteAction,editAction,viewAction)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
