import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { RealEstateData } from '../datas/Services'


const RealEstate = () => {
  return (
    <div className="w-full flex-center">
    <div className="w-10/12">
        <ServicesZigZagLayout datas={RealEstateData} />
    </div>
</div>
  )
}

export default RealEstate