import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const TextVerticalReveal = ({ text,secondText }) => {


    const IndividualAnimationText = useRef(null)
    const verticalAnimationText = useRef(null)

    useEffect(() => {
        // if (!IndividualAnimationText.current) return;
        if (!IndividualAnimationText.current ||  !verticalAnimationText.current ) return;

        const chars = IndividualAnimationText.current.querySelectorAll("span");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: IndividualAnimationText.current,
                start: "top 50%", // Start animation when top of text reaches 80% of viewport
                end: "top 10%",
                scrub: 1, // Smooth effect on scroll
                markers: true
            },
        })
         
        tl.fromTo(chars,  { opacity: 0, y: 30 }, {opacity: 1,y: 0,duration: 0.7, ease: "power2.out", stagger: 0.7,})
        tl.fromTo(
            verticalAnimationText.current,
            { opacity: 0, y: 50, color: "#808080" }, // Starts invisible and gray
            { opacity: 0.5, y: 0, duration: 1, ease: "power2.out", color: "#8d99ae", delay:5 } // Becomes 50% visible in gray
          )
          .to(verticalAnimationText.current, {
            opacity: 1,
            color: "#ffffff", // Turns fully visible and white
            duration: 7,
          })
      
        tl.to(verticalAnimationText.current, {
            // backgroundImage: "linear-gradient(90deg, #ffcc00, #ff00ff)", // Gradient effect
            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(228,223,232,1) 50%, rgba(163,95,221,1) 100%)",
            // background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(228,223,232,1) 50%, rgba(163,95,221,1) 100%)',
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            backgroundSize: "100% 100%", // Ensure full width to prevent flickering
            duration:2,
          })
          .set(verticalAnimationText.current, { backgroundSize: "0% 100%" }) // Start from zero smoothly
          .to(verticalAnimationText.current, {
            backgroundSize: "100% 100%", // Expand from left to right
            duration: 2, // Slower animation
            ease: "power2.out",
          });

        // .to(verticalAnimationText.current, {
        //     backgroundImage: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(228,223,232,1) 50%, rgba(163,95,221,1) 100%)",
        //     backgroundSize: "0%  100%",  // Start with no gradient visible
        //     backgroundRepeat: "no-repeat",
        //     WebkitBackgroundClip: "text",
        //     WebkitTextFillColor: "transparent",
        //     duration: 0.1, // Instantly apply the gradient
        // })


        // .to(verticalAnimationText.current, {
        //     backgroundImage: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(228,223,232,1) 50%, rgba(163,95,221,1) 100%)",

        //     backgroundRepeat: "no-repeat",
        //     WebkitBackgroundClip: "text",
        //     WebkitTextFillColor: "transparent",
        //     backgroundSize: "100% 100%", // Gradually spread from left to right
        //     duration: 4, // Slow spread effect
        //     ease: "power2.out",
        // });

        // .to(verticalAnimationText.current, {
        //     backgroundImage: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(228,223,232,1) 50%, rgba(163,95,221,1) 100%)",
        //     backgroundSize: "0% 100%", // Start with no gradient visible
        //     backgroundRepeat: "no-repeat",
        //     WebkitBackgroundClip: "text",
        //     WebkitTextFillColor: "transparent",
        //     duration: 0.1, // Apply instantly
        //   })
        //   .to(verticalAnimationText.current, {
        //     backgroundSize: "100% 100%", // Gradually expand from left to right
        //     duration: 4, // Slow spread effect
        //     ease: "power2.out",
        //   });
    }, []);


    return (
       
       <div className="text-center">
        
            <p ref={IndividualAnimationText} className="text-white text-7xl">
                {text.split("").map((char, index) => (
                    <span key={index} className="inline-block ">
                        {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
                    </span>
                ))}
            </p>

            <p ref={verticalAnimationText} className="pb-3 mt-2 text-white bor text-7xl">
            {secondText}
            </p>
            </div>
    )
}

export default TextVerticalReveal