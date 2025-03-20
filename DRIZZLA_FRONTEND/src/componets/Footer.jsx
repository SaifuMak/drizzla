import React from 'react'
import logo from '../assets/Images/logoWhite.png'
import { Link } from 'react-router-dom'
import useContactModal from '../customHooks/useContactModal'
import ContactForm from './ContactForm'

const SocialIcons = ({ Icon, alt, url, ImageStyle }) => {
    return (
        <div className="ml-2 border-2 rounded-full border-white/80 sm:size-9 size-9 xl:size-12 z-30">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={Icon} alt={alt} className={ImageStyle} />

            </a>
        </div>
    )
}

const Footer = () => {

    const { isContactModal, setIsContactModal } = useContactModal()


    const footerMenu = [
        { menu: 'Capabilities', link: '/' },
        { menu: 'Solutions', link: '/#solutions' },
        { menu: 'About', link: '/about' },
        { menu: 'Careers', link: '/career' },
        { menu: 'Contact', link: '#' },
    ]

    const footerMenuMobile = [
        { menu: 'Capabilities', link: '/' },
        { menu: 'Solutions', link: '/#solutions' },
        { menu: 'Careers', link: '/about' },
        { menu: 'About', link: '/career' },
        { menu: 'Contact', link: '#' },
    ]






    return (
        <>
            <div className="w-full flex-center ">
                <div className="w-full md:mt-32 mt-20 bg-[#8122fe]  max-lg:text-sm ">

                    {/* <div className="relative flex px-5 max-md:pt-10 max-md:pb-32 md:py-10 xl:py-20 2xl:py-28 max-lg:space-y-4 2xl:px-24 xl:px-10"> */}
                    <div className="relative flex px-5 max-md:pt-10 max-md:pb-32 md:py-10 xl:py-20 2xl:py-28 max-lg:space-y-4 2xl:px-24 xl:px-10">


                        <div className="space-y-3 text-white md:space-y-4 lg:w-7/12 xl:space-y-5 2xl:space-y-2 ">
                            <p className="font-normal tracking-wide max-md:pr-20 lg:text-xl ">Ready to get started? Schedule  your free 25-minute consultation today</p>
                            <h1 className="text-5xl md:font-medium md:tracking-tight md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl ">Schedule a call </h1>
                            <p className="font-light xl:leading-relaxed md:pr-28 lg:pr-12 2xl:text-lg 2xl:pr-32">orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec augue ultricies feugiat. Nam tincidunt, nulla eget molestie lacinia, nulla justo tincidunt ligula, et vehicula dolor sapien nec lorem.</p>
                            <div className="flex items-center pt-2 2xl:pt-8">
                                <button onClick={() => setIsContactModal(true)} className="px-6 py-2.5 xl:px-10 xl:py-4 text-[#8122fe]  bg-white rounded-full ">Schedule a call now </button>


                                <SocialIcons Icon='/Icons/linkedin.png' alt='linkedIn' url='https://www.linkedin.com/company/drizzla/' ImageStyle='object-cover p-1.5 md:p-1 sm:p-1.5 xl:p-2  ' />
                                <SocialIcons Icon='/Icons/twitter.png' alt='twitter' url='https://x.com/Drizzla_tech' ImageStyle='object-cover p-1.5 md:p-1 sm:p-1.5 xl:p-2 ' />
                                <SocialIcons Icon='/Icons/youtube.png' alt='youtube' url='https://www.youtube.com/@Drizzla-tech' ImageStyle='object-cover p-1.5 md:p-1 sm:p-1.5 xl:p-2 ' />

                                {/* <div className="md:ml-5 max-sm:ml-2 border-2 rounded-full border-white/80 sm:size-9 size-9 xl:size-12">
                                    <a href="https://www.linkedin.com/company/drizzla/" target="_blank" rel="noopener noreferrer">
                                        <img src={linkedin} alt="linkedIn" className="object-cover p-1.5 md:p-1 sm:p-1.5 xl:p-2  " />

                                    </a>
                                </div>

                                <div className="ml-2 border-2 rounded-full border-white/80 sm:size-9 size-9 xl:size-12">
                                    <a href="https://x.com/Drizzla_tech" target="_blank" rel="noopener noreferrer">
                                        <img src={twitter} alt="twitter" className="object-cover p-2 md:p-1 sm:p-2 xl:p-3 " />
                                    </a>
                                </div>

                                <div className="ml-2 border-2 rounded-full border-white/80 sm:size-9 size-9 xl:size-12">
                                    <a href="https://www.youtube.com/@Drizzla-tech" target="_blank" rel="noopener noreferrer">
                                        <img src='/Icons/youtube.png' alt="youtube" className="object-cover p-2 md:p-1 sm:p-2 xl:p-2 " />

                                    </a>
                                </div> */}
                            </div>
                        </div>

                        <div className="w-5/12 max-md:hidden">
                        </div>


                        <div className="w-auto -right-1  max-md:-rotate-12  max-md:bottom-5   lg:right-10 md:right-4  2xl:right-20 bottom-0 absolute h-[130px] md:h-[220px] lg:h-[300px] xl:h-[380px]  2xl:h-[430px]  ">
                            <img src='/Images/kite.svg' alt="" className="object-cover w-full h-full mt-0 " />
                        </div>


                    </div>


                    <div className="w-full px-6 py-5 pb-4 text-white border-t xl:text-lg 2xl:text-xl xl:py-10 border-white/70 max-lg:space-y-4 max-lg:justify-center lg:justify-between lg:flex lg:items-center 2xl:px-16 xl:px-10 ">
                        <Link to='/' className='block'>

                            <div className="w-40 xl:w-48 ">
                                <img src={logo} alt="" className="object-cover w-full h-full " />
                            </div>
                        </Link>

                        <nav>


                            <ul className="flex max-lg:hidden xl:font-medium xl:space-x-6 2xl:space-x-12 lg:space-x-4">
                                {footerMenu &&
                                    footerMenu.map((data, index) => (
                                        <li key={index} >
                                            {data.menu === 'Contact' ? (<button onClick={() => setIsContactModal(true)} className="">{data.menu}</button>)
                                                :
                                                (<Link to={data.link} >
                                                    {data.menu}
                                                </Link>)}
                                        </li>
                                    ))}
                            </ul>



                            <ul className="grid grid-cols-2 gap-4 text-base font-extralight lg:hidden ">
                                {footerMenuMobile &&
                                    footerMenuMobile.map((data, index) => (
                                        <li key={index} >
                                            {data.menu === 'Contact' ? (<button onClick={() => setIsContactModal(true)} className="">{data.menu}</button>)
                                                :
                                                (<Link to={data.link}  >
                                                    {data.menu}
                                                </Link>)}
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
            <ContactForm isContactModal={isContactModal} setIsContactModal={setIsContactModal} />

        </>
    )
}

export default Footer