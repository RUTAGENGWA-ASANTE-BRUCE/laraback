import type { NextPage } from 'next'

import HomePage from "../components/HomePage"
import Header from "../components/Header" 
import Footer from "../components/Footer"

const Home:NextPage= () => {
  return (
    <div className="theme-swiss">
        <head>
          <title>Laraback</title>
          <meta name="verify-admitad" content="6f4e09d182" />
          <meta name="verify-admitad" content="1cb36cb4e0" />
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
