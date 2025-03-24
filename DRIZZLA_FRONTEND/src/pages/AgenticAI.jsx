import React from 'react'
import { AgenticAiData } from '../datas/Services'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'
import Title from '../componets/general/Title'
import Navbar from '../componets/Navbar'



const AgenticAI = () => {
    return (
        <div className="flex-col w-full flex-center">
            {/* <AnimatedVideo /> */}
            <Navbar/>
            <div className="mt-3 2xl:w-9/12 max-sm:mt-5 max-sm:px-3 md:w-11/12">

                <Title text='Agentic AI and Intelligent Applications' />
                <ServicesZigZagLayout datas={AgenticAiData} />
            </div>
            <Footer />
        </div>
    )
}

export default AgenticAI