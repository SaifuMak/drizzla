import React from 'react'
import { DigitalProductsData } from '../../datas/Products'
import StickySection from '../../componets/products/StickySection'
import AnimatedVideo from '../../componets/AnimatedVideo'
import TextVerticalReveal from '../../componets/TextVerticalReveal'
import AutomationVideo from '../../componets/AutomationVideo'
import Footer from '../../componets/Footer'
import ProductsDisplay from '../../componets/products/ProductsDisplay'
import ProductsDisplayMobile from '../../componets/products/ProductsDisplayMobile'
import useIsMobile from '../../customHooks/useIsMobile'

const DigitalProducts = () => {
    const isMobile = useIsMobile();

    return (
        <div>
            <AnimatedVideo />

            <TextVerticalReveal text='Consumer Confidence.' secondText='Traceability & Transparency' />

            <AutomationVideo />

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
    )
}

export default DigitalProducts