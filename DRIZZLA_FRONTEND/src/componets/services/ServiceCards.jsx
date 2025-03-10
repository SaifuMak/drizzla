import React from 'react'
import DrizilaCapabilty from '../general/DrizilaCapabilty'

const ServiceCards = ({ outerContainerClass, title, description, image, alt }) => {

    return (
        <div className={`p-6 pb-16 relative group space-y-5 transition-all duration-500 cursor-pointer rounded-xl ${outerContainerClass}  `}>
            <div className="w-[60px] h-[60px] ">
                <img src={image} alt={alt} className="object-cover w-full h-full " />
            </div>
            <h5 className="text-2xl font-semibold min-h-20 bor ">{title}</h5>
            <p className=" font-extralight text-lg-custom">{description}</p>
            <DrizilaCapabilty customStyle=' text-base  translate-y-3 opacity-0  group-hover:translate-y-0 group-hover:opacity-100 bottom-5' />
        </div>
    )
}

export default ServiceCards