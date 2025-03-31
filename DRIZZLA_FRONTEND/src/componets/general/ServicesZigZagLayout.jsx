import React from 'react'
import { Link } from 'react-router-dom'
import { CgArrowLongRight } from "react-icons/cg";
import useGsapFadeIn from '../../customHooks/useGsapFadeIn';
import useGsapOpacity from '../../customHooks/useGsapOpacity';

const ServicesZigZagLayout = ({ datas }) => {

    return (
        <div className="flex justify-center ">
            <div className="my-2 xl:space-y-24 2xl:space-y-32">
                {datas?.map((data, index) => {
                    const contentCardRef = useGsapFadeIn(0, { initialPosition: 50, duration: 1, start: "top 65%" })
                    // const imageCardRef = useGsapFadeIn(0, { initialPosition: 50, duration: 1, start: "top 70%" })
                    const imageCardRef = useGsapOpacity()




                    return (
                        <div
                            key={index}
                            className="flex items-center my-16 text-white max-md:flex-col max-md:my-10"
                        >

                            <div ref={imageCardRef} className={` hidden-text  bg-slate-900    2xl:w-[540px] 2xl:h-[450px] xl:w-[450px] xl:h-[400px] lg:w-[380px] lg:h-[350px] md:w-[320px] md:h-[280px]  w-full     rounded-3xl ${index % 2 !== 0 ? "md:order-1 md:mr-10  lg:mr-16" : "md:order-2 md:ml-10 lg:ml-16"}`}>
                                <img src={data.image} alt={data.alt} className="object-cover  z-0 w-full h-full max-md:object-cover rounded-3xl" />
                            </div>

                            {/* Reverse Order for Odd Index */}
                            <div
                                ref={contentCardRef}
                                className={`hidden-text  flex-1 flex-col max-sm:mt-4  w-full h-full  justify-center     rounded-2xl ${index % 2 !== 0 ? "md:order-2 lg:pl-12  2xl:pl-32 xl:pl-12" : "md:order-1"}`}
                            >
                                <h3 className="text-xl font-semibold md:text-2xl max-sm:ml-2 lg:text-3xl xl:text-4xl 2xl:w-10/12 ">{data.title}</h3>
                                <p className='mt-2 font-light xl:mt-3 max-sm:font-extralight 2xl:tracking-wider max-sm:pl-2 sm:text-left lg:mt-5 md:mt-2 lg:w-10/12 xl:w-11/12 '>{data.description}</p>
                                {data?.link && <Link to={data.link}><p className="flex items-center mt-4 cursor-default max-sm:ml-2 max-xl:text-lg-custom"><span className="flex items-center cursor-pointer group text-white/90 hover:text-white ">{data.linkText}<CgArrowLongRight className='ml-1 text-2xl transition-all duration-500 ease-in-out group-hover:translate-x-2 2xl:text-3xl group-hover:text-white text-white/80' /></span></p></Link>}
                                {data?.features && <p className="mt-3 font-semibold tracking-wide xl:mt-5 max-sm:ml-2 xl:text-lg-custom ">{data.features.title}:</p>}
                                {data?.features &&
                                    <ul className="mt-2 ml-6 space-y-1 text-left text-white list-disc list-outside lg:ml-6 md:ml-4 font-extralight">
                                        {data.features.benefits.map((text, index) => (
                                            <li key={index} className=" max-lg:text-sm max-sm:font-extralight">{text}</li>

                                        ))}
                                    </ul>
                                }

                            </div>

                        </div>)
                })}
            </div>
        </div>
    )
}

export default ServicesZigZagLayout