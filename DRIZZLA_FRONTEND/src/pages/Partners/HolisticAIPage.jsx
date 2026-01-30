import { useEffect } from 'react'
import Footer from '../../componets/Footer'
import Title from '../../componets/general/Title'
import Navbar from '../../componets/Navbar'
import HelmetComponent from '../../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'
import { HolisticAI } from '../../datas/Partners'
import ServicesZigZagLayout from '../../componets/general/ServicesZigZagLayout'
import useGsapFadeIn from '../../customHooks/useGsapFadeIn'

const HolisticAIPage = () => {

    const location = useLocation(); // Get current route
    useEffect(() => {
        document.title = "AI Governance, Risk & Compliance Services | Drizzla";
    }, [location.pathname]); // Re-run effect when path changes

    const imageRef = useGsapFadeIn()


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

                  <div ref={imageRef} className="flex-center ">
                        <img src="/Images/partners/holsitic.jpg"
                            alt="Azure"
                            className="object-contain h-20 mb-3 -mt-10 lg:-mt-16 lg:h-36" />
                    </div>


                    <Title text='Mastering Responsible Innovation: Drizzla – Your Expert Partner for the Holistic AI Governance Platform' />
                    <ServicesZigZagLayout datas={HolisticAI} />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default HolisticAIPage