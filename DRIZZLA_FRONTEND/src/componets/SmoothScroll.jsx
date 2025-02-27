import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8, // Smooth scrolling speed (higher = smoother)
      smoothWheel: true,
      smoothTouch: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Natural stop
    });

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

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
