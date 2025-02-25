import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickySection = ({ data }) => {

    const titleRef = useRef(null);
    const sectionRef = useRef(null);

    const lineRef = useRef()

    const LineMarkers = [1, 2, 3, 4]


    useEffect(() => {
        if (titleRef.current && sectionRef.current) {
            const chars = titleRef.current.querySelectorAll("span");
            const line = lineRef.current
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%", // When the top of the section reaches the center of the viewport
                    end: "bottom  center", // When the bottom reaches the center
                    toggleActions: "play none none reverse",
                    markers: true,
                },
            })


            tl.fromTo(
                chars,
                { opacity: 0 }, { opacity: 1, duration: 0.01, ease: "power2.out", stagger: 0.05, },
                0

            );
            tl.fromTo(
                line,
                { width: "0%" },
                {
                    width: "100%", duration: 1, ease: "power2.out",
                },
                0
            )
        }
    }, []);


    return (
        <div ref={sectionRef} className="flex justify-center mt-64 bg-slate-500 ">
            <section className="flex w-11/12 h-full ">
                <div className="sticky top-0 w-4/12 h-64 bor ">
                    {/* <div className="relative w-3/4 mt-4 text-xl text-white border-b ">
                    <span className="absolute left-0 flex items-center justify-center bg-black -top-2 size-4">1</span>
                </div> */}
                    {/* 
                    <div className="flex items-center mt-4 space-x-2 text-white ">
                        {LineMarkers && LineMarkers.map((mark, index) => (
                            <>
                                <span className=" flex-center">{mark}</span>
                              
                                <span ref={(spanElement)=> (linesRef.current[index] = spanElement)} className={` h-0.5 bg-white ${mark === data.index ? 'w-32' : mark === 4 ? 'w-0' : 'w-8'} `}> </span>


                            </>
                        ))}

                     
                    </div> */}

                    <div className="relative w-full py-4 mt-10 bor ">
                        <div ref={lineRef} className="block h-0.5   bg-white "></div>
                        <div className="absolute inset-0 flex justify-between text-xl text-white">
                            {LineMarkers && LineMarkers.map((number, index) => (
                                <span key={index} className={`px-2  bg-slate-500 bor flex-center transtion-all ${number === data.index ? ' mr-48' : 'mr-0'}`}>{number}</span>
                            ))}
                        </div>
                    </div>


                    <h2 ref={titleRef} className="pr-8 mt-10 text-5xl leading-tight tracking-wide text-white ">

                        {data.title.split(" ").map((word, wordIndex) => (
                            <span key={wordIndex} className="inline-block">
                                {word.split("").map((char, charIndex) => (
                                    <span key={charIndex} className="inline-block">
                                        {char}
                                    </span>
                                ))}
                                &nbsp;
                            </span>
                        ))}
                    </h2>

                </div>
                <div className="w-8/12 h-full p-10 mt-20 space-y-16 text-white bor">
                    <p className="w-6/12 text-lg ">{data.description}</p>
                    <div className="flex justify-between space-x-2 w-44 rounded-2xl bor">
                        <button className="w-full py-1 rounded-2xl ">video</button>
                        <button className="w-full py-1 bg-slate-400 rounded-2xl">Details</button>
                    </div>
                    <div className="p-4 space-y-6 rounded-lg bor">

                        {data.parts && data.parts.map((details, index) => (<div key={index} className="w-9/12 space-y-3">
                            <h6 className="text-xl font-semibold ">{details.subtitle}</h6>
                            <p className="text-lg ">{details.subDescription}</p>
                        </div>))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default StickySection