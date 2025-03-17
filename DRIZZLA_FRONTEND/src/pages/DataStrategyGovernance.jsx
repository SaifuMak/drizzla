import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { DataStrategyGovernanceData } from '../datas/Services'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'
import Title from '../componets/general/Title'


const DataStrategyGovernance = () => {
    return (




        <div className="w-full flex-center flex-col">
            <AnimatedVideo />
            <div className="2xl:w-10/12 max-sm:mt-5 mt-3  w-11/12">
                <Title text='Data: Strategy & Governance' />
                <ServicesZigZagLayout datas={DataStrategyGovernanceData} />
            </div>
            <Footer />
        </div>
    )
}

export default DataStrategyGovernance