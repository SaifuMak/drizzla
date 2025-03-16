import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { AviationData } from '../datas/Services'



const Aviation = () => {
  return (
    <div className="w-full flex-center">
    <div className="w-10/12">
        <ServicesZigZagLayout datas={AviationData} />
    </div>
</div>
  )
}

export default Aviation