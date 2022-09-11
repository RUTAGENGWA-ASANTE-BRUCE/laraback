import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {useEffect,useState} from 'react'
import HomePage from "../components/HomePage"
// import '../../styles/globals.css'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { GetServerSideProps } from 'next'

const Home:NextPage= ({userData}) => {
 
  return (
    <div className="">
        <head>
          <title>Laraback</title>
          <link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
        </head>
        <main>
          <Header />
          <HomePage  />
          <Footer />
        </main>
    </div>
  )
}

export default Home
export const getServerSideProps:GetServerSideProps=async({ req, res })=> {
  return { props: { userData: req.cookies.userData || "" } };
}