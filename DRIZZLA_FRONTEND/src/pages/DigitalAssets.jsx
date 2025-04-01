import React, { useEffect } from 'react'
import { DigitalAssetsData } from '../datas/Services'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'
import Title from '../componets/general/Title'
import Navbar from '../componets/Navbar'
import HelmetComponent from '../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'


const DigitalAssets = () => {


  const location = useLocation(); // Get current route
  useEffect(() => {
    document.title = "Digital Assets & Business Strategy | Drizzla"; // Force title change
  }, [location.pathname]); // Re-run effect when path changes


  return (

    <>
      <HelmetComponent
        title="Digital Assets & Business Strategy"
        description="Unlock new business opportunities with digital assets and strategic business planning."
      />

      <div className="flex-col w-full flex-center">
        <Navbar />
        <div className="mt-3 2xl:w-9/12 max-sm:mt-5 max-sm:px-3 md:w-11/12">

          <Title text='Digital Assets: Business & Operational Strategy' />
          <ServicesZigZagLayout datas={DigitalAssetsData} />
        </div>
        <Footer />
      </div>

    </>

  )
}

export default DigitalAssets