import type { NextPage } from 'next'

import HomePage from "../components/HomePage"
import Header from "../components/Header" 
import Footer from "../components/Footer"

const Home:NextPage= () => {
  return (
    <div className="theme-swiss">
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
          <HomePage/>
          <Footer />
        </main>
    </div>
  )
}

export default Home
