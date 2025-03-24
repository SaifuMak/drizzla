import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { BlockchainDigitalAssetsData } from '../datas/Services'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'
import Title from '../componets/general/Title'
import Navbar from '../componets/Navbar'



const BlockchainDigitalAssets = () => {
  return (


    <div className="flex-col w-full flex-center">
      <Navbar />

      <div className="mt-3 2xl:w-9/12 max-sm:mt-5 max-sm:px-3 md:w-11/12">

        <Title text='Blockchain & Digital Assets' />
        <ServicesZigZagLayout datas={BlockchainDigitalAssetsData} />
      </div>
      <Footer />
    </div>
  )
}

export default BlockchainDigitalAssets