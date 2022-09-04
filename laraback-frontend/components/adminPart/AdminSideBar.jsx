import React from 'react'
import Logo from "../../public/laraback-logo.png";
import Image from 'next/image'
import DropDownNavigator from './DropDownNavigator';
import AdminHeader from './AdminHeader';
import Link from 'next/link';
import {VscSymbolColor} from 'react-icons/vsc'
import {AiOutlineShoppingCart,AiOutlineContainer} from 'react-icons/ai'
import {FaAnchor} from 'react-icons/fa'
import {MdAirplanemodeActive} from 'react-icons/md'
function AdminNavBar() {
  return (
    <div className="max-h-screen bg-white border-r w-[18%] shadow-xl">
      <Image src={Logo} width={200} height={50} layout="fixed" />
      <div className='flex flex-row space-x-2 pl-4 py-2 mt-10 border-b border-t'>
        <VscSymbolColor className="text-lg mt-1" />
        <p className=" font-semibold">DASHBOARD</p>
      </div>

    <DropDownNavigator icon={<AiOutlineShoppingCart className="text-lg mt-1 mr-2 opacity-50" />} title='STORES & OFFERS' links={['Stores','Store Cashback','Store Categories','Coupon & Offers','Offer Categories','Daily Deals','Deals Categories ']}/>
    <DropDownNavigator icon={<FaAnchor className="text-lg mt-1 mr-2 opacity-50" />} title='Affiliate networks' links={['Affiliate Networks','Campaign Master','Postback Log','Network run']}/>
    <DropDownNavigator icon={<MdAirplanemodeActive className="text-lg mt-1 mr-2 opacity-50 rotate-45" />} title={'INSTABACK PROMO'} links={['Instaback Offers','Instaback Click Log']} />
    <DropDownNavigator icon={<AiOutlineContainer className="text-lg mt-1 mr-2 opacity-50" />} title={'CMS'} links={['Menu Builder','Pages','Content Blocks','User Dashboard Pages','Footer','Page Widget','FAQ','FAQ Categories']} />
    </div>
  )
}

export default AdminNavBar