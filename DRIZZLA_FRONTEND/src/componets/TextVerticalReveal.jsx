import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const TextVerticalReveal = ({ text, secondText }) => {


  const IndividualAnimationText = useRef(null)
  const verticalAnimationText = useRef(null)
  const parentRef = useRef(null);
  const childRef = useRef(null)

  useEffect(() => {
    // if (!IndividualAnimationText.current) return;
    if (!IndividualAnimationText.current || !verticalAnimationText.current || !parentRef.current || !childRef.current) return;

    const chars = IndividualAnimationText.current.querySelectorAll("span");

    const tl = gsap.timeline({
      scrollTrigger: {
        // trigger: IndividualAnimationText.current,
        trigger: parentRef.current, // Pin the entire parent div
        // start: "top 20%", // Start animation when top of text reaches 80% of viewport
        end: "+=1200",
        start: "top 40%", // Start animation when the element reaches the center
        // end: "", // Adjust how long it stays pinned
        pin: childRef.current, // Pins the section
        pinSpacing: false,
        scrub: 1, // Smooth effect on scroll
        // markers: true
      },
    })

    tl.fromTo(chars, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.7, })
    tl.fromTo(
      verticalAnimationText.current,
      { opacity: 0, y: 50, color: "#808080" }, // Starts invisible and gray
      { opacity: 0.5, y: 0, duration: 1, ease: "power2.out", color: "#8d99ae", delay: 5 } // Becomes 50% visible in gray
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
      duration: 2,
    })
      .set(verticalAnimationText.current, { backgroundSize: "0% 100%" }) // Start from zero smoothly
      .to(verticalAnimationText.current, {
        backgroundSize: "100% 100%", // Expand from left to right
        duration: 2, // Slower animation
        ease: "power2.out",
      });


    return () => {
      tl.kill(); // Kill the timeline
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all ScrollTriggers
    };


  }, []);


  return (

    <div ref={parentRef} className="min-h-screen text-center bor ">
      <div ref={childRef} className="">
        <p ref={IndividualAnimationText} className="text-white text-9xl">
          {text.split("").map((char, index) => (
            <span key={index} className="inline-block ">
              {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
            </span>
          ))}
        </p>

        <p ref={verticalAnimationText} className="pb-6 mt-2 text-white text-9xl">
          {secondText}
        </p>

      </div>
    </div>
  )
}

export default TextVerticalReveal