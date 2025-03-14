import React from 'react'
import { DigitalAssetsData } from '../datas/Services'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'

const DigitalAssets = () => {
  return (
    <div className="w-full flex-center">
    <div className="w-10/12">
        <ServicesZigZagLayout datas={DigitalAssetsData} />
    </div>

</div>
  )
}

export default DigitalAssets