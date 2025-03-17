import React from 'react'
import { Link } from 'react-router-dom'
import { CgArrowLongRight } from "react-icons/cg";



const ServicesZigZagLayout = ({ datas }) => {
    
    return (
        <div className="flex justify-center">
            <div className="my-2 ">
                {datas?.map((data, index) => (
                    <div
                        key={index}
                        className="flex items-center my-16 text-white max-md:my-10 bor"
                    >

                        <div className={` bor bg-slate-900    rounded-3xl ${index % 2 !== 0 ? "md:order-1 mr-16" : "md:order-2 ml-16"}`}>
                            <div className="2xl:w-[600px] 2xl:h-[500px]  ">
                                <img src={data.image} alt={data.alt} className="object-cover w-full h-full max-md:object-cover rounded-3xl" />
                            </div>
                        </div>

                        {/* Reverse Order for Odd Index */}
                        <div
                            className={`flex flex-col  w-full h-full   justify-center bor   rounded-2xl ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}
                        >
                            <h3 className="text-xl md:text-3xl max-md:text-center lg:text-4xl 2xl:text-5xl 2xl:w-11/12 ">{data.title}</h3>
                            <p className='mt-3 font-light tracking-wider max-md:text-center lg:mt-5 md:mt-2 max-lg:text-sm 2xl:text-lg-custom'>{data.description}</p>
                            {data?.link && <Link to={data.link}><p className="flex items-center mt-4 ">{data.linkText} <span className="ml-1 text-3xl text-white/80 "><CgArrowLongRight/></span></p></Link>}
                            {data?.features && <p className="mt-5 ">{data.features.title}</p>}
                            {data?.features && 
                                <ul className="ml-4 space-y-2 text-left list-disc list-inside md:list-outside">
                                    {data.features.benefits.map((text, index) => (
                                        <li key={index} className="">{text}</li>

                                    ))}
                                </ul>
                            }

                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServicesZigZagLayout