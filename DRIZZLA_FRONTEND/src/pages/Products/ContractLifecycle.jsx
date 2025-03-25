import React from 'react'
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

const ContractLifecycle = () => {

    const isMobile = useIsMobile();


    return (
        <div>
            <AnimatedVideo MobileVideo={contractLifecycle.mobile}  DesktopVideo = {contractLifecycle.desktop} />

            <TextVerticalReveal text='Accelerate  Cycle  Times.' secondText='Reduce Administrative Burden' />

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
    )
}

export default ContractLifecycle