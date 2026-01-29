import { useEffect } from 'react'
import Footer from '../../componets/Footer'
import Title from '../../componets/general/Title'
import Navbar from '../../componets/Navbar'
import HelmetComponent from '../../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'
import { HolisticAI } from '../../datas/Partners'
import ServicesZigZagLayout from '../../componets/general/ServicesZigZagLayout'


const HolisticAIPage = () => {

    const location = useLocation(); // Get current route
    useEffect(() => {
        document.title = "AI Governance, Risk & Compliance Services | Drizzla";
    }, [location.pathname]); // Re-run effect when path changes


    return (
        <>

            <HelmetComponent
                title="AI Governance, Risk & Compliance Services"
                description="Expert AI governance, risk assessment, compliance automation, bias auditing, and generative AI safety services powered by the Holistic AI platform to help enterprises deploy responsible, trustworthy AI at scale."
            />

            <div className="flex-col w-full flex-center">
                {/* <AnimatedVideo /> */}
                <Navbar />
                <div className="mt-3 2xl:w-9/12 max-sm:mt-5 max-sm:px-3 md:w-11/12">

                    <Title text='Mastering Responsible Innovation: Drizzla – Your Expert Partner for the Holistic AI Governance Platform' />
                    <ServicesZigZagLayout datas={HolisticAI} />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default HolisticAIPage