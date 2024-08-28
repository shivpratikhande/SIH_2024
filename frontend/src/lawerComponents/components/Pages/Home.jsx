import React from 'react'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import Hero from '../HomePage/Hero'
import CustomCarousel from '../HomePage/CustomCarousel'
import InfoSections from '../HomePage/Users'
import Works from '../HomePage/Works'

function Home() {
  return (
   <>
   <Navbar />
   <CustomCarousel id=""/>
   <InfoSections/>
   <Works/>
   <Footer/>
   </>
  )
}

export default Home