import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { SupplyLogisticsData } from '../datas/Services'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'
import Navbar from '../componets/Navbar'



const SuppyChainLogistics = () => {

    return (

        <div className="flex-col   w-full flex-center">
            <Navbar />
            <div className="mt-3 2xl:w-9/12 max-sm:mt-5 max-sm:px-3 md:w-11/12">

                <ServicesZigZagLayout datas={SupplyLogisticsData} />
            </div>
            <Footer />
            {/* <div className=" bg-red-200  absolute h-[400px]  inset-0 "></div> */}
        </div>
    )
}

export default SuppyChainLogistics