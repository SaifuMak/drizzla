import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { HealthcareData } from '../datas/Services'


const Healthcare = () => {
  return (
    <div className="w-full flex-center">
    <div className="w-10/12">
        <ServicesZigZagLayout datas={HealthcareData} />
    </div>
</div>
  )
}

export default Healthcare