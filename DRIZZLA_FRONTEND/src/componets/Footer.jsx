import React,{useState} from 'react'
import logo from '../assets/Images/logoWhite.png'
import { Link } from 'react-router-dom'
import useContactModal from '../customHooks/useContactModal'
import ContactForm from './ContactForm'

const SocialIcons = ({ Icon, alt, url, ImageStyle }) => {
    return (
        <div className="ml-2 border-2 rounded-full border-white/80 sm:size-9 size-9 xl:size-12 ">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={Icon} alt={alt} className={ImageStyle} />

            </a>
        </div>
    )
}

const Footer = () => {

    const { isContactModal, setIsContactModal } = useContactModal()
    const [selectedTab, setSelectedTab] = useState('message')

    const footerMenu = [
        { menu: 'Capabilities', link: '/#services' },
        { menu: 'Solutions', link: '/#solutions' },
        { menu: 'About', link: '/about' },
        { menu: 'Message from the CEO', link: '/message-from-ceo' },
        { menu: 'Careers', link: '/career' },
        { menu: 'Contact', link: '#' },
    ]

    const footerMenuMobile = [
        { menu: 'Capabilities', link: '/#services' },
        { menu: 'Solutions', link: '/#solutions' },
        { menu: 'About', link: '/about' },
        { menu: 'Message from the CEO', link: '/message-from-ceo' },
        { menu: 'Careers', link: '/career' },
        { menu: 'Contact', link: '#' },
    ]


    const handleContactForm = (tab) =>{
        setSelectedTab(tab)
        setIsContactModal(true)
    }






    return (
        <>
            <div className="w-full flex-center ">
                <div className="w-full md:mt-32 mt-20 bg-[#8122fe]  max-lg:text-sm ">

                    {/* <div className="relative flex px-5 max-md:pt-10 max-md:pb-32 md:py-10 xl:py-20 2xl:py-28 max-lg:space-y-4 2xl:px-24 xl:px-10"> */}
                    <div className="relative flex px-5 overflow-hidden max-md:pt-10 max-md:pb-32 md:py-10 xl:py-20 2xl:py-28 max-lg:space-y-4 2xl:px-24 xl:px-10">


                        <div className="space-y-3 text-white md:space-y-4 lg:w-7/12 xl:space-y-5 2xl:space-y-2 ">
                            <p className="font-normal tracking-wide max-md:pr-20 lg:text-xl ">Ready to get started? Schedule your free 30-minute consultation today</p>
                            <h1 className="text-5xl md:font-medium md:tracking-tight md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl ">Schedule a call </h1>
                            <p className="font-light xl:leading-relaxed md:pr-28 lg:pr-12 2xl:text-lg 2xl:pr-32">Got a game-changing project or partnership brewing? Let's connect! We are ready to answer any questions your executive team might have and explore how can we collaborate to bring your vision to life.</p>
                            <div className="flex items-center pt-2 2xl:pt-8">
                                <button onClick={() => handleContactForm('call')} className="px-6 py-2.5 xl:px-10 xl:py-4 text-[#8122fe] mr-5  bg-white rounded-full ">Schedule a call now </button>

                                <SocialIcons Icon='/Icons/linkedin.png' alt='linkedIn' url='https://www.linkedin.com/company/drizzla/' ImageStyle='object-cover p-1.5 md:p-1 sm:p-1.5 xl:p-2  ' />
                                <SocialIcons Icon='/Icons/twitter.png' alt='twitter' url='https://x.com/Drizzla_tech' ImageStyle='object-cover p-1.5 md:p-1 sm:p-1.5 xl:p-2 ' />
                                <SocialIcons Icon='/Icons/youtube.png' alt='youtube' url='https://www.youtube.com/@Drizzla-tech' ImageStyle='object-cover p-1.5 md:p-1 sm:p-1.5 xl:p-2 ' />

                            </div>
                        </div>

                        <div className="w-5/12 max-md:hidden">
                        </div>

                        <div className="w-auto -right-1  max-md:-rotate-12  max-md:bottom-2   lg:right-10 md:right-4  2xl:right-20 bottom-0 absolute h-[90px] md:h-[220px] lg:h-[300px] xl:h-[380px]  2xl:h-[430px]  ">
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
                                            {data.menu === 'Contact' ? (<button onClick={() => handleContactForm('message')} className="">{data.menu}</button>)
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
                                            {data.menu === 'Contact' ? (<button onClick={() => handleContactForm('message')} className="">{data.menu}</button>)
                                                :
                                                (<Link to={data.link}  >
                                                    {data.menu}
                                                </Link>)}
                                        </li>
                                    ))}
                            </ul>
                        </nav>

                        <div className="max-sm:ml-1 max-lg:pt-2 max-lg:font-extralight max-sm:text-center ">
                            <p>All Rights Reserved © {new Date().getFullYear()}. Drizzla.</p>

                        </div>

                    </div>
                </div>
            </div>

            {selectedTab === 'message' &&  <ContactForm isContactModal={isContactModal} setIsContactModal={setIsContactModal} />}
            {selectedTab === 'call' &&  <ContactForm isContactModal={isContactModal} setIsContactModal={setIsContactModal} Tab='Schedule a call now' />}


        </>
    )
}

export default Footer