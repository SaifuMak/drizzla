import React, { useEffect } from 'react'
import { AgenticAiData } from '../datas/Services'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'
import Title from '../componets/general/Title'
import Navbar from '../componets/Navbar'
import HelmetComponent from '../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'


const AgenticAI = () => {

    const location = useLocation(); // Get current route
    useEffect(() => {
        document.title = "AI Strategy & Governance | Drizzla"; // Force title change
    }, [location.pathname]); // Re-run effect when path changes
  

    return (
        <>

            <HelmetComponent
                title="AI Strategy & Governance"
                description="Discover how AI strategy and governance can transform your business operations and decision-making."
            />

            <div className="flex-col w-full flex-center">
                {/* <AnimatedVideo /> */}
                <Navbar />
                <div className="mt-3 2xl:w-9/12 max-sm:mt-5 max-sm:px-3 md:w-11/12">

                    <Title text='Agentic AI and Intelligent Applications' />
                    <ServicesZigZagLayout datas={AgenticAiData} />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default AgenticAI