import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { DataStrategyGovernanceData } from '../datas/Services'


const DataStrategyGovernance = () => {
    return (
        <div className="w-full flex-center">
            <div className="w-10/12">
                <ServicesZigZagLayout datas={DataStrategyGovernanceData} />
            </div>

        </div>
    )
}

export default DataStrategyGovernance