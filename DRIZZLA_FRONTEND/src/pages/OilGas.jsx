import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { OilGasData } from '../datas/Services'


const OilGas = () => {
  return (
    <div className="w-full flex-center">
    <div className="w-10/12">
        <ServicesZigZagLayout datas={OilGasData} />
    </div>
</div>
  )
}

export default OilGas