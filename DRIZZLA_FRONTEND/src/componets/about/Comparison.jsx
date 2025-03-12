import React from 'react'

const Comparison = ({ data }) => {
    return (
        <div className="flex-col items-center w-full h-full space-y-4 md:space-y-5 xl:space-y-10 flex-center ">
            <div className="rounded-full w-28 h-28 2xl:w-48 2xl:h-48 xl:w-40 xl:h-40 md:w-32 md:h-32 lg:w-36 lg:h-36">
                <img src={data.image} alt={data.alt} className="object-cover w-full h-full" />
            </div>
            <h3 className="2xl:text-[43px] max-md:hidden xl:text-4xl lg:text-3xl text-3xl font-semibold ">{data.title}</h3>
            <h3 className="2xl:text-[43px]  xl:text-4xl lg:text-3xl text-3xl font-semibold  md:hidden ">{data.mobileTitle}</h3>

            <div className="flex-col xl:text-2xl lg:text-xl 2xl:text-[27px] max-md:space-y-2  xl:space-y-2 font-light flex-center max-md:text-lg ">
                {data?.description?.map((features, index) => (
                    <p key={index} className="">{features}</p>
                ))}
            </div>
        </div>
    )
}

export default Comparison