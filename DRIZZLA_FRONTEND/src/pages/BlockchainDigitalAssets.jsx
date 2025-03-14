import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { BlockchainDigitalAssetsData } from '../datas/Services'

const BlockchainDigitalAssets = () => {
  return (
    <div className="w-full flex-center">
    <div className="w-10/12">
        <ServicesZigZagLayout datas={BlockchainDigitalAssetsData} />
    </div>

</div>
  )
}

export default BlockchainDigitalAssets