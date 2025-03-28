import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { GovernmentData } from '../datas/Services'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'
import Navbar from '../componets/Navbar'
import useGsapFadeIn from '../customHooks/useGsapFadeIn'



const Government = () => {
    return (




        <div className="flex-col w-full flex-center">
            <Navbar />
            <div className="mt-3 2xl:w-9/12 max-sm:mt-5 max-sm:px-3 md:w-11/12">

                <ServicesZigZagLayout datas={GovernmentData} />


            </div>
            <Footer />
        </div>
    )
}

export default Government