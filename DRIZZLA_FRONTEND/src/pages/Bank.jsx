import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { BankingData } from '../datas/Services'


const Bank = () => {
    return (
        <div className="w-full flex-center">
            <div className="w-10/12">
                <ServicesZigZagLayout datas={BankingData} />
            </div>
        </div>
    )
}

export default Bank