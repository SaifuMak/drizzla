import React, { useEffect, useRef, useState } from 'react'
import { CustomerServiceData } from '../datas/Products'
import OverlayLayout from '../componets/products/OverlayLayout'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductsDetails from '../componets/products/ProductsDetails';
import ReactPlayer from "react-player";


const Demo = ({ videoId = 'https://vimeo.com/1068616127/772bfd5dd7' }) => {

    const outerVideoContainerRef = useRef(null);

    const [isHovered, setIsHovered] = useState(false)

    const [padding, setPadding] = useState({
        paddingLeft: "70px",
        paddingRight: "70px",
        paddingBottom: "40px",
    });



    const handleVideoUnhover = () => {

        if (window.innerWidth <= 768) {
            return
        }
        let paddingLeft, paddingRight, paddingBottom;

        if (window.innerWidth <= 768) { // Mobile
            paddingLeft = '50px';
            paddingRight = '50px';
            paddingBottom = '80px';
        } else if (window.innerWidth <= 1024) { // Tablet
            paddingLeft = '100px';
            paddingRight = '100px';
            paddingBottom = '100px';
        } else { // Desktop
            paddingLeft = '170px';
            paddingRight = '170px';
            paddingBottom = '140px';
        }

        gsap.to(outerVideoContainerRef.current, {
            paddingLeft,
            paddingRight,
            paddingBottom,
            duration: 0.9,
            ease: "power2.out",
        });

        setIsHovered(false);

    }

    const handleVideoHover = () => {

        let paddingLeft, paddingRight, paddingBottom;

        if (window.innerWidth <= 768) { // Mobile
            paddingLeft = '0px';
            paddingRight = '0px';
            paddingBottom = '30px';
        } else if (window.innerWidth <= 1024) { // Tablet
            paddingLeft = '50px';
            paddingRight = '50px';
            paddingBottom = '60px';
        } else { // Desktop
            paddingLeft = '80px';
            paddingRight = '80px';
            paddingBottom = '80px';
        }

        gsap.to(outerVideoContainerRef.current, {
            paddingLeft,
            paddingRight,
            paddingBottom,
            duration: 0.9,
            ease: "power2.out",
        });

        setIsHovered(true);
    }

    return (
        <div className="w-full  h-full bor ">
            <div ref={outerVideoContainerRef} className="w-full max-md:h-full  flex justify-center  bor    "
                style={{
                    paddingLeft: padding.paddingLeft,
                    paddingRight: padding.paddingRight,
                    paddingBottom: padding.paddingBottom,
                }}
            >
                <div onMouseEnter={handleVideoHover} onMouseLeave={handleVideoUnhover} className=" relative h-full bor w-full lg:w-11/12  2xl:w-10/12 aspect-video"

                >
                    <ReactPlayer
                        url="https://vimeo.com/1068616127/772bfd5dd7"
                        width="100%"
                        height="100%"
                        playing={true}
                        loop={true}
                        muted={true}
                    />
                </div>
            </div>
            <div className="h-screen"></div>
        </div>
    );



}

export default Demo