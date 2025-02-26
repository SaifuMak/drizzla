import React, { useRef, useEffect } from 'react'
import cubes from '../assets/Videos/cubes_video.mp4'
import logo from '../assets/Images/logoWhite.png'
import { FaArrowDownLong } from "react-icons/fa6";
import { BsArrowDown } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextVerticalReveal from '../componets/TextVerticalReveal';
import StickySection from '../componets/products/StickySection';
import { ProductsData } from '../datas/ProductsData';
import Footer from '../componets/Footer';


gsap.registerPlugin(ScrollTrigger);


const Products = () => {

    const outerVideoContainerRef = useRef(null);

    // Function to handle video hover
    const handleVideoHover = () => {
        // Animate the padding of the outer container
        gsap.to(outerVideoContainerRef.current, {
            paddingLeft: '80px',
            paddingRight: '80px',
            paddingBottom: '80px',
            duration: 0.5, // Animation duration
            ease: "power2.out", // Easing function
        });
    };

    // Function to handle video unhover
    const handleVideoUnhover = () => {
        // Animate the padding back to its original value
        gsap.to(outerVideoContainerRef.current, {
            paddingLeft: '170px',
            paddingRight: '170px',
            paddingBottom: '140px',
            duration: 0.5, // Animation duration
            ease: "power2.out", // Easing function
        });
    };

    {/* <div className="relative h-full " onMouseEnter={handleVideoHover} onMouseLeave={handleVideoUnhover}> */ }


    return (
        <>
            <div className="w-full duration-300 transform-all bor ">
                <div ref={outerVideoContainerRef} className="h-[900px] bor   " style={{ paddingLeft: '170px', paddingRight: '170px', paddingBottom: '140px', }}>

                    <div className="relative h-full " >
                        <div onMouseEnter={handleVideoHover} onMouseLeave={handleVideoUnhover} className="h-full">
                            <video
                                src={cubes}
                                className="object-fill w-full h-full "
                                loop
                                autoPlay
                                muted
                            >
                            </video>
                        </div>
                        <div className="absolute top-0 w-full bor ">
                            <div className="w-56 ">
                                <img src={logo} alt="" className="object-cover w-full h-full" />
                            </div>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/90 to-transparent ">

                        </div>
                        <div className="flex-col w-full pt-8 text-white flex-center">
                            <span className="text-2xl "><BsArrowDown /></span>
                            <span className="mt-1 tracking-wider"> Scroll to Explore </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="h-screen bor"></div> */}

            <TextVerticalReveal text='Go beyond chat.' secondText='Enterprise Autonomy' />

            {/* <div className="h-screen bor"></div> */}


            <div className="w-full bg-[#1F1F2D] flex-col justify-center items-center p-8 sm:p-10  lg:p-20 2xl:p-24">
                <div className="">
                    <h2 className="text-2xl font-semibold tracking-wide text-white lg:text-3xl ">Beyond Chat</h2>
                    <p className="text-[#454256] text-lg lg:text-xl">Explore AIP</p>
                </div>

                <div className="mt-5 lg:mt-10 lg:px-20 sm:px-10 2xl:px-44 xl:px-32">
                    <div className="px-6 border border-border-ash ">
                        <div className="py-2 pl-2 border-l border-r border-border-ash">
                            <h6 className=" text-sm text-[#EFEFEF]/90 ">AUTOMATION</h6>
                        </div>

                        <div className=" 2xl:h-[650px] xl:h-[550px] lg:h-[480px] border-l border-r border-t border-border-ash">
                            <video
                                src={cubes}
                                className="object-fill w-full h-full "
                                loop
                                autoPlay
                                muted
                            >
                            </video>
                        </div>
                    </div>
                </div>
            </div>


            <>
                {ProductsData && ProductsData.map((data, index) => (
                    <StickySection key={data.index} data={data} />
                ))}
            </>


            <Footer />




        </>
    )
}

export default Products


