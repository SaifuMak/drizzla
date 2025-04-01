import React, { useEffect } from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { AviationData } from '../datas/Services'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'
import Navbar from '../componets/Navbar'
import HelmetComponent from '../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'


const Aviation = () => {

  const location = useLocation(); // Get current route
  useEffect(() => {
    document.title = "Aviation Services | Drizzla"; // Force title change
  }, [location.pathname]); // Re-run effect when path changes


  
  return (

    <>
      <HelmetComponent
        title="Aviation Services"
        description="Enhance aviation operations with AI-driven analytics, safety, and efficiency solutions."
      />

      <div className="flex-col w-full flex-center">
        <Navbar />
        <div className="mt-3 2xl:w-9/12 max-sm:mt-5 max-sm:px-3 md:w-11/12">

          <ServicesZigZagLayout datas={AviationData} />
        </div>
        <Footer />
      </div>

    </>

  )
}

export default Aviation