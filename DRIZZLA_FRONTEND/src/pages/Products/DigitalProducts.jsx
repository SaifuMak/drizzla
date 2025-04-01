import React, { useEffect } from 'react'
import { DigitalProductsData } from '../../datas/Products'
import StickySection from '../../componets/products/StickySection'
import AnimatedVideo from '../../componets/AnimatedVideo'
import TextVerticalReveal from '../../componets/TextVerticalReveal'
import AutomationVideo from '../../componets/AutomationVideo'
import Footer from '../../componets/Footer'
import ProductsDisplay from '../../componets/products/ProductsDisplay'
import ProductsDisplayMobile from '../../componets/products/ProductsDisplayMobile'
import useIsMobile from '../../customHooks/useIsMobile'
import { digitalProduct } from '../../datas/Videos'
import HelmetComponent from '../../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'



const DigitalProducts = () => {
    const isMobile = useIsMobile();


    const location = useLocation(); // Get current route
    useEffect(() => {
        document.title = "Digital Products | Drizzla"; // Force title change
    }, [location.pathname]); // Re-run effect when path changes



    return (
        <>

            <HelmetComponent
                title="Digital Products"
                description="Explore our innovative digital products designed for businesses of the future."
            />

            <div>
                <AnimatedVideo MobileVideo={digitalProduct.mobile} DesktopVideo={digitalProduct.desktop} />

                <TextVerticalReveal text='Consumer  Confidence.' secondText='Traceability & Transparency' />

                {/* <AutomationVideo /> */}

                {/* <>
                {DigitalProductsData && DigitalProductsData.map((data) => (
                    <StickySection key={data.index} data={data} />
                ))}
            </> */}

                {isMobile ? (
                    <>
                        {DigitalProductsData && DigitalProductsData.map((data) => (
                            <ProductsDisplayMobile key={data.index} data={data} />
                        ))}
                    </>
                ) : (
                    <ProductsDisplay ProductsData={DigitalProductsData} />
                )}
                <Footer />

            </div>

        </>
    )
}

export default DigitalProducts