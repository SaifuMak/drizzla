import React from 'react'
import { ExployessEngagementData } from '../../datas/Products'
import StickySection from '../../componets/products/StickySection'
import AnimatedVideo from '../../componets/AnimatedVideo'
import TextVerticalReveal from '../../componets/TextVerticalReveal'
import AutomationVideo from '../../componets/AutomationVideo'
import Footer from '../../componets/Footer'


const EmployeesEngagement = () => {
  return (
    <div>
    <AnimatedVideo />

    <TextVerticalReveal text='Real Time-Pulse.' secondText='Enhance Employee Engagement.' />

    <AutomationVideo />

    <>
      {ExployessEngagementData && ExployessEngagementData.map((data) => (
        <StickySection key={data.index} data={data} />
      ))}
    </>
    <Footer />


  </div>
  )
}

export default EmployeesEngagement