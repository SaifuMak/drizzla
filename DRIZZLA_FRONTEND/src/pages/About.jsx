import React from 'react'
import ZigZagLayout from '../componets/general/ZigZagLayout'
import { Data } from '../datas/About'



const About = () => {




    return (
        <div className="flex flex-col items-center justify-center ">
            <div className="w-11/12 my-32 xl:w-10/12 ">

                {/* banner introduction  */}
                <div className="flex-col w-full h-[300px] text-white bg-custom-purple flex-center ">
                    <h1 className="text-4xl font-semibold text-center md:text-5xl lg:text-6xl lg:px-28 xl:text-7xl 2xl:text-8xl">Trusted, Intelligent, Sustainable</h1>
                    <p className="mt-2 text-center max-md:font-light md:w-3/4 2xl:w-2/4 2xl:text-lg-custom">Drizzla is on a mission to pioneer the digital future where our trusted, intelligent and sustainable solutions empower businesses to inspire and lead in the new digital age</p>
                </div>


                <div className="flex mt-10 md:space-x-6 max-md:space-y-6 max-md:flex-col md:p-6 lg:p-16 ">

                    <div className="md:w-1/2 rounded-2xl">
                        <img src="/Images/about/boy-observing-buildings.png" alt="" className="object-cover w-full h-full " />
                    </div>


                    <div className="flex flex-col justify-center text-white md:items-center md:w-1/2 p-7 lg:p-10 xl:p-16 2xl:p-24 rounded-2xl bg-custom-green">

                        <h2 className="text-2xl leading-tight 2xl:text-5xl xl:text-4xl ">Building Tomorrow, Empowering Today</h2>
                        <div className="mt-4 space-y-2 lg:space-y-4">
                            <p className="lg:text-lg xl:text-xl">We started Drizzla for two reasons:</p>


                            {/* List of Reasons */}
                            <ul className="pl-5 space-y-5 text-left list-disc list-inside md:list-outside">
                                <li className="font-light xl:text-lg ">
                                    To empower exceptional talent to create transformative solutions that fuel our client’s success.
                                </li>
                                <li className="font-light xl:text-lg ">
                                    To build the future by anticipating business needs, igniting demand, and actively shaping the markets of tomorrow.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>



                <ZigZagLayout datas={Data} />

            </div>
        </div>
    )
}

export default About