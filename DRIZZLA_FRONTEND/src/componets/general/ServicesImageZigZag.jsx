import React from 'react'
import useGsapFadeIn from '../../customHooks/useGsapFadeIn'


const ServicesImageZigZag = ({ data, index }) => {

    const imageCardRef = useGsapFadeIn(0, { initialPosition: 50, duration: 1, start: "top 70%" })

    return (
        <div ref={imageCardRef} className={` hidden-text  bg-slate-900    2xl:w-[540px] 2xl:h-[450px] xl:w-[450px] xl:h-[400px] lg:w-[380px] lg:h-[350px] md:w-[320px] md:h-[280px]  w-full     rounded-3xl ${index % 2 !== 0 ? "md:order-1 md:mr-10  lg:mr-16" : "md:order-2 md:ml-10 lg:ml-16"}`}>
            <img src={data.image} alt={data.alt} className="z-0 object-cover w-full h-full max-md:object-cover rounded-3xl" />
        </div>

    )
}

export default ServicesImageZigZag