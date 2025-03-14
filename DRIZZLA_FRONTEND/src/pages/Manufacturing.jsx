import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { ManufacturingData } from '../datas/Services'



const Manufacturing = () => {
  return (
    <div className="w-full flex-center">
    <div className="w-10/12">
        <ServicesZigZagLayout datas={ManufacturingData} />
    </div>
</div>
  )
}

export default Manufacturing