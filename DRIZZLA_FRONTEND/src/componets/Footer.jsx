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

    const footerMenuMobile = [
        { menu: 'Capabilities', link: '#' },
        { menu: 'News', link: '#' },
        { menu: 'Solutions', link: '#' },
        { menu: 'Careers', link: '#' },
        { menu: 'About', link: '#' },
        { menu: 'Contact', link: '#' },
    ]


    return (
        <>
            <div className="w-full flex-center ">
                <div className=" md:w-11/12 md:mt-32 mt-16 bg-[#8122fe]  max-lg:text-sm ">

                    <div className="relative flex px-5 max-md:pt-10 max-md:pb-32 md:py-10 xl:py-20 2xl:py-28 max-lg:space-y-4 2xl:px-24 xl:px-10">

                        <div className="space-y-3 text-white md:space-y-4 lg:w-7/12 xl:space-y-5 2xl:space-y-2 ">
                            <p className="font-normal tracking-wide max-md:pr-20 lg:text-xl ">Ready to get started? Schedule  your free 25-minute consultation today</p>
                            <h1 className="text-5xl md:font-medium md:tracking-tight md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl ">Schedule a call </h1>
                            <p className="font-light xl:leading-relaxed md:pr-28 lg:pr-12 2xl:text-lg 2xl:pr-32">orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec augue ultricies feugiat. Nam tincidunt, nulla eget molestie lacinia, nulla justo tincidunt ligula, et vehicula dolor sapien nec lorem.</p>
                            <div className="flex items-center pt-2 2xl:pt-8">
                                <button className="px-6 py-2.5 xl:px-10 xl:py-4 text-[#8122fe]  bg-white rounded-full ">Schedule a call now </button>

                                <div className="ml-5 border-2 rounded-full border-white/80 sm:size-9 size-9 xl:size-12">
                                    <img src={linkedin} alt="" className="object-cover p-1.5 md:p-1 sm:p-1.5 xl:p-2  " />
                                </div>
                                <div className="ml-2 border-2 rounded-full border-white/80 sm:size-9 size-9 xl:size-12">
                                    <img src={twitter} alt="" className="object-cover p-2 md:p-1 sm:p-2 xl:p-3 " />
                                </div>
                            </div>
                        </div>

                        <div className="w-5/12 max-md:hidden">
                        </div>


                        <div className="w-auto  right-0  max-md:-rotate-12  max-md:bottom-5   lg:right-10 md:right-4  2xl:right-20 bottom-0 absolute h-[150px] md:h-[220px] lg:h-[300px] xl:h-[380px]  2xl:h-[430px]  ">
                            <img src='/Images/kite.svg' alt="" className="object-cover w-full h-full mt-0 " />
                        </div>

                    </div>


                    <div className="w-full px-6 py-5 pb-4 text-white border-t xl:text-lg 2xl:text-xl xl:py-10 border-white/70 max-lg:space-y-4 max-lg:justify-center lg:justify-between lg:flex lg:items-center 2xl:px-16 xl:px-10 ">
                        <div className="w-40 xl:w-48 ">
                            <img src={logo} alt="" className="object-cover w-full h-full " />
                        </div>

                        <nav>
                            {/* <ul className="flex font-medium max-sm:flex-col max-sm:space-y-2 max-sm: max-sm:ml-1 xl:space-x-10 2xl:space-x-16 sm:space-x-6 ">
                                {footerMenu &&
                                    footerMenu.map((data, index) => (
                                        <li key={index}>
                                            <Link to={data.link} className="">
                                                {data.menu}
                                            </Link>
                                        </li>
                                    ))}
                            </ul> */}
                            <ul className="flex max-lg:hidden xl:font-medium xl:space-x-6 2xl:space-x-12 lg:space-x-4">
                                {footerMenu &&
                                    footerMenu.map((data, index) => (
                                        <li key={index} >
                                            <Link to={data.link} >
                                                {data.menu}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>

                            <ul className="grid grid-cols-2 gap-4 text-base font-extralight lg:hidden ">
                                {footerMenuMobile &&
                                    footerMenuMobile.map((data, index) => (
                                        <li key={index}  >
                                            <Link to={data.link} >
                                                {data.menu}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </nav>

                        <div className="max-sm:ml-1 max-lg:pt-2 max-lg:font-extralight max-sm:text-center ">
                            <p className="">All Rights Reserved @ 2025. Drizzla.</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer