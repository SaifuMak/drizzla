import React, { useRef, useState, useEffect } from 'react'
import { BsArrowDown } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Link } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import OriginalLogo from '../assets/Images/logoOriginal.png'
import ContactForm from './ContactForm';
import useContactModal from '../customHooks/useContactModal';
import { RiArrowDropDownLine } from "react-icons/ri";

import { getMenuList } from '../datas/MenuList';
import { ProductsNavigations, ServicesNavigations, SolutionsNavigations } from '../datas/Navigation';





const SubMenuLayoutDesktop = ({ heading, menuList }) => {
    return (
        <div className="">
            {heading && <p className="text-xl font-semibold ">{heading}</p>}
            <ul className="">
                {menuList?.map((item, ind) => (
                    <Link to={item.url}> <li key={ind} className="my-3 cursor-pointer hover:underline underline-offset-2 hover:text-white"> {item.name}</li></Link>
                ))}
            </ul>
        </div>
    )
}


const AnimatedVideo = () => {

    const { isContactModal, setIsContactModal } = useContactModal()

    const outerVideoContainerRef = useRef(null);
    const collapseNavItems = useRef([]);
    const iconRef = useRef();
    const mobileMenuContainerRef = useRef(null)
    const videoScrollDownRef = useRef(null)


    const [IsHovered, setIsHovered] = useState(true)
    const [isMobileMenuVisible, setisMobileMenuVisible] = useState(false)
    const [isVideoOutOfFocus, setIsVideoOutOfFocus] = useState(false)
    const [videoLoaded, setVideoLoaded] = useState(false)


    const [subMenuOpened, setSubMenuOpened] = useState(null)



    const GetMenuItemStyle = (NavItem) =>
        `px-4 py-2 text-white font-light  hover:underline underline-offset-4 cursor-pointer
     ${NavItem === subMenuOpened ? 'underline underline-offset-4' : ''}`;



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

    const handleContactForm = () => {
        setisMobileMenuVisible(false)
        setIsContactModal(true)
    }
    const MenuList = getMenuList(handleContactForm);



    const handleSubMenu = (name) => {
        if (subMenuOpened === name) {
            setSubMenuOpened(null)
            return
        }
        setSubMenuOpened(name)

    }


    // Function to handle video hover
    const handleVideoHover = () => {

        if (isVideoOutOfFocus) {
            return
        }


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

        // if megamenu is opened dont colapse the video 
        if (subMenuOpened) {
            return
        }


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



    const MegaMenuRef = useRef(null)
    const MenuRef = useRef(null)

    useEffect(() => {

        const handleClickOutside = (event) => {
            if (window.innerWidth <= 768) {
                return
            }

            if (MegaMenuRef.current && !MegaMenuRef.current.contains(event.target) &&
                MenuRef.current && !MenuRef.current.contains(event.target)) {

                setSubMenuOpened(null)
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
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
                            src='/Videos/banner-video.mp4'
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
                    {videoLoaded && (<div className="absolute top-0 flex items-center justify-between w-full p-4 font-light text-white">
                        <Link to='/' className='block'>
                            <div className={`xl:w-56 w-48 transform translate-all duration-500 ${IsHovered ? 'opacity-100' : 'opacity-0'}`}>
                                <img src={OriginalLogo} alt="Logo" className="object-cover w-full h-full" />
                            </div>
                        </Link>

                        <div ref={MenuRef} className="relative w-auto h-12 tracking-wider rounded-lg shadow-xl flex-center bg-black/40 backdrop-blur-xl backdrop-filter">
                            <nav className="max-lg:hidden">
                                {(IsHovered || subMenuOpened) ? (
                                    <ul className="flex items-center space-x-6">
                                        {MenuList.map((menu, index) => (
                                            <li key={index} className="cursor-pointer ">
                                                {menu.url ? (
                                                    <Link to={menu.url} className={GetMenuItemStyle(menu.name)}>
                                                        {menu.name}
                                                    </Link>
                                                ) : menu.action ? (
                                                    <button
                                                        onClick={menu.action}
                                                        className={GetMenuItemStyle(menu.name)}
                                                    >
                                                        {menu.name}
                                                    </button>
                                                ) : (
                                                    <span onClick={() => handleSubMenu(menu.name)} className={GetMenuItemStyle(menu.name)}>{menu.name}</span>
                                                )}

                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <ul className="flex items-center space-x-4 ">
                                        <li>
                                            <button onClick={() => setIsContactModal(true)} className="pl-2 ">
                                                Contact
                                            </button>
                                        </li>
                                        <span ref={iconRef}>
                                            <HiMenuAlt2 className="text-4xl " />
                                        </span>
                                    </ul>
                                )}
                            </nav>

                            <nav className=' lg:hidden' >
                                <span onClick={() => setisMobileMenuVisible(!isMobileMenuVisible)} ref={iconRef} className="duration-300 translate transform-all">{isMobileMenuVisible ? (<RxCross2 className='mx-2 text-2xl text-white ' />) : (<HiMenuAlt2 className='mx-2 text-2xl text-white ' />)}</span>
                            </nav>



                            {subMenuOpened && (<div ref={MegaMenuRef} className={`absolute left-0 bg-black/60 backdrop-blur-xl backdrop-filter  transition-all duration-500 max-lg:hidden  p-5 mt-3 w-auto shadow-xl    font-extralight   rounded-xl top-full `}>
                                {subMenuOpened === 'Capabilities' && (<div className="flex max-lg:flex-col space-x-7">
                                    <SubMenuLayoutDesktop heading='Products' menuList={ProductsNavigations} />
                                    <SubMenuLayoutDesktop heading='Services' menuList={ServicesNavigations} />
                                </div>)}
                                {subMenuOpened === 'Solutions' && (
                                    <ul className="grid grid-cols-2 ">
                                        {SolutionsNavigations?.map((item, index) => (
                                            <Link to={item.url}> <li key={index} className="my-3 text-white transition-all duration-300 cursor-pointer hover:underline-offset-2 hover:underline">
                                                {item.name}
                                            </li></Link>
                                        ))}
                                    </ul>
                                )}

                            </div>)}

                        </div>
                    </div>)}



                    {/* {isMobileMenuVisible && (<div ref={mobileMenuContainerRef} className="absolute right-0 w-full text-white rounded-lg  bg-black/20 backdrop-blur-md backdrop-filter top-[67px] lg:hidden ">
                        <ul className="flex flex-col py-2 ">
                            {NavMenu.map((data, index) => (
                                <li className='my-5 ml-5 text-sm' key={index} ref={(el) => (collapseNavItems.current[index] = el)}>
                                    {data.menu === 'Contact' ? (<button onClick={() => setIsContactModal(true)} className="">{data.menu}</button>)
                                        :
                                        (<Link to={data.link} >
                                            {data.menu}
                                        </Link>)}
                                </li>
                            ))}
                        </ul>
                    </div>)} */}


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
            <ContactForm isContactModal={isContactModal} setIsContactModal={setIsContactModal} />



            {/* mobile mega menu bar  */}
            {isMobileMenuVisible && (<div className="fixed inset-0 z-50 h-screen overflow-hidden bg-black/40 backdrop-blur-xl backdrop-filter">

                <div ref={mobileMenuContainerRef} className="absolute right-0 w-full text-white rounded-lg lg:hidden ">
                    <ul className="z-40 flex flex-col w-full h-screen pt-10 pl-4 space-y-6 ">
                        {MenuList.map((menu, index) => (
                            <li key={index} className="font-semibold ">
                                {menu.url ? (
                                    <Link to={menu.url} className="">
                                        {menu.name}
                                    </Link>
                                ) : menu.action ? (
                                    <button
                                        onClick={menu.action}
                                        className="font-semibold "
                                    >
                                        {menu.name}
                                    </button>
                                ) : (
                                    <div className="w-full ">
                                        <div onClick={() => handleSubMenu(menu.name)} className="flex ">
                                            <span className="font-semibold ">{menu.name}</span>
                                            <span className="flex text-3xl " ><RiArrowDropDownLine className={` ${subMenuOpened === menu.name ? 'rotate-180' : ''} font-extralight text-2xl transition-transform duration-300 `} /></span>

                                        </div>
                                        {subMenuOpened === menu.name && (<div className="flex flex-col ">
                                            {menu.subMenu && menu.subMenu.map((data, subIndex) => (
                                                <div key={subIndex} className="mt-5 ml-4">
                                                    <span className="font-semibold ">{data.subName}</span> {/* Display subMenu name */}

                                                    <ul className="my-2 ml-2 space-y-3 ">
                                                        {data.items.map((item, itemIndex) => (
                                                            // <a key={itemIndex} href={item.url} className="block font-light ">
                                                            //     {item.name}
                                                            // </a>
                                                            <li key={itemIndex} className="flex flex-col">
                                                                <Link to={item.url} className="font-light ">
                                                                    {item.name}
                                                                </Link></li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>)}
                                    </div>
                                )}

                            </li>
                        ))}
                    </ul>
                </div>

                <nav className='absolute lg:hidden right-8 top-8' >
                    <span onClick={() => setisMobileMenuVisible(!isMobileMenuVisible)} ref={iconRef} className="duration-300 translate transform-all">{isMobileMenuVisible ? (<RxCross2 className='mx-2 text-3xl text-white ' />) : (<HiMenuAlt2 className='mx-2 text-2xl text-white ' />)}</span>
                </nav>

            </div>)}


        </div>
    )
}

export default AnimatedVideo