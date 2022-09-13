import React from 'react'
import { Menu,Transition } from '@headlessui/react'
import Link from 'next/link'
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

          <Menu.Items className="flex flex-col m-2 bg-skin-fill bg-opacity-90 rounded-md mt-2 pl-6 space-y-3 p-2">
          {links.map(link=>(
              <li>

            <Menu.Item >
              {({ active }) => (
                <Link
                  className={`${active && 'bg-skin-button-accent-hover'} `}
                  href={`/admin/${link.toLowerCase().split(" ").join("_")}`}
                >
                    <span className="text-white cursor-pointer">{link}</span>
                </Link>
              )}
            </Menu.Item>
              </li>
          ))}
            
          </Menu.Items>
      </Transition>
        </Menu>
        </div>
      )
    
}

export default DropDownNavigator