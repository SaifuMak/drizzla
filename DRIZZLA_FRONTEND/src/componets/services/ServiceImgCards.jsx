import { useEffect, useRef } from "react";
import DrizilaCapabilty from '../general/DrizilaCapabilty'
import { Link } from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import useIsMobile from "../../customHooks/useIsMobile";
gsap.registerPlugin(ScrollTrigger);
import useGsapFadeIn from "../../customHooks/useGsapFadeIn";

const ServiceImgCards = ({ index, url, image, outerContainerClass, title, description }) => {

    const isMobile = useIsMobile()

    const ServiceImgCardRef =  useGsapFadeIn(index);
    const ServiceImgCardContentRef = useGsapFadeIn(index);


    // useEffect(() => {
    //     gsap.fromTo(
    //         ServiceCardRef.current,
    //         { opacity: 0, y: 30 }, // Initial hidden state
    //         {
    //             opacity: 1,
    //             y: 0,
    //             scale: 1,
    //             duration: 0.5,
    //             delay: index * 0.3 ,
    //             ease: "power2.out",
    //             scrollTrigger: {
    //                 trigger: ServiceCardRef.current,
    //                 start: "top 65%", // Animation starts when 80% of viewport reaches the card
    //                 toggleActions: "play none none reverse",
    //                 markers:true
    //             },
    //         }
    //     );
    // }, []);




    return (
        <Link ref={ServiceImgCardRef} to={url} className="md:w-1/2 max-md:mt-10 ">

            <div className={`relative flex flex-col cursor-pointer items-center  pb-20 2xl:pb-20 h-full   transition-all duration-500 2xl:p-7 p-4 rounded-xl group ${outerContainerClass}`}>
                <div className=" w-full xl:h-[400px] rounded-xl overflow-hidden ">
                    <img src={image} alt="data-analytics-presentation" className="object-contain w-full h-full scale-105 rounded-xl " />
                </div>
                <div ref={ServiceImgCardContentRef} className="mt-6 md:text-center 2xl:mt-8 xl:mt-0">
                    <h4 className="text-2xl md:font-semibold lg:text-3xl">{title}</h4>
                    <p className="mt-4 font-light xl:px-5 2xl:mt-6 xl:leading-relaxed xl:text-lg-custom ">{description}</p>
                </div>
                <DrizilaCapabilty customStyle=' text-base translate-y-5 opacity-0  group-hover:translate-y-0 group-hover:opacity-100 bottom-5' />
            </div>
        </Link>


    )
}

export default ServiceImgCards