import React from 'react'
import { AgenticAiData } from '../datas/Services'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'
import Title from '../componets/general/Title'


const AgenticAI = () => {
    return (
        <div className="w-full flex-center flex-col">
            <AnimatedVideo />
            <div className="2xl:w-9/12 max-sm:mt-5 mt-3 max-sm:px-3  md:w-10/12">

                <Title text='Agentic AI and Intelligent Applications' />
                <ServicesZigZagLayout datas={AgenticAiData} />
            </div>
            <Footer />
        </div>
    )
}

export default AgenticAI