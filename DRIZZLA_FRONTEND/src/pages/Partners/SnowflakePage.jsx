import { useEffect } from 'react'
import Footer from '../../componets/Footer'
import Title from '../../componets/general/Title'
import Navbar from '../../componets/Navbar'
import HelmetComponent from '../../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'
import { Snowflake } from '../../datas/Partners'
import ServicesZigZagLayout from '../../componets/general/ServicesZigZagLayout'
import useGsapFadeIn from '../../customHooks/useGsapFadeIn'


const SnowflakePage = () => {

    const location = useLocation(); // Get current route
    useEffect(() => {
        document.title = "Snowflake Data Cloud, AI & Analytics Services | Drizzla";
    }, [location.pathname]); // Re-run effect when path changes

    const imageRef = useGsapFadeIn()


    return (
        <>

            <HelmetComponent
                title="Snowflake Data Cloud, AI & Analytics Services"
                description="Expert Snowflake Data Cloud migration, Snowpark data engineering, generative AI, real-time analytics, and governance services to build a secure, scalable, AI-ready enterprise data platform."
            />

            <div className="flex-col w-full flex-center">
                {/* <AnimatedVideo /> */}
                <Navbar />
                <div className="mt-3 2xl:w-9/12 max-sm:mt-5 max-sm:px-3 md:w-11/12">
                    <div ref={imageRef} className="flex-center ">
                        <img src="/Images/partners/snowflake.jpg"
                            alt="Azure"
                            className="object-contain h-24 -mt-16 lg:h-44" />
                    </div>
                    <Title text='Mobilize Your Data: Drizzla – The Best Snowflake Partner for Enterprise AI Data Cloud Excellence' />
                    <ServicesZigZagLayout datas={Snowflake} />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default SnowflakePage