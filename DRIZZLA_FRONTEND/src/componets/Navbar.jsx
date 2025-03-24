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

import VideoPlayer from './general/VideoPlayer';
import useIsMobile from '../customHooks/useIsMobile'
import { useLocation } from 'react-router-dom';


const SubMenuLayoutDesktop = ({ heading, menuList }) => {
    const { pathname } = useLocation();

    return (
        <div className="w-full ">
            {heading && <p className="text-xl font-semibold ">{heading}</p>}
            <ul className="">
                {menuList?.map((item, ind) => (
                    <Link to={item.url}> <li key={ind} className={`my-3 cursor-pointer  ${pathname === item.url ? 'underline underline-offset-2' : '' } hover:underline underline-offset-2 hover:text-white`}> {item.name}</li></Link>
                ))}
            </ul>
        </div>
    )
}

const Navbar = () => {
    const { pathname } = useLocation();


    const { isContactModal, setIsContactModal } = useContactModal()
    const iconRef = useRef();
    const mobileMenuContainerRef = useRef(null)



    const [subMenuOpened, setSubMenuOpened] = useState(null)
    const [isMobileMenuVisible, setisMobileMenuVisible] = useState(false)

    const handleContactForm = () => {
        setisMobileMenuVisible(false)
        setIsContactModal(true)
    }


    const GetMenuItemStyle = (NavItem, url) =>
        `px-4 py-2 text-white font-light  hover:underline underline-offset-4 cursor-pointer
     ${NavItem === subMenuOpened ? 'underline underline-offset-4' : ''} ${pathname === url ? 'underline underline-offset-2' : '' } `;


    const MenuList = getMenuList(handleContactForm);
    const handleSubMenu = (name) => {
        if (subMenuOpened === name) {
            setSubMenuOpened(null)
            return
        }
        setSubMenuOpened(name)

    }


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

        <div className="flex flex-col items-center justify-center w-full mb-10 xl:mb-24 lg:mb-20 ">
            <div className="flex items-center justify-between w-full p-4 mt-3 font-light text-white lg:w-10/12 ">
                <Link to='/' className='block'>
                    <div className={`xl:w-56 w-48 opacity-100 `}>
                        <img src={OriginalLogo} alt="Logo" className="object-cover w-full h-full" />
                    </div>
                </Link>

                <div ref={MenuRef} className="relative w-auto h-12 tracking-wider rounded-lg shadow-xl flex-center bg-black/40 backdrop-blur-xl backdrop-filter">
                    <nav className="max-lg:hidden">

                        <ul className="flex items-center space-x-6">
                            {MenuList.map((menu, index) => (
                                <li key={index} className="cursor-pointer ">
                                    {menu.url ? (
                                        <Link to={menu.url} className={GetMenuItemStyle(menu.name , menu.url)}>
                                            {menu.name}
                                        </Link>
                                    ) : menu.action ? (
                                        <button
                                            onClick={menu.action}
                                            className={GetMenuItemStyle(menu.name , menu.url)}
                                        >
                                            {menu.name}
                                        </button>
                                    ) : (
                                        <span onClick={() => handleSubMenu(menu.name)} className={GetMenuItemStyle(menu.name , menu.url)}>{menu.name}</span>
                                    )}

                                </li>
                            ))}
                        </ul>

                    </nav>

                    <nav className=' lg:hidden' >
                        <span onClick={() => setisMobileMenuVisible(!isMobileMenuVisible)} ref={iconRef} className="duration-300 translate transform-all">{isMobileMenuVisible ? (<RxCross2 className='mx-2 text-2xl text-white ' />) : (<HiMenuAlt2 className='mx-2 text-2xl text-white ' />)}</span>
                    </nav>



                    {subMenuOpened && (<div ref={MegaMenuRef} className={`absolute left-0 bg-black backdrop-blur-xl backdrop-filter  transition-all duration-500 max-lg:hidden  p-5 mt-3 w-auto shadow-xl    font-extralight   rounded-xl top-full `}>
                        {subMenuOpened === 'Capabilities' && (<div className="flex max-lg:flex-col space-x-7">
                            <SubMenuLayoutDesktop heading='Products' menuList={ProductsNavigations} />
                            <SubMenuLayoutDesktop heading='Services' menuList={ServicesNavigations} />
                        </div>)}

                        {subMenuOpened === 'Solutions' && (
                            <ul className="grid grid-cols-2 ">
                                {SolutionsNavigations?.map((item, index) => (
                                    <Link to={item.url}> <li key={index} className={` my-3  ${pathname === item.url ? 'underline underline-offset-2' : '' } text-white transition-all duration-300 cursor-pointer hover:underline-offset-2 hover:underline`}>
                                        {item.name}
                                    </li></Link>
                                ))}
                            </ul>
                        )}

                    </div>)}

                </div>


                {/* mobile mega menu bar  */}
                {isMobileMenuVisible && (<div className="fixed inset-0 z-50 h-screen overflow-hidden bg-black/40 backdrop-blur-xl backdrop-filter">

                    <div ref={mobileMenuContainerRef} className="absolute right-0 w-full text-white rounded-lg lg:hidden ">
                        <ul className="z-40 flex flex-col w-full h-screen pt-10 pl-4 space-y-6 ">
                            {MenuList.map((menu, index) => (
                                <li key={index} className="font-semibold ">
                                    {menu.url ? (
                                        <Link to={menu.url} className={`${pathname === menu.url ? 'underline underline-offset-2' : '' }`}>
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
                                        <div className="w-full">
                                            <div onClick={() => handleSubMenu(menu.name)} className="flex cursor-pointer">
                                                <span className="font-semibold">{menu.name}</span>
                                                <span className="flex text-3xl">
                                                    <RiArrowDropDownLine
                                                        className={` ${subMenuOpened === menu.name ? 'rotate-180' : ''} 
                                                            font-extralight text-2xl transition-transform duration-300`}
                                                    />
                                                </span>
                                            </div>

                                            <div
                                                className={`overflow-hidden transition-all duration-1000 ease-in-out 
                                                  ${subMenuOpened === menu.name ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                            >
                                                {menu.subMenu &&
                                                    menu.subMenu.map((data, subIndex) => (
                                                        <div key={subIndex} className="mt-5 ml-4">
                                                            <span className="font-semibold">{data.subName}</span>
                                                            <ul className="my-2 ml-2 space-y-3">
                                                                {data.items.map((item, itemIndex) => (
                                                                    <li key={itemIndex} className="flex flex-col">
                                                                        <Link to={item.url} className={`${pathname === item.url ? 'underline underline-offset-2' : '' } font-light`}>
                                                                            {item.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                            </div>
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

            <ContactForm isContactModal={isContactModal} setIsContactModal={setIsContactModal} />

        </div>

    )

}


export default Navbar