import React from "react"
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import {CgDetailsMore} from 'react-icons/cg'
import {AiOutlineHome} from 'react-icons/ai'
import {RiStackshareLine} from 'react-icons/ri'
import {MdEmojiEvents,MdOutlineCastForEducation,MdContactSupport} from 'react-icons/md'
import {FaStreetView} from 'react-icons/fa'
import {TiShoppingBag} from 'react-icons/ti'

const navigators=[
    {
        goto:'Description',
        icon: <AiOutlineHome className="mr-2 h-5 w-5  md:h-10 md:w-10 text-purple-900 relative" aria-hidden="true"/>,
         text:'Home'
    },
    {
        goto:'Projects',
        icon: <TiShoppingBag className="mr-2 h-5 w-5  md:h-10 md:w-10 text-purple-900 relative" aria-hidden="true"/>,
         text:'Projects'
    },
    {
        goto:'DevStacks',
        icon: <RiStackshareLine className="mr-2 h-5 w-5  md:h-10 md:w-10 text-purple-900 relative" aria-hidden="true"/>,
         text:'DevStacks'
    },
    {
        goto:'Events',
        icon: <MdEmojiEvents className="mr-2 h-5 w-5  md:h-10 md:w-10 text-purple-900 relative" aria-hidden="true"/>,
         text:'Events'
    },
    {
        goto:'Education',
        icon: <MdOutlineCastForEducation className="mr-2 h-5 w-5  md:h-10 md:w-10 text-purple-900 relative" aria-hidden="true"/>,
         text:'Education'
    },
    {
        goto:'Contact',
        icon: <MdContactSupport className="mr-2 h-5 w-5  md:h-10 md:w-10 text-purple-900 relative" aria-hidden="true"/>,
         text:'Contact'
    },
    {
        goto:'Testimonials',
        icon: <FaStreetView className="mr-2 h-5 w-5  md:h-10 md:w-10 text-purple-900 relative" aria-hidden="true"/>,
         text:'Testimonials'
    }
]

export default function NavBarDropDown() {
    const OneLink =({link,icon,text})=>(
        <Menu.Item>

        <a href={`#${link}`}
        className={` text-purple-900 group flex w-full items-center rounded-md px-2 py-2 text-sm `}
      >
         {icon}
    
        <span className=" md:text-base font-extralight h-8 px-1 relative top-1.5">{text}</span>
      </a>
        </Menu.Item>
    )
  return (
    <div className=" w-fit h-fit mx-auto">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-purple-800 px-4 py-2 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <CgDetailsMore
              className=" h-5 w-5 md:h-10 md:w-10 text-white"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
             {navigators.map((navigator)=><OneLink link={navigator.goto} icon={navigator.icon} text={navigator.text} />)}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}