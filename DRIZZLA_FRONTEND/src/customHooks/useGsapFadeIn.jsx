import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const useGsapFadeIn = (index = 0, options = {}) => {


    const elementRef = useRef(null);

    useEffect(() => {

        if (!elementRef.current) return;

        gsap.fromTo(
            elementRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: options.duration || 0.5,
                delay: (options.delay || 0.2) * index,
                ease: options.ease || "power2.out",
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: options.start || "top 70%",
                    toggleActions: options.toggleActions || "play none none reverse",
                    // markers: options.markers || true,
                    // invalidateOnRefresh: true,
                },
            }
        );

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);


    }, [index, options]);

    return elementRef;
};

export default useGsapFadeIn;
