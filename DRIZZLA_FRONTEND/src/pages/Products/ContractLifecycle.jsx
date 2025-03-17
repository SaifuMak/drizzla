import React from 'react'
import { ContractLifeCycleData } from '../../datas/Products'
import StickySection from '../../componets/products/StickySection'
import AnimatedVideo from '../../componets/AnimatedVideo'
import TextVerticalReveal from '../../componets/TextVerticalReveal'
import AutomationVideo from '../../componets/AutomationVideo'
import Footer from '../../componets/Footer'


const ContractLifecycle = () => {
    return (
        <div>
            <AnimatedVideo />

            <TextVerticalReveal text='Accelerate Cycle Times.' secondText='Reduce Administrative Burden' />

            <AutomationVideo />

            <>
                {ContractLifeCycleData && ContractLifeCycleData.map((data) => (
                    <StickySection key={data.index} data={data} />
                ))}
            </>
            <Footer />

        </div>
    )
}

export default ContractLifecycle