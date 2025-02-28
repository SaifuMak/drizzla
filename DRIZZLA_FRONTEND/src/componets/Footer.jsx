import React from 'react'
import logo from '../assets/Images/logoWhite.png'
import linkedin from '../assets/Images/linkedin.png'
import twitter from '../assets/Images/twitter.png'
import { Link } from 'react-router-dom'



const Footer = () => {

    const footerMenu = [
        { menu: 'Capabilities', link: '#' },
        { menu: 'Solutions', link: '#' },
        { menu: 'About', link: '#' },
        { menu: 'News', link: '#' },
        { menu: 'Careers', link: '#' },
        { menu: 'Contact', link: '#' },
    ]

    
    return (
        <>
        <div className="w-full flex-center ">
            <div className=" w-11/12  mt-32 bg-[#8122fe]  max-lg:text-sm ">
               
                <div className="flex-col px-5 py-10 sm:py-10 2xl:py-24 max-lg:space-y-4 2xl:px-24 lg:px-10 lg:flex-center">
                    
                    <div className="space-y-4 text-white lg:w-7/12 xl:space-y-5 2xl:space-y-2 ">
                        <p className="font-semibold lg:text-xl ">Ready to get started? Schedule  your free 25-minute consultation today</p>
                        <h1 className="text-4xl font-semibold tracking-tight lg:text-5xl xl:text-7xl 2xl:text-9xl ">Schedule a call </h1>
                        <p className="leading-relaxed lg:text-lg 2xl:pr-20">orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec augue ultricies feugiat. Nam tincidunt, nulla eget molestie lacinia, nulla justo tincidunt ligula, et vehicula dolor sapien nec lorem.</p>
                        <div className="flex items-center pt-2 2xl:pt-8">
                            <button className="px-6 py-2.5 xl:px-10 xl:py-4 text-[#8122fe]  font-semibold bg-white rounded-full ">Schedule a call now </button>
                            
                            <div className="ml-5 border-2 rounded-full border-white/80 sm:w-9 sm:h-9 w-7 h-7 xl:w-12 xl:h-12">
                                <img src={linkedin} alt="" className="object-cover p-1 sm:p-1.5 xl:p-2  " />
                            </div>
                            <div className="ml-2 border-2 rounded-full border-white/80 sm:w-9 sm:h-9 w-7 h-7 xl:w-12 xl:h-12">
                                <img src={twitter} alt="" className="object-cover p-1 sm:p-2 xl:p-3 " />
                            </div>

                        </div>

                    </div>

                    <div className=" lg:w-5/12">
                        {/* <img src={logo} alt="" className="object-cover w-full h-full " /> */}
                    </div>

                </div>

                <div className="w-full px-6 py-5 pb-4 text-white border-t xl:text-lg 2xl:text-xl xl:py-10 xl:mt-4 border-white/70 max-lg:space-y-4 max-lg:justify-center lg:justify-between lg:flex lg:items-center 2xl:px-16 lg:px-10 ">
                    <div className="w-40 xl:w-48 ">
                        <img src={logo} alt="" className="object-cover w-full h-full " />
                    </div>
                   
                    <nav>
                        <ul className="flex max-sm:flex-col max-sm:space-y-2 max-sm: max-sm:ml-1 xl:space-x-10 2xl:space-x-16 sm:space-x-6 ">
                            {footerMenu &&
                                footerMenu.map((data, index) => (
                                    <li key={index}>
                                        <Link to={data.link} className="">
                                            {data.menu}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </nav>

                    <div className="max-sm:ml-1 max-sm:text-center ">
                        <p className="">All Rights Reserved @ 2025 Drizzla</p>
                    </div>

                </div>
            </div>
            </div>
        </>
    )
}

export default Footer