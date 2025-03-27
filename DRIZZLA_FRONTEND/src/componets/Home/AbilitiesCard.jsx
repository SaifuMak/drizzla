import React from 'react'
import useGsapFadeIn from '../../customHooks/useGsapFadeIn'
import useIsMobile from '../../customHooks/useIsMobile';


const AbilitiesCard = ({ data }) => {
    const isMobile = useIsMobile()

    const AbilitiesCarddRef = useGsapFadeIn(data.index, { delay: 0 });


    return (
        <div ref={AbilitiesCarddRef} key={data.index} className="space-y-2 md:space-y-4 ">
            <div className="flex items-center justify-center font-light leading-none rounded-full lg:text-xl size-6 lg:size-10 bg-gradient-to-b from-purple-400 to-sky-400 ">
                <span className="mt-0.5">{data.index}</span>
            </div>
            <h5 className="text-lg font-semibold tracking-wide lg:text-xl ">{data.title}</h5>
            <p className="leading-snug font-extralight xl:text-lg-custom ">{data.description}</p>
        </div>
    )
}

export default AbilitiesCard