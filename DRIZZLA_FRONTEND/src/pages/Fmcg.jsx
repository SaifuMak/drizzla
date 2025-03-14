import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { FMCGData } from '../datas/Services'



const Fmcg = () => {
    return (
        <div className="w-full flex-center">
            <div className="w-10/12">
                <ServicesZigZagLayout datas={FMCGData} />
            </div>
        </div>
    )
}

export default Fmcg