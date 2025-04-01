import React, { useEffect } from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { DataStrategyGovernanceData } from '../datas/Services'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'
import Title from '../componets/general/Title'
import Navbar from '../componets/Navbar'
import HelmetComponent from '../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'



const DataStrategyGovernance = () => {

    
    const location = useLocation(); // Get current route
    useEffect(() => {
        document.title = "Data Strategy & Governance | Drizzla"; // Force title change
    }, [location.pathname]); // Re-run effect when path changes

    return (
        <>
            <HelmetComponent
                title="Data Strategy & Governance"
                description="Implement robust data strategy and governance frameworks to maximize business insights."
            />

            <div className="flex-col w-full flex-center">
                <Navbar />
                <div className="mt-3 2xl:w-9/12 max-sm:mt-5 max-sm:px-3 md:w-11/12">

                    <Title text='Data: Strategy & Governance' />
                    <ServicesZigZagLayout datas={DataStrategyGovernanceData} />
                </div>
                <Footer />
            </div>

        </>

    )
}

export default DataStrategyGovernance