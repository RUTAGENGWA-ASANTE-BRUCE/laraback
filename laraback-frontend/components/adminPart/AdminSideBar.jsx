import React from 'react'
import Logo from "../../public/laraback-logo.png";
import Image from 'next/image'
import DropDownNavigator from './DropDownNavigator';
import AdminHeader from './AdminHeader';
import Link from 'next/link';
import {VscSymbolColor} from 'react-icons/vsc'
import {AiOutlineShoppingCart,AiOutlineContainer,AiOutlineBars} from 'react-icons/ai'
import {FaAnchor} from 'react-icons/fa'
import {MdAirplanemodeActive,MdOutlineSettingsSuggest} from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import {BsCash} from 'react-icons/bs'
import {TbPlug} from 'react-icons/tb'
function AdminNavBar() {
  return (
    <div className="max-h-screen bg-white border-r w-[18%] shadow-xl">
      <Image src={Logo} width={200} height={50} layout="fixed" />
      <div className='flex flex-row space-x-2 pl-4 py-2 mt-10 border-b border-t'>
        <VscSymbolColor className="text-lg mt-1" />
        <p className=" font-semibold">DASHBOARD</p>
      </div>

    <DropDownNavigator icon={<AiOutlineShoppingCart className="text-lg mt-1 mr-2 opacity-50" />} title='STORES & OFFERS' links={['Stores','Store Cashback','Store Categories','Coupon & Offers','Offer Categories','Daily Deals','Deals Categories']}/>
    <DropDownNavigator icon={<MdAirplanemodeActive className="text-lg mt-1 mr-2 opacity-50 rotate-45" />} title={'INSTABACK PROMO'} links={['Instaback Offers','Instaback Click Log']} />
    <DropDownNavigator icon={<AiOutlineContainer className="text-lg mt-1 mr-2 opacity-50" />} title={'CMS'} links={['Menu Builder','Pages','Content Blocks','User Dashboard Pages','Footer','Page Widget','FAQ','FAQ Categories']} />
    <DropDownNavigator icon={<FaAnchor className="text-lg mt-1 mr-2 opacity-50" />} title='AFFILIATE NETWORKS' links={['Affiliate networks','Campaign Master','Campaign Rates','Postback Log','Network run',"Network Coupons","Network API Log"]}/>
    <DropDownNavigator icon={<BsCash className="text-lg mt-1 mr-2 opacity-50" />} title='SALES & CASH' links={["Manual Sales Import","Click Log","Custom Conditions","Sales Transactions","Referral Transactions","Cashback Transactions","Bonus Transactions","Payment Modes","Payment Method Fields"]}/>
    <DropDownNavigator icon={<FaUsers className="text-lg mt-1 mr-2 opacity-50" />} title='USERS' links={["Users","Missing CB Claims","User Payment Modes","Withdrawal Requests","User Favorites","Share & Earn Links","Contact Form"]}/>
    <DropDownNavigator icon={<AiOutlineBars className="text-lg mt-1 mr-2 opacity-50" />} title='REPORTS & LOGS' links={["SMS Log","Earning by Network","Referral Invite Log","Earning by Stores","Referral Fraud Detection","Earning by Users"]}/>
    <DropDownNavigator icon={<MdOutlineSettingsSuggest className="text-lg mt-1 mr-2 opacity-50" />} title='SEETINGS' links={["Settings","SEO URL Redirect","Label Translation","Email Templates","Email Template Editor","Sitemap","Currency Master","Country Master"]}/>
    <DropDownNavigator icon={<TbPlug className="text-lg mt-1 mr-2 opacity-50" />} title='DEVELOPER SETUP' links={["Language Master","Task Management","Web Backup","API Backup"]}/>
    </div>
  )
}

export default AdminNavBar