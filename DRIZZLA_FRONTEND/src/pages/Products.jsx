import React, { useRef, useEffect, useState } from 'react'
import cubes from '../assets/Videos/cubes_video.mp4'
import logo from '../assets/Images/logoWhite.png'
import { FaArrowDownLong } from "react-icons/fa6";
import { BsArrowDown } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextVerticalReveal from '../componets/TextVerticalReveal';
import StickySection from '../componets/products/StickySection';
import { ProductsData } from '../datas/ProductsData';
import Footer from '../componets/Footer';
import { Link } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);


const Products = () => {

    const outerVideoContainerRef = useRef(null);
    const collapseNavItems = useRef([]);
    const iconRef = useRef();

    const [IsHovered, setIsHovered] = useState(true)

    const NavMenu = [
        { menu: 'Capabilities', link: '#' },
        { menu: 'Solutions', link: '#' },
        { menu: 'About', link: '#' },
        { menu: 'Careers', link: '#' },
        { menu: 'Contact', link: '#' },

    ]


    // Function to handle video hover
    const handleVideoHover = () => {
        let paddingLeft, paddingRight, paddingBottom;
    
        if (window.innerWidth <= 768) { // Mobile
            paddingLeft = '30px';
            paddingRight = '30px';
            paddingBottom = '40px';
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
            duration: 0.5,
            ease: "power2.out",
        });
    
        setIsHovered(true);
    };
    
    const handleVideoUnhover = () => {
        if(window.innerWidth <= 768){
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
            duration: 0.5,
            ease: "power2.out",
        });
    
        setIsHovered(false);
    };
    

    useEffect(() => {
        handleVideoHover()
    }, [])
    

    return (
        <>
            
            <div className="w-full h-screen">
                <div
                    ref={outerVideoContainerRef}
                    className="relative  h-[600px] md:h-[700px] lg:h-[800px] xl:h-[800px]  2xl:h-[900px] "
                    // style={{ paddingLeft: '170px', paddingRight: '170px', paddingBottom: '140px' }}
                >
                    {/* Scalable Container */}
                    <div onMouseEnter={handleVideoHover} onMouseLeave={handleVideoUnhover} className="relative h-full w-full   ">

                        {/* Video Container */}
                        <div className="h-full">
                            <video
                                src={cubes}
                                className="object-fill w-full h-full"
                                loop
                                autoPlay
                                muted
                            />
                        </div>

                        {/* Navbar */}
                        <div className="absolute justify-between  items-center  top-0 w-full flex p-4">
                            <div className={`xl:w-56 w-48 transform translate-all duration-500 ${IsHovered ? 'opacity-100' : 'opacity-0'}`}>
                                <img src={logo} alt="Logo" className="object-cover w-full h-full" />
                            </div>
                            <div  className="   w-auto  h-12   flex-center tracking-wider   text-white rounded-lg bg-white/20 backdrop-blur-md backdrop-filter ">
                                <nav className=' max-lg:hidden' >

                                   {IsHovered ? (
                                    <ul className="flex  ">
                                        {NavMenu.map((data, index) => (
                                            <li className='mx-6' key={index} ref={(el) => (collapseNavItems.current[index] = el)}>
                                                <Link to={data.link}>{data.menu}</Link>
                                            </li>
                                        ))}
                                    
                                    </ul>
                                   ) : (
                                    <ul className="flex items-center  ">
                                       
                                        <li className=' mx-4'>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                        <span ref={iconRef} className=""><HiMenuAlt2 className='text-white  text-4xl'/></span>

                                    </ul>
                                   )} 
                                </nav>
                                <nav className=' lg:hidden' >

                                    <ul className="flex items-center  ">
                                       
                                        <span ref={iconRef} className=""><HiMenuAlt2 className='text-white mx-2  text-2xl'/></span>
                                    </ul>
                                 
                                </nav>
                            </div>
                            
                        </div>

                        {/* Shaded Gradient  */}
                        <div className="absolute  inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/90 to-transparent" />

                        {/* Scroll Down Icon */}
                        <div className="absolute bottom-0 h-20 cursor-default  bg-gradient-to-t from-black/90 to-transparent inset-x-0 flex flex-col items-center text-white">
                            <div className=" flex flex-col mt-20 justify-center  items-center">
                                <span className="text-xl"><BsArrowDown /></span>
                                <span className="mt-1 text-sm tracking-wider"> Scroll to Explore </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="h-screen bor"></div> */}

            <TextVerticalReveal text='Go beyond chat.' secondText='Enterprise Autonomy' />

            {/* <div className="h-screen bor"></div> */}


            <div className="w-full bg-[#1F1F2D] flex-col justify-center items-center p-8 sm:p-10  lg:p-20 2xl:p-24">
                <div className="">
                    <h2 className="text-2xl font-semibold tracking-wide text-white lg:text-3xl ">Beyond Chat</h2>
                    <p className="text-[#454256] text-lg lg:text-xl">Explore AIP</p>
                </div>

                <div className="mt-5 lg:mt-10 lg:px-20 sm:px-10 2xl:px-44 xl:px-32">
                    <div className="px-6 border border-border-ash ">
                        <div className="py-2 pl-2 border-l border-r border-border-ash">
                            <h6 className=" text-sm text-[#EFEFEF]/90 ">AUTOMATION</h6>
                        </div>

                        <div className=" 2xl:h-[650px] xl:h-[550px] lg:h-[480px] border-l border-r border-t border-border-ash">
                            <video
                                src={cubes}
                                className="object-fill w-full h-full "
                                loop
                                autoPlay
                                muted
                            >
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <>
                {ProductsData && ProductsData.map((data, index) => (
                    <StickySection key={data.index} data={data} />
                ))}
            </>

            <Footer />
        </>
    )
}

export default Products


