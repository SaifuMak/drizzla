import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { AiStrategyGovernanceData } from '../datas/Services'


const AiStrategyGovernance = () => {
    return (
        <div className="w-full flex-center">
            <div className="w-10/12">
                <ServicesZigZagLayout datas={AiStrategyGovernanceData} />
            </div>

        </div>
    )
}

export default AiStrategyGovernance