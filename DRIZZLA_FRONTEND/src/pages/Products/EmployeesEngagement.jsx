import React from 'react'
import { ExployessEngagementData } from '../../datas/Products'
import StickySection from '../../componets/products/StickySection'
import AnimatedVideo from '../../componets/AnimatedVideo'
import TextVerticalReveal from '../../componets/TextVerticalReveal'
import AutomationVideo from '../../componets/AutomationVideo'
import Footer from '../../componets/Footer'
import ProductsDisplay from '../../componets/products/ProductsDisplay'
import ProductsDisplayMobile from '../../componets/products/ProductsDisplayMobile'
import useIsMobile from '../../customHooks/useIsMobile'

const EmployeesEngagement = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      <AnimatedVideo />

      <TextVerticalReveal text='Real  Time-Pulse.' secondText='Enhance Employee Engagement.' />

      {/* <AutomationVideo /> */}

      {/* <>
      {ExployessEngagementData && ExployessEngagementData.map((data) => (
        <StickySection key={data.index} data={data} />
      ))}
    </> */}

      {isMobile ? (
        <>
          {ExployessEngagementData && ExployessEngagementData.map((data) => (
            <ProductsDisplayMobile key={data.index} data={data} />
          ))}
        </>
      ) : (
        <ProductsDisplay ProductsData={ExployessEngagementData} />
      )}

      <Footer />


    </div>
  )
}

export default EmployeesEngagement