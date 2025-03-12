import React from 'react'

const ZigZagLayout = ({ datas }) => {
    return (
        <div className="flex justify-center">
            <div className="my-2">
                {datas?.map((data, index) => (
                    <div
                        key={index}
                        className="grid items-center gap-5 my-10 text-white md:gap-10 max-md:my-10 md:grid-cols-2 "
                    >

                        <div className={`w-full md:h-full max-md:h-[330px] rounded-2xl ${index % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
                            <img src={data.image} alt={data.alt} className="object-cover w-full h-full max-md:object-cover rounded-2xl" />
                        </div>


                         {/* Reverse Order for Odd Index */}
                         <div
                            className={`flex flex-col w-full h-full  justify-center  max-sm:py-10 max-sm:px-5 md:p-6 lg:p-12  xl:p-16 2xl:p-24 rounded-2xl ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}
                            style={{ backgroundColor: data.cardColor }}
                        >
                            <h3 className="text-xl md:text-3xl max-md:text-center lg:text-4xl 2xl:text-5xl 2xl:w-11/12 ">{data.title}</h3>
                            <p className='mt-3 font-light tracking-wider max-md:text-center lg:mt-5 md:mt-2 max-lg:text-sm 2xl:w-10/12 2xl:text-lg-custom'>{data.description}</p>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    );

}

export default ZigZagLayout