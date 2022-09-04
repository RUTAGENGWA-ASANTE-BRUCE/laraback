import React from 'react'
import { Disclosure } from '@headlessui/react'
import {HiOutlineChevronDown} from 'react-icons/hi'
import LanguageButtonsInput from './LanguageButtonsInput'
import ListBoxComponent from './ListBoxComponent'

export default function DisclosureComponent({listBoxAvailable,title}) {
  return (
      <div className=" w-full max-w-md  bg-white  border">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between bg-gray-200 px-4 py-2 text-left text-sm font-medium hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>{title}</span>
                <HiOutlineChevronDown
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-10 pb-2 text-sm text-gray-500">
                  {listBoxAvailable?(
                    <ListBoxComponent title={title} />

                  ):(
                  <LanguageButtonsInput placeholder={'Url'} title={'URL'} flexRow />
                  )}
                  <LanguageButtonsInput placeholder={'Enter menu name'} title={'Label'} buttonsAvailable  />
                  <button className="space-x-2 flex w-fit px-5 mt-3 bg-green-500 text-white h-10 rounded-md justify-center items-center">
                  Add link
                </button>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

      </div>
  )
}
