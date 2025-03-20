import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { ManufacturingData } from '../datas/Services'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'


const Manufacturing = () => {
  return (



    <div className="w-full flex-center flex-col">
      <AnimatedVideo />
      <div className="2xl:w-10/12 max-sm:mt-5 mt-3 w-11/12  ">
        <ServicesZigZagLayout datas={ManufacturingData} />
      </div>
      <Footer />
    </div>
  )
}

export default Manufacturing