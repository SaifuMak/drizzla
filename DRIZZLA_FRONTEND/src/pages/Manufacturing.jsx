import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { ManufacturingData } from '../datas/Services'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'
import Navbar from '../componets/Navbar'

const Manufacturing = () => {
  return (



    <div className="w-full flex-center flex-col">
      <Navbar />
      <div className="2xl:w-9/12 max-sm:mt-5 mt-3 max-sm:px-3  md:w-11/12">

        <ServicesZigZagLayout datas={ManufacturingData} />
      </div>
      <Footer />
    </div>
  )
}

export default Manufacturing