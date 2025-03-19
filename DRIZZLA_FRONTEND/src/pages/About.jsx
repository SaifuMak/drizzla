import React from 'react'
import ZigZagLayout from '../componets/general/ZigZagLayout'
import { Data, Values } from '../datas/About'
import Comparison from '../componets/about/Comparison'
import Footer from '../componets/Footer'
import AnimatedVideo from '../componets/AnimatedVideo'

const About = () => {


    const BiggiesData = {
        image: '/Images/about/biggies-logo.png',
        alt: 'biggies-logo',
        title: 'Biggies',
        mobileTitle: 'Big banks',
        description: [
            'Multidisciplinary Approach',
            'Extended Development Cycle',
            'Reduced Cost-Effectiveness'
        ]
    }


    const DrizzllaData = {
        image: '/Images/about/drizzla.png',
        alt: 'drizzla-logo',
        title: 'Drizzla',
        mobileTitle: 'Drizzla',
        description: [
            'Specialised Expertise ',
            'Faster Go To Market',
            'Lower Total Cost of Ownership'
        ]
    }



    return (
        <div className="flex flex-col items-center justify-center ">
            <AnimatedVideo/>
            <div className="w-11/12 md:px-6 xl:px-8 xl:w-10/12 ">

                {/* banner introduction  */}
                <div className="flex-col w-full  h-[390px]  text-white bg-custom-purple flex-center ">

                    <h1 className="text-4xl font-semibold text-center md:text-5xl lg:text-6xl lg:px-28 xl:text-7xl 2xl:text-8xl">Trusted, Intelligent, Sustainable</h1>
                    <p className="mt-2 text-center md:w-3/4 2xl:w-7/12 max-md:font-light 2xl:text-lg-custom">Drizzla is on a mission to pioneer the digital future where our trusted, intelligent and sustainable solutions empower businesses to inspire and lead in the new digital age</p>

                </div>


                <div className="flex mt-10 md:space-x-8 max-md:space-y-6 max-md:flex-col ">

                    <div className=" md:w-1/2 rounded-3xl">
                        <img src="/Images/about/boy-looking-at-city.jpg" alt="" className="object-cover w-full h-auto rounded-3xl" />
                    </div>


                    <div className="flex flex-col justify-center text-white md:items-center md:w-1/2 p-7 lg:p-10 xl:p-16 2xl:p-24 rounded-2xl bg-custom-green">

                        <div className="mt-4 space-y-2 lg:space-y-4">
                            <h2 className="text-2xl leading-tight 2xl:text-5xl xl:text-4xl ">Building Tomorrow, Empowering Today</h2>

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



                <div className="flex-col w-full py-10 mt-16 text-white md:py-12 lg:py-16 xl:py-32 2xl:py-36 rounded-3xl md:flex-center bg-custom-teal ">

                    <h2 className="2xl:text-[56px] xl:text-5xl lg:text-4xl text-4xl font-semibold text-center ">Why us? </h2>

                    <div className="items-center justify-center w-full mt-6 md:flex md:mt-12 lg:mt-24 lg:px-20 xl:px-20 max-md:space-y-5 ">
                        {BiggiesData && <Comparison data={BiggiesData} />}
                        <div className="md:flex flex-col 2xl:h-[415px] xl:h-[390px] lg:h-[300px] md:h-[270px] justify-between  ">
                            <div className="flex-1 flex-center ">
                                <p className="xl:text-[52px] text-4xl lg:text-4xl ">vs.</p>
                            </div>
                            <div className="flex-1 pt-5 max-md:hidden flex-center ">
                                <div className=" h-full   w-0.5 bg-white/80 "></div>
                            </div>
                        </div>
                        {DrizzllaData && <Comparison data={DrizzllaData} />}
                    </div>

                </div>


                <ZigZagLayout datas={Data} />

                <div className="w-full mt-5 text-white md:mt-10 ">
                    <div className="flex-col flex-center ">
                        <h2 className="text-3xl md:text-4xl xl:text-5xl ">Our Values</h2>
                        <p className="font-light tracking-wide text-center max-lg:mt-3 md:text-xl ">These are our compass points, defining our path and purpose.</p>
                    </div>
                    <div className="grid gap-6 mt-10 md:mt-16 md:grid-cols-2 lg:grid-cols-3 2xl:gap-12 xl:gap-8 md:gap-6 ">
                        {Values?.map((data, index) => (
                            <div key={index} className="flex-col py-20 text-center md:py-10 xl:py-16 2xl:py-20 rounded-3xl bg-custom-blue ">
                                <h3 className="2xl:text-[35px] xl:text-[30px] md:text-xl text-3xl font-semibold ">{data.title}</h3>
                                <p className="mt-2 font-light tracking-wide xl:text-lg-custom xl:mt-3 2xl:mt-4 md:px-4 2xl:px-10 xl:px-8 2xl:text-xl ">{data.description}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="flex mt-5 md:mt-10 md:space-x-8 max-md:space-y-6 max-md:flex-col-reverse ">

                    <div className="flex flex-col justify-center max-md:mt-5 max-md:text-center max-md:items-center p-0 xl:pl-12 md:pl-6 pr-3 max-md:py-20 2xl:pl-20 text-white  md:w-1/2 rounded-3xl bg-[#280443] ">

                        <div className="mt-4 space-y-2 xl:space-y-3">
                            <h2 className="2xl:text-[45px] leading-tight  xl:text-4xl md:text-4xl text-2xl ">Join the Team</h2>

                            <p className="font-light xl:text-lg 2xl:text-xl max-md:px-1">Build the future with us and join our growing team.</p>

                        </div>
                        <button className="2xl:h-[64px] 2xl:w-[220px] xl:h-[52px] xl:w-[180px] md:h-[47px] shrink-0 md:w-[150px] h-[40px]  w-[130px] mt-6 bg-white md:font-semibold rounded-full xl:text-lg 2xl:text-xl  text-[#055090] ">Apply Now </button>
                    </div>

                    <div className=" md:w-1/2 rounded-3xl">

                        <img src="/Images/about/three-people-laughing.png" alt="" className="object-cover w-full h-auto rounded-3xl " />
                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default About