import React, { useRef } from 'react'
import ZigZagLayout from '../componets/general/ZigZagLayout'
import { Data, Values } from '../datas/About'
import Comparison from '../componets/about/Comparison'
import Footer from '../componets/Footer'
import AnimatedVideo from '../componets/AnimatedVideo'
import { Link } from 'react-router-dom'
import Navbar from '../componets/Navbar'
import { BsDash } from "react-icons/bs";
import useGsapFadeIn from '../customHooks/useGsapFadeIn'
import useGsapLeftFadeIn from '../customHooks/useGsapLeftFadeIn'
import useGsapRightFadeIn from '../customHooks/useGsapRightFadeIn'
import Headline from '../componets/general/Headline'
import AnimatedDescription from '../componets/general/AnimatedDescription'
import useGsapOpacity from '../customHooks/useGsapOpacity'
import ValueCards from '../componets/about/ValueCards'
import OpacityAnimatedDescription from '../componets/general/OpacityAnimatedDescription'


const ListElement = ({ text }) => {
    // const textRef = useGsapOpacity({start:"top 65%"})


    return (
        <li  className="relative pl-4 font-light xl:text-lg">
            <span className="absolute left-0 ">-</span>
            {text}
        </li>
    )
}


const About = () => {


    const BiggiesData = {
        image: '/Images/about/biggies-logo.png',
        alt: 'biggies-logo',
        title: 'Biggies',
        mobileTitle: 'Biggies',
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

    const bannerContentRef = useGsapFadeIn(0, { initialPosition: 50, duration: 1.5 })
    // const boyImageCardRef = useGsapLeftFadeIn({ duration: 2, start: "top 75%" })
    // const intialRightcardRef = useGsapRightFadeIn({ duration: 2, start: "top 75%" })
    const dividerRef = useGsapOpacity()
    const TeamImageCardRef = useGsapRightFadeIn({ duration: 1, start: "top 65%" })
    const TeamCardRef = useGsapLeftFadeIn({ duration: 1, start: "top 65%" })
    const joinTeamButtonRef = useGsapOpacity()


    const boyImageCardRef = useGsapFadeIn(0, { initialPosition: 50, duration: 1, start: "top 85%" })
    const intialRightcardRef = useGsapFadeIn(0, { initialPosition: 50, duration: 1, start: "top 85%" })
    const intialRightCardPointsRef = useGsapFadeIn(0,{start:"top 68%"})







    return (
        <div className="flex flex-col items-center justify-center ">
            {/* <AnimatedVideo/> */}
            <Navbar />
            <div className="w-11/12 mt-10 md:px-6 xl:px-8 2xl:w-10/12 ">

                {/* banner introduction  */}
                <div className="flex-col  flex  w-full justify-center  items-center   h-[390px] max-sm:p-3   text-white bg-custom-purple  ">
                    <div ref={bannerContentRef} className="flex flex-col items-center justify-center text-center ">
                        <h1 className="text-[22px] font-semibold text-center md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-nowrap">Trusted, Intelligent, Sustainable</h1>
                        <p className="mt-2 text-center max-sm:text-[14px] max-sm:px-3 md:w-3/4 lg:w-7/12 max-md:font-light xl:text-lg-custom">Drizzla is on a mission to pioneer the digital future where our trusted, intelligent and sustainable solutions empower businesses to inspire and lead in the new digital age</p>
                    </div>
                </div>


                <div className="flex mt-10 md:space-x-8 max-md:space-y-6 max-md:flex-col ">

                    <div ref={boyImageCardRef} className=" md:w-1/2 rounded-3xl hidden-text">
                        <img src="/Images/about/boy-looking-at-city.jpg" alt="" className="object-cover w-full h-auto rounded-3xl " />
                    </div>


                    <div ref={intialRightcardRef} className="flex flex-col justify-center text-white md:items-center md:w-1/2 p-7 lg:p-10 xl:p-16 2xl:p-24 rounded-2xl bg-custom-green hidden-text">

                        <div className="mt-4 space-y-2 lg:space-y-4">
                            {/* <h2 className="text-2xl leading-tight 2xl:text-5xl xl:text-4xl ">Building Tomorrow, Empowering Today</h2> */}
                            <Headline text="Building Tomorrow, Empowering Today" className="text-2xl leading-tight 2xl:text-5xl xl:text-4xl" />


                            {/* <p className="lg:text-lg xl:text-xl">We started Drizzla  </p> */}
                            <AnimatedDescription text="We started Drizzla" className="lg:text-lg xl:text-xl" />



                            {/* List of Reasons */}
                            <ul ref={intialRightCardPointsRef} className="pl-5 space-y-5 text-left list-none">
                                <ListElement text='To pioneer the digital future where Drizzla’s trusted, intelligent and sustainable solutions empower businesses to inspire and lead in the new digital age' />
                                <ListElement text='To build the future by anticipating future needs, igniting demand, and actively shaping the markets of tomorrow' />
                                <ListElement text='To empower exceptional talent to create transformative solutions that fuel customer success' />
                            </ul>
                        </div>

                    </div>
                </div>



                <div className="flex-col w-full py-10 mt-16 text-white md:py-12 lg:py-16 xl:py-32 2xl:py-36 rounded-3xl md:flex-center bg-custom-teal ">

                    <Headline text="Why us?" className="2xl:text-[56px] xl:text-5xl lg:text-4xl text-4xl font-semibold text-center" />

                    <div className="items-center justify-center w-full mt-6 md:flex md:mt-12 lg:mt-24 lg:px-20 xl:px-20 max-md:space-y-5 ">
                        {BiggiesData && <Comparison data={BiggiesData} />}
                        <div className="md:flex flex-col 2xl:h-[415px] xl:h-[390px] lg:h-[300px] md:h-[270px] justify-between  ">
                            <div className="flex-1 flex-center ">
                                {/* <p className="xl:text-[52px] text-4xl lg:text-4xl ">vs.</p> */}
                                <AnimatedDescription text="vs." className="xl:text-[52px] text-4xl lg:text-4xl" />
                            </div>
                            <div ref={dividerRef} className="flex-1 pt-5 max-md:hidden flex-center ">
                                <div className=" h-full   w-0.5 bg-white/80 "></div>
                            </div>
                        </div>
                        {DrizzllaData && <Comparison data={DrizzllaData} />}
                    </div>
                </div>


                <ZigZagLayout datas={Data} />

                <div className="w-full mt-5 text-white md:mt-10 ">
                    <div className="flex-col flex-center ">
                        {/* <h2 className="text-3xl md:text-4xl xl:text-5xl ">Our Values</h2> */}
                        <Headline text="Our Values" className="text-3xl md:text-4xl xl:text-5xl" />

                        {/* <p className="font-light tracking-wide text-center max-lg:mt-3 md:text-xl ">These are our compass points, defining our path and purpose.</p> */}
                        <AnimatedDescription text="These are our compass points, defining our path and purpose." className="font-light tracking-wide text-center max-lg:mt-3 md:text-xl" />

                    </div>
                    <div className="grid gap-6 mt-10 md:mt-16 md:grid-cols-2 lg:grid-cols-3 2xl:gap-12 xl:gap-8 md:gap-6 ">
                        {Values?.map((data, index) => (
                            <ValueCards data={data} index={index} />
                            // <div key={index} className="flex-col py-20 text-center md:py-10 xl:py-16 2xl:py-20 rounded-3xl bg-custom-blue ">
                            //     <h3 className="2xl:text-[35px] xl:text-[30px] md:text-xl text-3xl font-semibold ">{data.title}</h3>
                            //     <p className="px-6 mt-2 font-light tracking-wide xl:text-lg-custom xl:mt-3 2xl:mt-4 md:px-4 2xl:px-10 xl:px-8 2xl:text-xl ">{data.description}</p>
                            // </div>
                        ))}
                    </div>
                </div>


                <div className="flex mt-5 md:mt-10 md:space-x-8 max-md:space-y-6 max-md:flex-col-reverse ">

                    <div ref={TeamCardRef} className="flex flex-col justify-center max-md:mt-5 max-md:text-center max-md:items-center p-0 xl:pl-12 md:pl-6 pr-3 max-md:py-20 2xl:pl-20 text-white  md:w-1/2 rounded-3xl bg-[#280443] ">

                        <div className="mt-4 space-y-2 xl:space-y-3">
                            {/* <h2 className="2xl:text-[45px] leading-tight  xl:text-4xl md:text-4xl text-2xl ">Join the Team</h2> */}
                            <Headline text="Join the Team" className="2xl:text-[45px] leading-tight  xl:text-4xl md:text-4xl text-2xl" />
                            <AnimatedDescription text="Build the future with us and join our growing team." className="font-light xl:text-lg 2xl:text-xl max-md:px-1 max-sm:px-4" />


                            {/* <p className="font-light xl:text-lg 2xl:text-xl max-md:px-1 max-sm:px-4">Build the future with us and join our growing team.</p> */}

                        </div>
                        <Link to='/career'>   <button ref={joinTeamButtonRef} className="2xl:h-[64px] 2xl:w-[220px] xl:h-[52px] xl:w-[180px] md:h-[47px] shrink-0 md:w-[150px] h-[40px]  w-[130px] mt-6 bg-white md:font-semibold rounded-full xl:text-lg 2xl:text-xl  max-sm:font-normal text-[#055090] ">Apply Now </button></Link>
                    </div>


                    <div ref={TeamImageCardRef} className=" md:w-1/2 rounded-3xl">

                        <img src="/Images/about/three-people-laughing.png" alt="" className="object-cover w-full h-auto rounded-3xl " />
                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default About