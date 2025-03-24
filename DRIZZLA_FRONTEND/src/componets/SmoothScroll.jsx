import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


const SmoothScroll = () => {
  // const navigate = useNavigate()
  const { pathname, hash } = useLocation();
  const lenisRef = useRef(null);
  console.log(pathname, hash, '-------------------------');


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

  const scrollToHash = (targetHash, isRepeatClick = false) => {
    if (targetHash) {
      const target = document.querySelector(targetHash);
      if (target) {
        gsap.to(window, {
          scrollTo: {
            y: target,
            offsetY: 80, // Adjust for sticky navbar
          },
          duration: 1.2,
          ease: "power2.out",
        });

        if (isRepeatClick) {
          // navigate(pathname, { replace: true }); // Clear hash
          setTimeout(() => {
            // navigate(pathname + targetHash, { replace: true }); // Re-add it
          }, 100);
        }
      }
    } else {
      // **Scroll to top when no hash**
      gsap.to(window, {
        scrollTo: { y: 0 },
        duration: 1.2,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      scrollToHash(hash);
    }, 100);
  }, [pathname, hash]);

  useEffect(() => {
    const handleClick = (e) => {
      const clickedHash = e.target.hash;
      if (clickedHash && clickedHash === window.location.hash) {
        e.preventDefault(); // Prevent default
        scrollToHash(clickedHash, true); // Force smooth scroll on repeated clicks
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
};

export default SmoothScroll;
