import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { GovernmentData } from '../datas/Services'

const Government = () => {
    return (
        <div className="w-full flex-center">
            <div className="w-10/12">
                <ServicesZigZagLayout datas={GovernmentData} />
            </div>
        </div>
    )
}

export default Government