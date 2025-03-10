import React from 'react'
import DrizilaCapabilty from '../general/DrizilaCapabilty'


const ServiceImgCards = ({ outerContainerClass, title, description }) => {
    return (
        <div className={`relative flex flex-col cursor-pointer items-center w-1/2 pb-20  transition-all duration-500 p-7 rounded-xl group ${outerContainerClass}`}>
            <div className=" w-full h-[400px]">
                <img src="/Images/data-analytics-presentation.png" alt="data-analytics-presentation" className="object-contain w-full h-full " />
            </div>
            <h4 className="mt-8 text-3xl font-semibold">{title}</h4>
            <p className="px-5 mt-6 font-light leading-relaxed text-center text-lg-custom ">{description}</p>
            <DrizilaCapabilty customStyle=' text-base translate-y-5 opacity-0  group-hover:translate-y-0 group-hover:opacity-100 bottom-5' />
        </div>

    )
}

export default ServiceImgCards