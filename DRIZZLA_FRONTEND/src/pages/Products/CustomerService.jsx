import React, { useEffect } from 'react'
import { CustomerServiceData } from '../../datas/Products'
import StickySection from '../../componets/products/StickySection'
import AnimatedVideo from '../../componets/AnimatedVideo'
import TextVerticalReveal from '../../componets/TextVerticalReveal'
import AutomationVideo from '../../componets/AutomationVideo'
import Footer from '../../componets/Footer'
import useIsMobile from '../../customHooks/useIsMobile'
import ProductsDisplay from '../../componets/products/ProductsDisplay'
import ProductsDisplayMobile from '../../componets/products/ProductsDisplayMobile'
import { customerService } from '../../datas/Videos'
import HelmetComponent from '../../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'



const CustomerService = () => {

   const location = useLocation(); // Get current route
    useEffect(() => {
      document.title = "Customer Service Solutions | Drizzla"; // Force title change
    }, [location.pathname]); // Re-run effect when path changes
  


  const isMobile = useIsMobile();



  return (
    <>

      <HelmetComponent
        title="Customer Service Solutions"
        description="Transform customer service with AI-powered chatbots, automation, and support solutions."
      />

      <div>
        <AnimatedVideo MobileVideo={customerService.mobile} DesktopVideo={customerService.desktop} />

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

    </>

  )
}

export default CustomerService