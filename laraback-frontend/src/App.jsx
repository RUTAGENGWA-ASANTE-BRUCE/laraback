import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
        <Header />
        <Home />
        <Footer />
    </div>
  )
}

export default App
