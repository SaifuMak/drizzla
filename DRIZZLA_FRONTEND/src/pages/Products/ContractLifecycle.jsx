import React, { useEffect } from 'react'
import { ContractLifeCycleData } from '../../datas/Products'
import StickySection from '../../componets/products/StickySection'
import AnimatedVideo from '../../componets/AnimatedVideo'
import TextVerticalReveal from '../../componets/TextVerticalReveal'
import AutomationVideo from '../../componets/AutomationVideo'
import Footer from '../../componets/Footer'
import ProductsDisplay from '../../componets/products/ProductsDisplay'
import ProductsDisplayMobile from '../../componets/products/ProductsDisplayMobile'
import useIsMobile from '../../customHooks/useIsMobile'
import { contractLifecycle } from '../../datas/Videos'
import HelmetComponent from '../../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'




const ContractLifecycle = () => {


    const location = useLocation(); // Get current route
    useEffect(() => {
      document.title = "Contract Lifecycle Management | Drizzla"; // Force title change
    }, [location.pathname]); // Re-run effect when path changes
  


    const isMobile = useIsMobile();


    return (
        <>

            <HelmetComponent
                title="Contract Lifecycle Management"
                description="Streamline contract management with AI and digital solutions for improved efficiency."
            />
            <div>
                <AnimatedVideo MobileVideo={contractLifecycle.mobile} DesktopVideo={contractLifecycle.desktop} Title='Bid Comply AI: Procurement Evaluation Redefined' />

                <TextVerticalReveal text='Accelerated Procurement.' secondText='Defensible Compliance' />

                {/* <AutomationVideo /> */}

                {isMobile ? (
                    <>
                        {ContractLifeCycleData && ContractLifeCycleData.map((data) => (
                            <ProductsDisplayMobile key={data.index} data={data} />
                        ))}
                    </>
                ) : (
                    <ProductsDisplay ProductsData={ContractLifeCycleData} />
                )}


                <Footer />

            </div>

        </>
    )
}

export default ContractLifecycle