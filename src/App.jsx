import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Infobar from './Components/InfoBar/Infobar'
import Achievement from './Components/Achievement/Achievement'
import OurProducts from './Components/OurProducts/OurProducts'
import AboutCorporate from './Components/AboutCorporate/AboutCorporate'
import LowerBar from './Components/LowerBar/LowerBar'
import Manufacturing from './Components/Manufacturing/Manufacturing'
import Customer from './Components/Customer/Customer'
import Footer from './Components/Footer/Footer'

function App() {


  return (
   <>
   <Navbar/>
   <About/>
   <Infobar/>
   <Achievement/>
   <OurProducts/>
   <AboutCorporate/>
   <LowerBar/>
   <Manufacturing/>
   <Customer/>
   <Footer/>
   </>
  )
}

export default App
