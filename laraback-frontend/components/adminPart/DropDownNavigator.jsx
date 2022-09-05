import React from 'react'
import { Menu,Transition } from '@headlessui/react'
import Link from 'next/Link'
import {HiOutlineChevronDown} from 'react-icons/hi'
function DropDownNavigator({icon,title,links}) {
    return (
        <div className="border-b py-2">

        <Menu>
          <Menu.Button className={'ml-4 flex flex-row justify-between w-[90%]'}><div className="flex flex-row">{icon} <p className="font-semibold">{title} </p></div><HiOutlineChevronDown className="opacity-50 my-auto text-lg"/> </Menu.Button>
          <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >

          <Menu.Items className="flex flex-col bg-gray-200 mt-2 space-y-3 p-2">
          {links.map(link=>(

            <Menu.Item >
              {({ active }) => (
                <Link
                  className={`${active && 'bg-blue-500'}`}
                  href={`/admin/${link.toLowerCase().split(" ").join("_")}`}
                >
                    {link}
                </Link>
              )}
            </Menu.Item>
          ))}
            
          </Menu.Items>
      </Transition>
        </Menu>
        </div>
      )
    
}

export default DropDownNavigator