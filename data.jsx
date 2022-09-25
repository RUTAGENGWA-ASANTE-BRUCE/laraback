import React from 'react'

import { FaSearchDollar } from "react-icons/fa";
import {BsCart3}from "react-icons/bs"
import {GiTakeMyMoney} from "react-icons/gi"
import {FaMoneyBillAlt} from "react-icons/fa"
export const functionalities=[
    {
        title:"Browse",
        description:"Browse Cashback and choose from thousands of stores",
        icon:   <FaSearchDollar className="text-3xl m-auto   " />
    },
    {
        title:"Shop",
        description:"Follow the link to your favorite store or deal and purchase as normal",
        icon:   <BsCart3 className="text-3xl m-auto   " />
    },
    {
        title:"Earn",
        description:"Cash Back added to your account",
        icon:   <GiTakeMyMoney className="text-3xl m-auto   " />
    },
    {
        title:"Withdraw",
        description:"Request payment and get via bank transfer, Paypal or gift voucher",
        icon:   <FaMoneyBillAlt className="text-3xl m-auto   " />
    }
]

export const stores=[
    {
        name:"Citi Bank",
        image:"https://joub.co.za/wp-content/uploads/2021/07/52968af44228ad023542426899b2fb07.jpg",
        rate:"Rp2856.80",
        cashbackRate:"Rp2913.94",
    },
    {
        nam:"libert Ex",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6RXd6uM3ELkd7rueemRmrPQXZbcTLKCIag&usqp=CAU",
    },
    {
        name:"Charehapa",
        image:"https://images-platform.99static.com//_js5btk0rILuqWnlMVTpH3GkVoo=/113x0:1737x1624/fit-in/500x500/99designs-contests-attachments/92/92057/attachment_92057752",
        rate:"20.00%",
        cashbackRate:"30.00%"
    },
    {
        name:"Voyage",
        image:"https://www.demidich.ru/upload/iblock/822/822248c91c35af3dce94daec341620d4.png",
        rate:"15.60%",
        cashbackRate:"Rp384.00"
    },
    { name:"Zetta",
        image:"https://cdn.knoji.com/images/logo/cherehaparu.jpg",
        cashbackRate:"12.00%"
    },
    {
        name:"Charehapa",
        image:"https://thumb.tildacdn.com/tild6635-3362-4265-b732-333838393437/-/resize/300x/-/format/webp/Frame_6.png",
        cashbackRate:"Rp307.20"
    }
]

export const offersOfDay=[
    {   town:"Shangai",
        until:"31.12.2022",
        rate:0.80,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmla-K4ZPSEWxls8LZymMAzw-3J_zCfw_bbQwbwL953o7J4vx9tJRq&usqp=CAU"
    },
    {
        town:"Texas",
        until:"20.11.2022",
        rate:0.76,
        image:"https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
    },
    {
        town:"Hawai",
        until:"15.08.2023",
        rate:0.65,
        image:"https://play-lh.googleusercontent.com/9F77E_9s7aiXK8dvavEi1IHLhMXpulpyPU1hdZVfajI9PELVhRsfw3hdcZ15nsQePA"
    },
    {
        town:"Hashirama",
        until:"11.08.2022",
        rate:0.70,
        image:"https://www.tradingpedia.com/wp-content/uploads/2013/11/Alibaba-logo.jpg"
    }
]

export const offers=[
    {
    companyImage:stores[2].image,
    rate:4.80,
    upto:true,
    desc:"43% OFF Xisomi Youpin DDPal MiniS Drive Recorder with Step-down Cable",
    buttonCode:"22",
    },
    {
        companyImage:stores[3].image,
        rate:4.80,
        upto:true,
        desc:"3D Graphic T-shirt Super Sale",
    },
    {
        companyImage:stores[4].image,
        rate:12.00,
        desc:"Get 12% off on orders over $149",
        buttonCode:"US",
    },
    {
        companyImage:stores[1].image, 
        desc:"Get $5 off on orders over $90",
        buttonCode:"OS",
    },
    {
        companyImage:stores[2].image,
        rate:12.00,
        upto:true,
        desc:"10% Off Sitewide",
        buttonCode:"B0",
    },
    {
        companyImage:stores[3].image,
        desc:"Get $3 Off on orders over $50",
        buttonCode:"03",
    },
    {
        companyImage:stores[5].image,
        rate:12.00,
        desc:"Free shipping on orders over $110",
        buttonCode:"EN",
    },
    {
        companyImage:stores[0].image,
        desc:"Get $8 off on orders over $120",
        buttonCode:"08",
    },
]

export const deals=[
    {
        companyName:"LigthTake",
        companyImage:"https://cdn.megabonus.com/images/shop_logo/origin/lightake.png",
        description:"would put it Id",
        image:"https://i.guim.co.uk/img/media/e257becfec477105123f06f96db4529966b4035c/0_391_6048_3628/master/6048.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6a3a587e64662d409ef25b3215fb5ac0",
        rate:"Rp80.00",
        amount:"Rp1000.00",
    },
    {
        companyName:"Samsung",
        companyImage:"https://images.samsung.com/is/image/samsung/assets/lb/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$",
        description:"NOCRAMS NOW",
        image:"https://image.makewebeasy.net/makeweb/0/JhZ1x9UPT/ATECO/1623920737581.jpg",
        rate:"1.60%",
        amount:"Rp4000.00"
    },
    { companyName:"Drop",
        companyImage:"https://upload.wikimedia.org/wikipedia/commons/1/19/Drop_company_logo.png",
        description:"crypt on",
        image:"https://i.guim.co.uk/img/media/e257becfec477105123f06f96db4529966b4035c/0_391_6048_3628/master/6048.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6a3a587e64662d409ef25b3215fb5ac0",
        rate:"4.00%",
        upto:true,
        amount:"Rp2000.00"
    },
    {
        companyName:stores[5].name,
        companyImage:stores[5].image,
        description:"like it",
        image:"https://media.cnn.com/api/v1/images/stellar/prod/210921222249-3-9th-gen-ipad-review-underscored.jpg?q=w_3748,h_2108,x_0,y_0,c_fill",
        rate:"11.04%",
        upto:true,
        amount:"Rp4000.00"
    },
    {
        companyName:stores[2].name,
        companyImage:stores[2].image,
        description:"White board",
        image:"https://www.peachyhire.com/wp-content/uploads/2018/07/Large-Whiteboard.jpeg",
        rate:"6.15%",
        amount:"Rp0.00"
    },
    {
        companyName:stores[3].name,
        companyImage:stores[3].image,
        description:"",
        image:"https://www.peachyhire.com/wp-content/uploads/2018/07/Large-Whiteboard.jpeg",
        rate:"Rp2.00",
        amount:"Rp3000.00"
    },
    {
        companyName:stores[0].name,
        companyImage:stores[0].image,
        description:"crypt only",
        image:"https://zazahomes.co.uk/wp-content/uploads/2020/04/IMG_5311-1600x1600.jpg",
        rate:"12.04%",
        upto:true,
        amount:"Rp1000.00"
    },
]

export const ourCV=[
    {
        id:"nciqknfqdqdqfdada",
        title: "Happy Users",
        number:1542
    },
    {
        id:"smvsbvswf287r22",
        title: "Coupons Redeemed",
        number:4874
    },
    {
        id:"sjvnwfh2irb2f2knfk",
        title: "Paid Cashback",
        number:3652
    },
    {
        id:"djkvbnwt7g27fubnlf",
        title: "Coupons & Deals",
        number:1024
    }
]