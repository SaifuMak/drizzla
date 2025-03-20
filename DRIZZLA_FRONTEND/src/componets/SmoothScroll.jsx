import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


const SmoothScroll = () => {
  const { pathname, hash } = useLocation();
  const lenisRef = useRef(null);


  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Smooth scrolling speed (higher = smoother)
      smoothWheel: true,
      smoothTouch: true,
      // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Natural stop
    });

    lenisRef.current = lenis;

    function update(time) {
      lenis.raf(time);
      ScrollTrigger.update();
    }

    gsap.ticker.add(update);

    const animate = (time) => {
      update(time);
      requestAnimationFrame(animate);
    };


    requestAnimationFrame(animate);
    lenis.scrollTo(0, 0);


    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  //  Scroll to top on each pathname change
  // Scroll to top on route change using the same Lenis instance
  // useEffect(() => {
  //   if (hash) {
  //      console.log('hash is there -------------------------');

  //     return
  //   }
  //   console.log('still triggred the scroll  -------------------------');

  //   if (lenisRef.current) {
  //     lenisRef.current.scrollTo(0, 0, {
  //       immediate: false, // true = instant scroll to top
  //       duration: 1,      // Optional: custom duration
  //       easing: (t) => t, // Optional: linear easing
  //     });
  //   }
  // }, [pathname]);


  useEffect(() => {
    const scrollToHash = () => {
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          gsap.to(window, {
            scrollTo: {
              y: target,
              offsetY: 80, // Adjust offset for sticky navbars if needed
            },
            duration: 1.2,
            ease: "power2.out",
          });
        }
      } else {
        // If no hash, scroll to top on page change
        gsap.to(window, {
          scrollTo: { y: 0 },
          duration: 1,
          ease: "power2.out",
        });
      }
    };

    // Trigger scroll after a slight delay to ensure DOM is ready
    setTimeout(() => {
      scrollToHash();
    }, 100);
  }, [pathname, hash]);



  return null;
};

export default SmoothScroll;
