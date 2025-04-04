import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsMobile from "./useIsMobile";

gsap.registerPlugin(ScrollTrigger);


const useGsapRightFadeIn = ( options = {}) => {


    const elementRef = useRef(null);


    useEffect(() => {

        if (!elementRef.current) return;

        gsap.fromTo(
            elementRef.current,
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: options.duration || 0.8,
                // delay: (options.delay || 0.2) * index,
                ease: options.ease || "power2.out",
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: options.start || "top 75%",
                    toggleActions: options.toggleActions || "play none none reverse",
                    onEnter: () => {
                        elementRef?.current?.classList?.remove("hidden-text");
                    }
                  
                    // markers: options.markers || true,
                    // invalidateOnRefresh: true,
                },
            }
        );

        // setTimeout(() => {
        //     ScrollTrigger.refresh();
        // }, 100);


    }, []);


    ScrollTrigger.refresh();

    return elementRef;
};

export default useGsapRightFadeIn;
