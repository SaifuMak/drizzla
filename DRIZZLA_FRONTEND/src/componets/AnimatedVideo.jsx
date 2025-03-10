import React,{useRef,useState,useEffect} from 'react'
import cubes from '../assets/Videos/cubes_video.mp4'
import { BsArrowDown } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import OriginalLogo from '../assets/Images/logoOriginal.png'


const AnimatedVideo = () => {

    const outerVideoContainerRef = useRef(null);
    const collapseNavItems = useRef([]);
    const iconRef = useRef();
    const mobileMenuContainerRef = useRef(null)
    const videoScrollDownRef = useRef(null)

    // const videoRef = useRef(null)

    const [IsHovered, setIsHovered] = useState(true)
    const [isMobileMenuVisible, setisMobileMenuVisible] = useState(false)
    const [isVideoOutOfFocus, setIsVideoOutOfFocus] = useState(false)
    const [videoLoaded, setVideoLoaded] = useState(false)



    const [padding, setPadding] = useState({
        paddingLeft: "170px",
        paddingRight: "170px",
        paddingBottom: "140px",
    });


    const NavMenu = [
        { menu: 'Capabilities', link: '#' },
        { menu: 'Solutions', link: '#' },
        { menu: 'About', link: '#' },
        { menu: 'Careers', link: '#' },
        { menu: 'Contact', link: '#' },
    ]


    // Function to handle video hover
    const handleVideoHover = () => {

        if (isVideoOutOfFocus) {
            return
        }
        console.log('called the hover -------------------');

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
    };


    const handleVideoUnhover = () => {
        if (isVideoOutOfFocus) {
            return
        }
        console.log('called the un hover -------------------');

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
    };



    useEffect(() => {
        const updatePadding = () => {
            if (window.innerWidth <= 768) {
                setPadding({ paddingLeft: "0px", paddingRight: "0px", paddingBottom: "30px" });
            } else if (window.innerWidth <= 1024) {
                setPadding({ paddingLeft: "100px", paddingRight: "100px", paddingBottom: "100px" });
            } else {
                setPadding({ paddingLeft: "170px", paddingRight: "170px", paddingBottom: "140px" });
            }
        };

        updatePadding(); // Set initial padding
        window.addEventListener("resize", updatePadding); // Listen for screen size changes

        return () => window.removeEventListener("resize", updatePadding); // Cleanup
    }, []);

   


    useEffect(() => {
        if (window.innerWidth > 768 || !collapseNavItems.current || !mobileMenuContainerRef) {
            return
        }

        // Filter out null elements before animating
        const validNavItems = collapseNavItems.current.filter((el) => el !== null);

        if (isMobileMenuVisible) {
            gsap.fromTo(
                validNavItems,
                { opacity: 0, x: -20 }, // Start from slightly left and hidden
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    stagger: 0.15, // Delay between each item
                }
            );
            gsap.fromTo(
                mobileMenuContainerRef.current,
                { height: '0%' },
                {
                    height: '60%', duration: 0.5,
                    ease: "power2.out",
                }
            )
        }
        else {
            gsap.fromTo(
                validNavItems,
                { opacity: 1, x: 0 }, // Start from slightly left and hidden
                {
                    opacity: 0,
                    x: -20,
                    duration: 0.5,
                    ease: "power2.out",
                    stagger: 0.1, // Delay between each item
                }
            );
        }
    }, [isMobileMenuVisible]);


    useEffect(() => {
        if (!videoScrollDownRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: videoScrollDownRef.current,
                start: "top 40%", // Start animation when the element reaches the center
                end: "top 60%",
                scrub: 1, // Smooth effect on scroll
                // markers: true,
                onEnter: () => {
                    setIsVideoOutOfFocus(true);
                    handleVideoUnhover();
                },
                onEnterBack: () => {
                    setIsVideoOutOfFocus(false);
                    handleVideoHover();
                }
                // onLeave: () => handleVideoHover(),
                // onLeaveBack: () => handleVideoHover(),

            },
        })

        return () => {
            tl.kill(); // Kill the timeline
        };

    }, []);


    useEffect(() => {
        // Prevent browser from restoring scroll position
        window.history.scrollRestoration = "manual";

        // Smoothly scroll to top on page load
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 300); // Small delay for better effect

        // Attempt to scroll before unload (won't be visible)
        const handleBeforeUnload = () => {
            window.scrollTo({ top: 0, behavior: "instant" }); // No smooth here, as unload is instant
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);




    return (
        <div className="w-full h-[640px] lg:h-screen  ">
            <div
                ref={outerVideoContainerRef}
                className="relative  h-[600px] md:h-[700px] lg:h-[800px] xl:h-[800px]  2xl:h-[900px]  "
                style={{ paddingLeft: padding.paddingLeft, paddingRight: padding.paddingRight, paddingBottom: padding.paddingBottom }}
            >
                {/* Scalable Container onMouseEnter={handleVideoHover} onMouseLeave={handleVideoUnhover} */}
                <div onMouseEnter={handleVideoHover} onMouseLeave={handleVideoUnhover} className="relative w-full h-full ">

                    {/* Video Container */}
                    <div className="h-full bg-black">

                        <video
                            src={cubes}
                            className={`object-fill w-full h-full transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
                            loop
                            autoPlay
                            muted
                            playsInline
                            preload="auto"
                            onLoadedData={() => setVideoLoaded(true)}
                        />

                    </div>


                    {/* Navbar */}
                    {videoLoaded && (<div className="absolute top-0 flex items-center justify-between w-full p-4">
                        <div className={`xl:w-56 w-48 transform translate-all duration-500 ${IsHovered ? 'opacity-100' : 'opacity-0'}`}>
                            <img src={OriginalLogo} alt="Logo" className="object-cover w-full h-full" />
                        </div>
                        <div className="w-auto h-12 tracking-wider text-white rounded-lg flex-center bg-white/20 backdrop-blur-md backdrop-filter">
                            <nav className=' max-lg:hidden' >

                                {IsHovered ? (
                                    <ul className="flex ">
                                        {NavMenu.map((data, index) => (
                                            <li className='mx-6 2xl:mx-8' key={index} >
                                                <Link to={data.link}>{data.menu}</Link>
                                            </li>
                                        ))}

                                    </ul>
                                ) : (
                                    <ul className="flex items-center ">

                                        <li className='mx-6 '>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                        <span ref={iconRef} className=""><HiMenuAlt2 className='text-4xl text-white' /></span>

                                    </ul>
                                )}
                            </nav>

                            <nav className=' lg:hidden' >
                                <span onClick={() => setisMobileMenuVisible(!isMobileMenuVisible)} ref={iconRef} className="duration-300 translate transform-all">{isMobileMenuVisible ? (<RxCross2 className='mx-2 text-2xl text-white ' />) : (<HiMenuAlt2 className='mx-2 text-2xl text-white ' />)}</span>
                            </nav>

                        </div>

                    </div>)}

                    {isMobileMenuVisible && (<div ref={mobileMenuContainerRef} className="absolute right-0 w-full text-white rounded-lg  bg-black/20 backdrop-blur-md backdrop-filter top-[67px] lg:hidden ">
                        <ul className="flex flex-col py-2 ">
                            {NavMenu.map((data, index) => (
                                <li className='my-5 ml-5 text-sm' key={index} ref={(el) => (collapseNavItems.current[index] = el)}>
                                    <Link to={data.link}>{data.menu}</Link>
                                </li>
                            ))}

                        </ul>
                    </div>)}

                    {/* Shaded Gradient  */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/90 to-transparent" />

                    {/* Scroll Down Icon */}
                    <div ref={videoScrollDownRef} className="absolute inset-x-0 bottom-0 flex flex-col items-center h-20 text-white cursor-default bg-gradient-to-t from-black/90 to-transparent">
                        {videoLoaded && (<div className="flex flex-col items-center justify-center mt-20 ">
                            <span className="lg:text-xl"><BsArrowDown /></span>
                            <span className="mt-1 text-xs tracking-wider lg:text-sm"> Scroll to Explore </span>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimatedVideo