import React from 'react'
import { CustomerServiceData } from '../../datas/Products'
import StickySection from '../../componets/products/StickySection'
import AnimatedVideo from '../../componets/AnimatedVideo'
import TextVerticalReveal from '../../componets/TextVerticalReveal'
import AutomationVideo from '../../componets/AutomationVideo'
import Footer from '../../componets/Footer'
import useIsMobile from '../../customHooks/useIsMobile'
import ProductsDisplay from '../../componets/products/ProductsDisplay'
import ProductsDisplayMobile from '../../componets/products/ProductsDisplayMobile'


const CustomerService = () => {


  const isMobile = useIsMobile();



  return (

    <div>
      <AnimatedVideo />

      <TextVerticalReveal text='Streamlined  Interaction.' secondText='Data-Driven Improvements' />

      {/* <AutomationVideo /> */}

      {/* <div className="">
        {CustomerServiceData && CustomerServiceData.map((data, index) => (
          <StickySection key={data.index} data={data} />
        ))}
      </div> */}


      {isMobile ? (
        <>
          {CustomerServiceData && CustomerServiceData.map((data) => (
            <ProductsDisplayMobile key={data.index} data={data} />
          ))}
        </>
      ) : (
        <ProductsDisplay ProductsData={CustomerServiceData} />
      )}



      <Footer />


    </div>
  )
}

export default CustomerService