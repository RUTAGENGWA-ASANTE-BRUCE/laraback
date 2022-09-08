import React from "react";
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
export const ListBox=({justDropDown,name})=> {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className={justDropDown?'w-40':'w-full mt-3'}>
      <Listbox name={name}  value={selected} onChange={setSelected}>
        <div className=" -mt-1">
          <Listbox.Button className={`border-2 border-gray-400 flex flex-row justify-between w-full cursor-default ${justDropDown?'':'rounded-md'} bg-white ${justDropDown?'p-0.5 py-1.5':'py-2 pl-3'} text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm`}>
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none   inset-y-0 right-0 flex items-center pr-2">
              <BsFillCaretDownFill
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="  mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2  pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <div className="flex flex-row relative">
                    
                    {selected && !justDropDown ? (
                        <span className=" absolute  inset-y-0 left-2 flex items-center text-amber-600">
                          <BsCheckLg className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                      <span
                        className={`block ${justDropDown?'pl-3': 'pl-10'} truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default function ListBoxComponent({ title}) {
  return (
    <div className={`${title && 'mt-2'} ${title?'w-full':'w-[160px]'} relative`}>
    <div className={` ${!title && 'absolute'}`}>
      <h6 className={`text-lg ${title && 'mt-2'} font-semibold`}>
        {title}
      </h6>
      {title?(

        <ListBox name={title}  />
      ):(<ListBox name={title} justDropDown/>)}
    </div>
    </div>
  );
}
