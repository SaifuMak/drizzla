import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const TextVerticalReveal = ({ text, secondText }) => {

  const IndividualAnimationText = useRef(null)
  const verticalAnimationText = useRef(null)
  const parentRef = useRef(null);
  const childRef = useRef(null)
  const sampleAnimationText = useRef(null)

  useEffect(() => {
    // if (!IndividualAnimationText.current) return;
    if (!IndividualAnimationText.current || !verticalAnimationText.current || !parentRef.current || !childRef.current) return;

    const chars = IndividualAnimationText.current.querySelectorAll("span");

    const tl = gsap.timeline({
      scrollTrigger: {
        // trigger: IndividualAnimationText.current,
        trigger: parentRef.current, // Pin the entire parent div
        // start: "top 20%", // Start animation 
        end: "top 5%",
        start: "top 40%", // Start animation when the element reaches the center
        // end: "", // Adjust how long it stays pinned
        pin: childRef.current, // Pins the section
        pinSpacing: false,
        scrub: 1, // Smooth effect on scroll
        // markers: true
      },
    })

    tl.fromTo(chars, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.5, })
    tl.fromTo(
      verticalAnimationText.current,
      { opacity: 0, y: 50, color: "#808080" }, 
      { opacity: 0.5, y: 0, duration: 1, ease: "power2.out", color: "#8d99ae", delay: 1 } // Becomes 50% visible in gray
      // reduced the delay from 2
    )
      .to(verticalAnimationText.current, {
        opacity: 1,
        color: "#ffffff", // Turns fully visible and white
        duration: 5,
        // changes from 3 
      })

    tl.to(verticalAnimationText.current, {
      // backgroundImage: "linear-gradient(90deg, #ffcc00, #ff00ff)", // Gradient effect
      backgroundImage: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(228,223,232,1) 50%, rgba(163,95,221,1) 100%)",
      // background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(228,223,232,1) 50%, rgba(163,95,221,1) 100%)',
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      display: "inline-block",
      backgroundSize: "100% 100%", // Ensure full width to prevent flickering
      duration: 0.01,
    })
      .set(verticalAnimationText.current, { backgroundSize: "0% 100%" }) // Start from zero smoothly
      .to(verticalAnimationText.current, {
        backgroundSize: "100% 100%", // Expand from left to right
        duration: 0.1, // Slower animation
        ease: "power2.out",
      });
      tl.fromTo(
        sampleAnimationText.current,
        { opacity: 0, y: 50, color: "#808080" }, 
        { opacity: 0, y: 0, duration: 3, ease: "power2.out", color: "#8d99ae", delay: 2 } // Becomes 50% visible in gray
        // reduced the delay from 2
      )
    


    return () => {
      tl.kill(); // Kill the timeline
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all ScrollTriggers
    };


  }, []);


  return (

    <div ref={parentRef} className="md:h-screen  h-[600px] text-center  ">
      <div ref={childRef} className="flex flex-col items-center justify-center ">
        <p ref={IndividualAnimationText} className="text-4xl text-white md:text-7xl lg:text-8xl 2xl:text-9xl">
          {text.split("").map((char, index) => (
            <span key={index} className="inline-block ">
              {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
            </span>
          ))}
        </p>

        <p ref={verticalAnimationText} className="pb-6 mt-2 text-4xl text-white md:text-7xl lg:text-8xl 2xl:text-9xl">
          {secondText}
        </p>

        <p ref={sampleAnimationText} className=" mt-2 text-xs ">
          hi
        </p>

      </div>
    </div>
  )
}

export default TextVerticalReveal