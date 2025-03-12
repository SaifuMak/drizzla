import React from 'react'
import { AgenticAiData } from '../datas/Services'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'

const AgenticAI = () => {
    return (
        <div className="w-full flex-center">
            <div className="w-10/12">
                <ServicesZigZagLayout datas={AgenticAiData} />
            </div>

        </div>
    )
}

export default AgenticAI