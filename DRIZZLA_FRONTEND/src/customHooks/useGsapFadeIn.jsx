import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsMobile from "./useIsMobile";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);


const useGsapFadeIn = (index = 0, options = {}) => {

    const {path} = useLocation()


    const elementRef = useRef(null);
    const animationRef = useRef(null);


    useEffect(() => {

        if (!elementRef.current) return;
        // Clear previous animations and ScrollTriggers before applying new ones
        //  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Ensure animation starts in hidden state when re-entering a page
        //  gsap.set(elementRef.current, { opacity: 0, y: options.initialPosition || 50 });


        animationRef.current = gsap.fromTo(
            elementRef.current,
            { opacity: 0, y: options.initialPosition || 50 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: options.duration || 0.8,
                // delay: (options.delay || 0.2) * index,
                ease: options.ease || "power2.out",
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: options.start || "top 75%",
                    toggleActions: options.toggleActions || "play none none reverse",
                    onEnter: () => {
                        elementRef.current?.classList?.remove("hidden-text");
                    },

                    markers: options.markers || true,
                    // invalidateOnRefresh: true,
                },
            }
        );

        return () => {
            ScrollTrigger.refresh();

            // if (animationRef.current) {
            //     animationRef.current.kill();
            // }
            // ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };


    }, []);
    ScrollTrigger.refresh();


    // Ensure ScrollTrigger refreshes on route changes
    useEffect(() => {
        console.log('called the scroll triger refresh ------------')
        ScrollTrigger.refresh();
    }, [path]);


    // ScrollTrigger.refresh();

    return elementRef;
};

export default useGsapFadeIn;
