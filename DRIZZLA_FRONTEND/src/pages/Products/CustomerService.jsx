import React from 'react'
import { CustomerServiceData } from '../../datas/Products'
import StickySection from '../../componets/products/StickySection'
import AnimatedVideo from '../../componets/AnimatedVideo'
import TextVerticalReveal from '../../componets/TextVerticalReveal'
import AutomationVideo from '../../componets/AutomationVideo'
import Footer from '../../componets/Footer'

const CustomerService = () => {

  return (

    <div>
      <AnimatedVideo />

      <TextVerticalReveal text='Streamlined Interactions.' secondText='Data-Driven Improvements' />

      <AutomationVideo />

      <div className="">
        {CustomerServiceData && CustomerServiceData.map((data, index) => (
          <StickySection key={data.index} data={data} />
        ))}
      </div>
      <Footer />


    </div>
  )
}

export default CustomerService