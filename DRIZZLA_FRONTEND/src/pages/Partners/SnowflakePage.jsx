import { useEffect } from 'react'
import Footer from '../../componets/Footer'
import Title from '../../componets/general/Title'
import Navbar from '../../componets/Navbar'
import HelmetComponent from '../../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'
import { Snowflake } from '../../datas/Partners'
import ServicesZigZagLayout from '../../componets/general/ServicesZigZagLayout'


const SnowflakePage = () => {

    const location = useLocation(); // Get current route
    useEffect(() => {
        document.title = "Snowflake Data Cloud, AI & Analytics Services | Drizzla";
    }, [location.pathname]); // Re-run effect when path changes


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

                    <Title text='Mobilize Your Data: Drizzla – The Best Snowflake Partner for Enterprise AI Data Cloud Excellence' />
                    <ServicesZigZagLayout datas={Snowflake} />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default SnowflakePage