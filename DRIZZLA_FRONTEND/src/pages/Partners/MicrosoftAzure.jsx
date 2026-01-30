import { useEffect } from 'react'
import Footer from '../../componets/Footer'
import Title from '../../componets/general/Title'
import Navbar from '../../componets/Navbar'
import HelmetComponent from '../../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'
import { Microsoft } from '../../datas/Partners'
import ServicesZigZagLayout from '../../componets/general/ServicesZigZagLayout'
import useGsapFadeIn from '../../customHooks/useGsapFadeIn'


const MicrosoftAzure = () => {

    const location = useLocation(); // Get current route
    useEffect(() => {
        document.title = "Azure Data, AI & Governance Services | Drizzla";
    }, [location.pathname]); // Re-run effect when path changes

    const imageRef = useGsapFadeIn()


    return (
        <>

            <HelmetComponent
                title="Azure Data, AI & Governance Services"
                description="Expert Microsoft Fabric, Azure OpenAI, MLOps, data governance, and managed cloud services to build a secure, scalable, AI-ready enterprise on Azure."
            />
            <div className="flex-col w-full flex-center">
                {/* <AnimatedVideo /> */}
                <Navbar />
                <div className="mt-3 2xl:w-9/12 max-sm:mt-5 max-sm:px-3 md:w-11/12">
                    <div ref={imageRef} className="flex-center ">
                        <img src="/Images/partners/microsoft-azure.jpg"
                            alt="Azure"
                            className="object-contain h-24 -mt-16 lg:h-44" />
                    </div>

                    <Title text='Accelerate Your Digital Transformation with Drizzla: The Leading Microsoft Azure Data & AI Partner' />

                    <ServicesZigZagLayout datas={Microsoft} />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default MicrosoftAzure