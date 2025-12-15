import React, { useEffect } from 'react'
import { ExployessEngagementData } from '../../datas/Products'
import StickySection from '../../componets/products/StickySection'
import AnimatedVideo from '../../componets/AnimatedVideo'
import TextVerticalReveal from '../../componets/TextVerticalReveal'
import AutomationVideo from '../../componets/AutomationVideo'
import Footer from '../../componets/Footer'
import ProductsDisplay from '../../componets/products/ProductsDisplay'
import ProductsDisplayMobile from '../../componets/products/ProductsDisplayMobile'
import useIsMobile from '../../customHooks/useIsMobile'
import { employeeEngagement } from '../../datas/Videos'
import HelmetComponent from '../../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'


const EmployeesEngagement = () => {
  const isMobile = useIsMobile();


  const location = useLocation(); // Get current route
  useEffect(() => {
    document.title = "Employee Engagement | Drizzla"; // Force title change
  }, [location.pathname]); // Re-run effect when path changes



  return (
    <>

      <HelmetComponent
        title="Employee Engagement"
        description="Boost employee productivity and engagement with AI-driven insights and solutions."
      />

      
      <div>
        <AnimatedVideo MobileVideo={employeeEngagement.mobile} DesktopVideo={employeeEngagement.desktop} Title='TaqCompare AI: Advanced Arabic Comparison' />

        <TextVerticalReveal text='Review Velocity.' secondText='Guaranteed Accuracy' />

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

    </>
  )
}

export default EmployeesEngagement