import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const ProductsDisplayMobile = ({ data }) => {


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
        <div ref={sectionRef} className="flex justify-center mt-10 ">
            <section className="flex w-11/12 h-full max-lg:flex-col">

                <div className="lg:h-64 lg:sticky lg:top-0 ">

                    <div className="relative w-full py-4 mt-10 ">
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


                <div className="h-full px-2 pt-5 mt-2 space-y-8 text-white lg:pt-10 lg:space-y-16 lg:mt-20 lg:px-10 lg:w-8/12 ">
                    <p className="lg:text-lg lg:w-8/12 opacity-85 ">{data.description}</p>
                    <div className="flex justify-between space-x-2 max-sm:w-full md:w-44 lg:w-48 p-[2px] rounded-full bor">
                        <button onClick={() => handleMode('video')} className={`w-full ${selectedMode === 'video' ? 'bg-[#332F37]' : 'bg-transparent'} transform-all flex-center  duration-100 py-1.5 rounded-2xl  text-sm `}>VIDEO</button>
                        <button onClick={() => handleMode('details')} className={`w-full ${selectedMode === 'details' ? 'bg-[#332F37]' : 'bg-transparent'} flex-center  transform-all duration-100 py-1.5  rounded-2xl text-sm`}>DETAILS</button>
                    </div>


                    {/* <div className={` ${selectedMode === 'details' ? 'p-10' : 'p-0.5'}  space-y-4 lg:space-y-3 2xl:space-y-6 lg:w-11/12  lg:h-[500px]   rounded-lg bor`}>
                        {selectedMode === 'details' ? (
                            <>
                                {data.details && data.details.map((section, index) => (<div key={index} className="space-y-3">
                                    <h6 className="text-xl font-semibold ">{section.subtitle}</h6>
                                    <p className="lg:text-lg opacity-85 ">{section.content}</p>
                                </div>))}
                            </>
                        ) : (
                            <div className="w-full h-full ">
                                <video src={data.video} className="object-cover w-full h-full " loop autoPlay muted ></video>
                            </div>
                        )}

                    </div> */}

                    <div className=" min-h-[500px] h-auto   rounded-xl ">
                        {selectedMode === 'details' ? (
                            <ul className="p-4 space-y-2 rounded-xl bor ">
                                {data.details.map((detail, i) => (
                                    <li key={i} className='pt-4 space-y-2'>
                                        <h4 className="text-xl font-semibold">{detail.subtitle}</h4>
                                        <p className='opacity-85 md:text-lg-custom'>{detail.content}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="w-full rounded-xl bor flex-center">
                                <video src={data.video} className="object-cover w-full h-full rounded-xl " loop autoPlay muted ></video>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductsDisplayMobile