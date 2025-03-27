import React from 'react'
import useGsapFadeIn from '../../customHooks/useGsapFadeIn'
import useIsMobile from '../../customHooks/useIsMobile';

const BranchCard = ({branch, index}) => {
    const isMobile = useIsMobile()

    
    const BranchCardRef = useGsapFadeIn(index);
    const BranchCardMobileRef = useGsapFadeIn(index, { delay: 0 });



    return (
        <div ref={isMobile ? BranchCardMobileRef : BranchCardRef} key={index} className=" max-md:mb-10">
            <div className="w-full 2xl:h-[300px] bg-black  overflow-hidden   rounded-xl">
                <img src={branch.image} alt={branch.image} className="object-cover w-full h-full transition-transform duration-700 ease-in-out scale-105 will-change-transform rounded-xl hover:scale-125 " />
            </div>
            <h6 className="mt-5 text-xl font-semibold text-center xl:text-2xl xl:mt-8 2xl:text-3xl ">{branch.title}</h6>
            {/* <p className="mt-3 font-light text-center max-lg:text-sm lg:px-6 xl:px-12 2xl:px-16 2xl:text-lg-custom ">{branch.description}</p> */}
            <div className="mt-2 text-center max-sm:text-sm">
                {branch.address?.map((data, index) => (
                    <p className="">{data}</p>

                ))}
            </div>
        </div>
    )
}

export default BranchCard