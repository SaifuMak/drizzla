// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useLocation } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);

// const useGsapFadeIn = (index = 0, options = {}) => {

//     const elementRef = useRef(null);
//     const animationRef = useRef(null);


//     useEffect(() => {

//         if (!elementRef.current) return;
   
//         animationRef.current = gsap.fromTo(
//             elementRef.current,
//             { opacity: 0, y: options.initialPosition || 50 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//                 duration: options.duration || 0.8,
//                 ease: options.ease || "power2.out",
//                 scrollTrigger: {
//                     trigger: elementRef.current,
//                     start: options.start || "top 75%",
//                     toggleActions: options.toggleActions || "play none none reverse",
//                     onEnter: () => {
//                         elementRef.current?.classList?.remove("hidden-text");
//                     },
//                 },
//             }
//         );

//     }, []);

//     useEffect(() => {
//         setTimeout(() => {

//             ScrollTrigger.refresh(true);
//         }, 500);
//     }, []);

//     return elementRef;
// };

// export default useGsapFadeIn;



import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapFadeIn = (index = 0, options = {}) => {
  const elementRef = useRef(null);

  useGSAP(
    () => {
      if (!elementRef.current) return;

      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          y: options.initialPosition ?? 50,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: options.duration ?? 0.8,
          delay: (options.delay ?? 0) * index,
          ease: options.ease ?? "power2.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: options.start ?? "top 75%",
            toggleActions:
              options.toggleActions ?? "play none none reverse",
            markers: options.markers ?? false,
            onEnter: () => {
              elementRef.current?.classList?.remove("hidden-text");
            },
          },
        }
      );
    },
    { scope: elementRef }
  );

  return elementRef;
};

export default useGsapFadeIn;
