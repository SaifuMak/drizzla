import { useEffect } from 'react'
import Footer from '../../componets/Footer'
import Title from '../../componets/general/Title'
import Navbar from '../../componets/Navbar'
import HelmetComponent from '../../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'
import { Ataccama } from '../../datas/Partners'
import ServicesZigZagLayout from '../../componets/general/ServicesZigZagLayout'
import useGsapFadeIn from '../../customHooks/useGsapFadeIn'


const AtaccamaPage = () => {

    const location = useLocation(); // Get current route
    useEffect(() => {
        document.title = "Ataccama Data Quality, Governance & MDM Services | Drizzla";
    }, [location.pathname]); // Re-run effect when path changes

    const imageRef = useGsapFadeIn()


    return (
        <>

            <HelmetComponent
                title="Ataccama Data Quality, Governance & MDM Services"
                description="Expert Ataccama data quality automation, master data management, data governance, observability, and privacy services to build trusted, AI-ready enterprise data foundations."
            />

            <div className="flex-col w-full ">
                {/* <AnimatedVideo /> */}
                <Navbar />
                <div className="mx-auto mt-3 2xl:w-9/12 max-sm:mt-5 max-sm:px-3 md:w-11/12">
                    <div ref={imageRef} className="flex-center ">
                        <img src="/Images/partners/ataccama.jpg"
                            alt="Azure"
                            className="object-contain h-16 mb-3 -mt-10 lg:-mt-16 lg:h-28" />
                    </div>

                    <Title text='Data Quality Reimagined: Drizzla – Your Strategic Ataccama Partner for AI-Ready Data Management' />
                    <ServicesZigZagLayout datas={Ataccama} />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default AtaccamaPage