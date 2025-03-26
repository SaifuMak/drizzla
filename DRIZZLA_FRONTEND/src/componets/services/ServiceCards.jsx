import React from 'react'
import DrizilaCapabilty from '../general/DrizilaCapabilty'
import { Link } from 'react-router-dom'
import useGsapFadeIn from '../../customHooks/useGsapFadeIn'

const ServiceCards = ({index, url, outerContainerClass, title, description, image, alt }) => {
    const ServiceCardRef = useGsapFadeIn(index);

    return (
        <Link to={url} ref={ServiceCardRef} className="block ">

        <div className={`2xl:p-6 p-4 pb-16 h-full   2xl:pb-16 relative group space-y-5 transition-all duration-500 cursor-pointer rounded-xl ${outerContainerClass}  `}>
            <div className="2xl:size-[60px] lg:size-[50px] size-[40px] ">
                <img src={image} alt={alt} className="object-cover w-full h-full " />
            </div>
            <h5 className="text-xl font-semibold lg:pr-20 xl:pr-0 2xl:text-2xl xl:min-h-20">{title}</h5>
            <p className=" font-extralight 2xl:text-lg-custom">{description}</p>
            <DrizilaCapabilty customStyle='text-sm  xl:pr-5 translate-y-3 opacity-0 left-5  group-hover:translate-y-0 group-hover:opacity-100  bottom-2 2xl:bottom-5' />
        </div>
        </Link>

    )
}

export default ServiceCards