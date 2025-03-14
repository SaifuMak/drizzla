import React from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { DataAnalyticsData } from '../datas/Services'


const DataAnalytics = () => {
  return (
    <div className="w-full flex-center">
    <div className="w-10/12">
        <ServicesZigZagLayout datas={DataAnalyticsData} />
    </div>

</div>
  )
}

export default DataAnalytics