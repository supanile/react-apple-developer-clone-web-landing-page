import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Promo from './components/Promo'
import Plan from './components/Plan'
import Products from './components/Products'
import Whatsnew from './components/Whatsnew'
import Adp from './components/Adp'
import Links from './components/Links'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <Promo />
      <Plan />
      <Products />
      <Whatsnew />
      <Adp />
      <Links />
      <Footer />
    </>
  )
}

export default App
