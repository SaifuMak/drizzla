import React from 'react'
import useGsapFadeIn from '../../customHooks/useGsapFadeIn';

const ValueCards = ({ data, index }) => {
    const ValueCardRef = useGsapFadeIn(index);

    return (
        <div ref={ValueCardRef} className="flex-col py-20 text-center md:py-10 xl:py-16 2xl:py-20 rounded-3xl bg-custom-blue ">
            <h3 className="2xl:text-[35px] xl:text-[30px] md:text-xl text-3xl font-semibold ">{data.title}</h3>
            <p className="px-6 mt-2 font-light tracking-wide xl:text-lg-custom xl:mt-3 2xl:mt-4 md:px-4 2xl:px-10 xl:px-8 2xl:text-xl ">{data.description}</p>
        </div>
    )
}

export default ValueCards