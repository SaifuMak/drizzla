import React from 'react'
import { HiMiniArrowLongRight } from "react-icons/hi2";


const DrizilaCapabilty = ({customStyle}) => {
  return (
    <p className={`${customStyle}   absolute flex items-center justify-center transition-all    ease-in-out duration-700 transform`}>DISCOVER DRIZZLA'S CAPABILITY <span className="ml-1 text-xl "><HiMiniArrowLongRight /></span>
    </p>
  )
}

export default DrizilaCapabilty