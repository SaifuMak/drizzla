import React from 'react'
import { Link } from 'react-router-dom'
import { CgArrowLongRight } from "react-icons/cg";


const ServicesZigZagLayout = ({ datas }) => {
    
    return (
        <div className="flex justify-center  ">
            <div className="my-2 ">
                {datas?.map((data, index) => (
                    <div
                        key={index}
                        className="flex max-md:flex-col  items-center my-16 text-white max-md:my-10"
                    >

                        <div className={`  bg-slate-900  2xl:w-[540px] 2xl:h-[450px] xl:w-[450px] xl:h-[400px] lg:w-[380px] lg:h-[350px] md:w-[320px] md:h-[280px]  w-full     rounded-3xl ${index % 2 !== 0 ? "md:order-1 md:mr-10  lg:mr-16" : "md:order-2 md:ml-10 lg:ml-16"}`}>
                                <img src={data.image} alt={data.alt} className="object-cover w-full h-full max-md:object-cover rounded-3xl" />
                        </div>

                        {/* Reverse Order for Odd Index */}
                        <div
                            className={`flex-1 flex-col  max-sm:mt-4 w-full h-full   justify-center    rounded-2xl ${index % 2 !== 0 ? "md:order-2" : "md:order-1"}`}
                        >
                            <h3 className="text-xl font-semibold  max-sm:ml-2 xl:text-4xl   2xl:w-10/12 ">{data.title}</h3>
                            <p className='xl:mt-3 mt-1   font-light 2xl:tracking-wider max-sm:px-2 sm:text-left lg:mt-5 md:mt-2 max-lg:text-sm 2xl:pr-10 '>{data.description}</p>
                            {data?.link && <Link to={data.link}><p className="flex items-center mt-4  max-xl:text-base ">{data.linkText} <span className="ml-1 2xl:text-3xl text-2xl text-white/80 "><CgArrowLongRight/></span></p></Link>}
                            {data?.features && <p className="xl:mt-5 mt-3 max-sm:ml-2 tracking-wide font-semibold xl:text-lg-custom ">{data.features.title}:</p>}
                            {data?.features && 
                                <ul className="lg:ml-6 md:ml-4 ml-2 space-y-0 mt-2  font-extralight text-left list-disc list-inside md:list-outside">
                                    {data.features.benefits.map((text, index) => (
                                        <li key={index} className=" max-lg:text-sm">{text}</li>

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