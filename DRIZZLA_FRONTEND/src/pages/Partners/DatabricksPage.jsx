import { useEffect } from 'react'
import Footer from '../../componets/Footer'
import Title from '../../componets/general/Title'
import Navbar from '../../componets/Navbar'
import HelmetComponent from '../../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'
import { Databricks } from '../../datas/Partners'
import ServicesZigZagLayout from '../../componets/general/ServicesZigZagLayout'


const DatabricksPage = () => {

    const location = useLocation(); // Get current route
    useEffect(() => {
        document.title = "Databricks Lakehouse, AI & Analytics Services | Drizzla";
    }, [location.pathname]); // Re-run effect when path changes


    return (
        <>

            <HelmetComponent
                title="Databricks Lakehouse, AI & Analytics Services"
                description="Expert Databricks Lakehouse migration, data engineering, machine learning, real-time analytics, and governance services to build a scalable, AI-ready enterprise data platform."
            />

            <div className="flex-col w-full flex-center">
                {/* <AnimatedVideo /> */}
                <Navbar />
                <div className="mt-3 2xl:w-9/12 max-sm:mt-5 max-sm:px-3 md:w-11/12">

                    <Title text='Architecting Intelligence: Drizzla – Your Strategic Databricks Partner for the Enterprise Lakehouse Excellence' />
                    <ServicesZigZagLayout datas={Databricks} />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default DatabricksPage