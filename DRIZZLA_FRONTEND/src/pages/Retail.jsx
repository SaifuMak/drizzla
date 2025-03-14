import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { RetailData } from '../datas/Services'


const Retail = () => {
    return (
        <div className="w-full flex-center">
            <div className="w-10/12">
                <ServicesZigZagLayout datas={RetailData} />
            </div>
        </div>
    )
}

export default Retail