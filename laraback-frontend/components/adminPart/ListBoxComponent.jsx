import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BsCheckLg, BsFillCaretDownFill } from "react-icons/bs";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
];
// export const ListBox=({justDropDown,name,value,setValue})=> {

//   if(dropDownData){

//     return (
//       <div className={justDropDown?'w-40':'w-full mt-3'}>
//       <Listbox name={name}   value={value} onChange={setValue}>
//         <div className=" -mt-1">
//           <Listbox.Button className={`border-2 border-gray-400 flex flex-row justify-between w-full cursor-default ${justDropDown?'':'rounded-md'} bg-white ${justDropDown?'p-0.5 py-1.5':'py-2 pl-3'} text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm`}>
//             <span className="block truncate">{selected.Name}</span>
//             <span className="pointer-events-none   inset-y-0 right-0 flex items-center pr-2">
//               <BsFillCaretDownFill
//                 className="h-5 w-5 text-gray-400"
//                 aria-hidden="true"
//               />
//             </span>
//           </Listbox.Button>
//           <Transition
//             as={Fragment}
//             leave="transition ease-in duration-100"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <Listbox.Options className="  mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//               {dropDownData.map((data, dataIdx) => (
//                 <Listbox.Option
//                   key={dataIdx}
//                   className={({ active }) =>
//                     `relative cursor-default select-none py-2  pr-4 ${
//                       active ? "bg-amber-100 text-amber-900" : "text-gray-900"
//                     }`
//                   }
//                   value={data}
//                 >
//                   {({ selected }) => (
//                     <div className="flex flex-row relative">

//                     {selected && !justDropDown ? (
//                         <span className=" absolute  inset-y-0 left-2 flex items-center text-amber-600">
//                           <BsCheckLg className="h-5 w-5" aria-hidden="true" />
//                         </span>
//                       ) : null}
//                       <span
//                         className={`block ${justDropDown?'pl-3': 'pl-10'} truncate ${
//                           selected ? "font-medium" : "font-normal"
//                         }`}
//                       >
//                         {data.Name}
//                       </span>

//                     </div>
//                   )}
//                 </Listbox.Option>
//               ))}
//             </Listbox.Options>
//           </Transition>
//         </div>
//       </Listbox>
//     </div>
//   );
// }
// }

export default function ListBoxComponent({ title }) {
  const [dropDownData, setDropDownData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      if (title=="Store Id") {
        await fetch("/api/admin/stores",{method:"GET"})
          .then((res) => res.json())
          .then((data) => setDropDownData(data));
      }
      if (
        title=="Network" ||
        title=="Networks"
      ) {
        await fetch("/api/admin/affiliate_networks")
          .then((res) => res.json())
          .then((data) => setDropDownData(data));
      }
    };
    fetchData()
  }, []);
  return (
    <div
      className={`${title && "mt-2"} ${
        title ? "w-full" : "w-[160px]"
      } relative`}
    >
        <select name={title} id={title}>
          {dropDownData &&
            dropDownData.map((data) => <option value={data._id}>{data.Name && data.Name}</option>)}
        </select>
      </div>
  );
}
