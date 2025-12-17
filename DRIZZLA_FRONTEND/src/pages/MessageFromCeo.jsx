import React, { useEffect } from 'react'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import { SupplyLogisticsData } from '../datas/Services'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'
import Navbar from '../componets/Navbar'
import HelmetComponent from '../componets/general/HelmetComponent'
import { useLocation } from 'react-router-dom'
import useGsapFadeIn from '../customHooks/useGsapFadeIn'

const MessageFromCeo = () => {

    const location = useLocation(); // Get current route
    useEffect(() => {
        document.title = "Message From CEO | Drizzla"; // Force title change
    }, [location.pathname]); // Re-run effect when path changes

    const titleRef = useGsapFadeIn();
    const contentRef = useGsapFadeIn();
    const imageRef = useGsapFadeIn();


    return (
        <>

            <HelmetComponent
                title="Message From The CEO"
                description="Hear from our CEO about Drizzla's vision and commitment to innovation in AI solutions."
            />

            <div className="flex-col w-full flex-center">
                <Navbar />
                <div className="text-white 2xl:w-9/12 max-sm:mt-3 max-sm:px-3 md:w-11/12">
                <h1 ref={titleRef} className="mb-16 text-3xl font-semibold text-center lg:text-4xl 2xl:text-5xl ">Message From The CEO</h1>

                    <div className="flex mx-auto max-md:flex-col max-md:w-11/12 ">
                        <div className="md:w-1/3 md:pr-10 xl:pr-16">
                            <img ref={imageRef} src="/Images/drizla-ceo.jpg" alt="CEO" className="w-full rounded-lg md:h-auto" />
                        </div>
                        <div ref={contentRef} className="leading-8 max-md:mt-8 max-md:text-center md:w-2/3 xl:leading-9 lg:text-lg 2xl:leading-10 2xl:text-xl">
                            <p className="">
                                At Drizzla, we see a persistent gap between technological promise and real-world results.
                                Our vision is to close that gap, transforming enterprises by ensuring every digital initiative delivers a verifiable business outcome.
                                We are driven by the purpose of moving our clients beyond technology hype to achieving tangible competitive advantages through intelligent, actionable solutions.
                                Our mission is to serve as your Outcome-as-a-Service (OaaS) partner, delivering trusted, intelligent solutions built on robust data governance and emerging technologies. Crucially, we believe true success is built on mutual respect and unwavering commitment.
                                A trusted and committed relationship with our customers, our dedicated employees, and our strategic partners is the foundation of everything we build. We don't just innovate;
                                we guarantee impact. We are ready to accelerate your transformation and code the future, today.
                            </p>
                            <p className="mt-3 font-bold 2xl:mt-5">- Sunath Kolazhi, CEO of Drizzla</p>
                        </div>
                    </div>


                </div>
                <Footer />
                {/* <div className=" bg-red-200  absolute h-[400px]  inset-0 "></div> */}
            </div>

        </>

    )
}

export default MessageFromCeo