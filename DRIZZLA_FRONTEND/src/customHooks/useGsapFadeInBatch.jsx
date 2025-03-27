import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapFadeInBatch = (options = {}) => {
  const elementsRef = useRef([]); // Holds multiple refs

  useEffect(() => {
    if (!elementsRef.current.length) return;

    gsap.fromTo(
      elementsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration || 0.7,
        stagger: 0.2, //  Staggered animations instead of manual delay
        ease: options.ease || "power2.out",
        scrollTrigger: {
          trigger: elementsRef.current[0], // Use first element as trigger
          start: options.start || "top 80%",
          toggleActions: options.toggleActions || "play none none reverse",
        },
      }
    );

    ScrollTrigger.refresh(); // ✅ Refresh only once
  }, []);

  return elementsRef;
};

export default useGsapFadeInBatch;
