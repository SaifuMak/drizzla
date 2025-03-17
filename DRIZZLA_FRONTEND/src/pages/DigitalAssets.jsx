import React from 'react'
import { DigitalAssetsData } from '../datas/Services'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'
import Title from '../componets/general/Title'


const DigitalAssets = () => {
  return (



    <div className="w-full flex-center flex-col">
      <AnimatedVideo />
      <div className="2xl:w-10/12 max-sm:mt-5 mt-3  w-11/12">
        <Title text='Digital Assets: Business & Operational Strategy' />
        <ServicesZigZagLayout datas={DigitalAssetsData} />
      </div>
      <Footer />
    </div>
  )
}

export default DigitalAssets