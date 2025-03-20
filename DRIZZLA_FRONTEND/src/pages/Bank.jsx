import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { BankingData } from '../datas/Services'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'

const Bank = () => {
    return (


        <div className="w-full flex-center flex-col">
            <AnimatedVideo />
            <div className="2xl:w-9/12 max-sm:mt-5 mt-3 max-sm:px-3  md:w-10/12">

                <ServicesZigZagLayout datas={BankingData} />
            </div>
            <Footer />
        </div>
    )
}

export default Bank