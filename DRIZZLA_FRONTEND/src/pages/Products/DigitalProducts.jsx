import React from 'react'
import { DigitalProductsData } from '../../datas/Products'
import StickySection from '../../componets/products/StickySection'
import AnimatedVideo from '../../componets/AnimatedVideo'
import TextVerticalReveal from '../../componets/TextVerticalReveal'
import AutomationVideo from '../../componets/AutomationVideo'
import Footer from '../../componets/Footer'


const DigitalProducts = () => {
    return (
        <div>
            <AnimatedVideo />

            <TextVerticalReveal text='Consumer Confidence.' secondText='Traceability & Transparency' />

            <AutomationVideo />

            <>
                {DigitalProductsData && DigitalProductsData.map((data) => (
                    <StickySection key={data.index} data={data} />
                ))}
            </>
            <Footer />


        </div>
    )
}

export default DigitalProducts