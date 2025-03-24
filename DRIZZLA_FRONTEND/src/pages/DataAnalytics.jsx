import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { DataAnalyticsData } from '../datas/Services'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'
import Title from '../componets/general/Title'
import Navbar from '../componets/Navbar'


const DataAnalytics = () => {
  return (


    <div className="flex-col w-full flex-center">
                  <Navbar/>

      <div className="mt-3 2xl:w-9/12 max-sm:mt-5 max-sm:px-3 md:w-11/12">

        <Title text='Data & Analytics' />
        <ServicesZigZagLayout datas={DataAnalyticsData} />
      </div>
      <Footer />
    </div>
  )
}

export default DataAnalytics