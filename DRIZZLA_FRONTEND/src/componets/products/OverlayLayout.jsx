import React, { useEffect, useRef, useState } from 'react'


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const OverlayLayout = ({ data }) => {


    const titleRef = useRef(null);
    const sectionRef = useRef(null);

    const lineRef = useRef()
    const numberRef = useRef()
    const numRefs = useRef([]); // Store number references in an array

    const [selectedMode, setselectedMode] = useState('details')
    const [selectionVideo, setselectionVideo] = useState(null)

    const LineMarkers = [1, 2, 3, 4]


    const handleMode = (mode) => {
        setselectedMode(mode)
    }


    useEffect(() => {


        if (titleRef.current && sectionRef.current) {
            const chars = titleRef.current.querySelectorAll("span");
            const line = lineRef.current

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 65%", // When the top of the section reaches the center of the viewport
                    end: "bottom  center", // When the bottom reaches the center
                    toggleActions: "play none none reverse",
                    // markers: true,
                },
            })
            const Numberstl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%", // When the top of the section reaches the center of the viewport
                    end: "bottom  center", // When the bottom reaches the center
                    toggleActions: "play none none reverse",
                    // markers: true,
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
                    width: "100%", duration: 1.5, ease: "power2.out",
                },
                0
            );


            LineMarkers.forEach((num, index) => {
                if (numRefs.current[index]) {
                    if (num === data.index) {
                        // Apply a different animation for the matching element
                        Numberstl.fromTo(
                            numRefs.current[index],
                            { opacity: 0 }, // Starting at fully visible
                            {
                                opacity: 1,
                                duration: 0.2,
                                repeat: 4,    // This creates the blink effect (6 cycles)
                                yoyo: true,   // Makes it reverse back to opacity: 1
                                onComplete: () => {
                                    // Ensure the element stays visible at the end
                                    Numberstl.set(numRefs.current[index], { opacity: 1 });
                                }
                            }
                        );

                    } else {
                        // Default animation for other elements
                        Numberstl.fromTo(
                            numRefs.current[index],
                            { opacity: 0 },
                            { opacity: 1, duration: 0.2, ease: "power2.out" }
                        );
                    }
                }
            });




        }
    }, []);





    return (
        <div ref={sectionRef} className="flex lg:sticky min-h-[750px]  lg:top-20   ">
            <section className="flex h-full max-lg:flex-col">

                <div className="relative min-h-[350px] bg-black overflow-hidden  ">

                    {/* Blurred & Transparent Top */}
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-black/10 backdrop-blur-sm z-10 pointer-events-none"></div>
                    <div className="relative w-full py-4 mt-10 z-30  ">
                        <div ref={lineRef} className="block h-[0.5px]   bg-white "></div>
                        <div ref={numberRef} className="absolute inset-0 flex justify-between text-xl text-white">
                            {LineMarkers && LineMarkers.map((number, index) => (
                                <span key={index} className={`2xl:px-1 px-0.5 bg-black    flex-center tracking-widest transtion-all ${number === data.index ? ' mr-28 xl:mr-32 2xl:mr-48' : 'mr-0'}`}>
                                    <span ref={(el) => (numRefs.current[index] = el)} className=""> {number !== data.index ? number / 10 : `[${number / 10}]`}</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    <h2 ref={titleRef} className="mt-6 text-2xl leading-relaxed tracking-wide text-white lg:pr-8 lg:mt-10 lg:text-4xl xl:text-4xl 2xl:text-5xl ">

                        {data.title.split(" ").map((word, wordIndex) => (
                            <span key={wordIndex} className="inline-block my-1 2xl:my-2">
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




            </section >
        </div >
    )
}

export default OverlayLayout