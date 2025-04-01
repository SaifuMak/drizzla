import React, { useEffect } from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { BlockchainDigitalAssetsData } from '../datas/Services'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'
import Title from '../componets/general/Title'
import Navbar from '../componets/Navbar'
import HelmetComponent from '../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'

const BlockchainDigitalAssets = () => {


  
    const location = useLocation(); // Get current route
    useEffect(() => {
        document.title = "Blockchain & Digital Assets | Drizzla"; // Force title change
    }, [location.pathname]); // Re-run effect when path changes
  
  return (
    <>

      <HelmetComponent
        title="Blockchain & Digital Assets"
        description="Explore how blockchain technology and digital assets are reshaping industries."
      />


      <div className="flex-col w-full flex-center">
        <Navbar />

        <div className="mt-3 2xl:w-9/12 max-sm:mt-5 max-sm:px-3 md:w-11/12">

          <Title text='Blockchain & Digital Assets' />
          <ServicesZigZagLayout datas={BlockchainDigitalAssetsData} />
        </div>
        <Footer />
      </div>

    </>
  )
}

export default BlockchainDigitalAssets