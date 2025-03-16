import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { SupplyLogisticsData } from '../datas/Services'


const SuppyChainLogistics = () => {
    return (
        <div className="w-full flex-center">
            <div className="w-10/12">
                <ServicesZigZagLayout datas={SupplyLogisticsData} />
            </div>
        </div>
    )
}

export default SuppyChainLogistics