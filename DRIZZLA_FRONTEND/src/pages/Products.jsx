import React, { useRef, useEffect } from 'react'
import cubes from '../assets/Videos/cubes_video.mp4'
import { FaArrowDownLong } from "react-icons/fa6";
import { BsArrowDown } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextVerticalReveal from '../componets/TextVerticalReveal';

gsap.registerPlugin(ScrollTrigger);


const Products = () => {
    const outerVideoContainerRef = useRef(null);


   

    // Function to handle video hover
    const handleVideoHover = () => {
        // Animate the padding of the outer container
        gsap.to(outerVideoContainerRef.current, {
            paddingLeft: '70px',
            paddingRight: '70px',
            paddingBottom: '40px',
            duration: 0.3, // Animation duration
            ease: "power2.out", // Easing function
        });
    };

    // Function to handle video unhover
    const handleVideoUnhover = () => {
        // Animate the padding back to its original value
        gsap.to(outerVideoContainerRef.current, {
            paddingLeft: '120px',
            paddingRight: '120px',
            paddingBottom: '140px',
            duration: 0.3, // Animation duration
            ease: "power2.out", // Easing function
        });
    };

   

    return (
        <>
            <div className="w-full h-screen bor ">
                <div ref={outerVideoContainerRef} className="h-[800px]   " style={{ border: "1px solid #ccc" }}>

                    <div className="relative h-full " onMouseEnter={handleVideoHover} onMouseLeave={handleVideoUnhover}>
                        <video
                            src={cubes}
                            className="object-fill w-full h-full "
                            loop
                            autoPlay
                            muted
                        >
                        </video>
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent ">

                        </div>
                        <div className="flex-col w-full pt-4 text-white flex-center">
                            <span className="text-2xl "><BsArrowDown /></span>
                            <span className="mt-1 tracking-wider"> Scroll to Explore </span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col items-center justify-center w-full py-20 mt-16 tracking-wider bor">
               
                <TextVerticalReveal text='Go beyond chat.'  secondText = 'Enterprise Autonomy'/>

            </div>
            <div className="h-screen "></div>


            {/* <div className="h-48 mt-48 bor flex-center"></div> */}
        </>
    )
}

export default Products


