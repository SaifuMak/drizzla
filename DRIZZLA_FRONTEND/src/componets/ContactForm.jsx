import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import InputBox from './layouts/InputBox';
import OriginalLogo from '../assets/Images/logoOriginal.png'
import { RxCross2 } from "react-icons/rx";

import CalendlyWidget from './CalendlyWidget';
import Dropdown from './layouts/Dropdown';
import { RiArrowDropDownLine } from "react-icons/ri";
import { useLocation } from 'react-router-dom';

const EnquiryInput = ({ placeholder, label, name, value, onChange }) => {


    return (
        <div className={`flex-1  py-2  space-y-0 text-white   border-b-2 border-white font-thin  border-white/50 bg-transparent`}>
            {label && <label htmlFor="" >{label}</label>}
            <input onChange={(e) => onChange(name, e.target.value)} type="text" value={value} placeholder={placeholder} name={name} className='w-full tracking-wide bg-transparent outline-none md:text-xl font-extralight md:placeholder:text-xl placeholder:text-white' />
        </div>
    )
}


const ContactDropDown = ({ isFullWidth = false, label, dropdownRef, handleOptionSelection, setDropdown, name, value, toggle, isOpened, options, isRangeApplied = false }) => {

    return (
        <div className={`flex transition-all  py-2 border-b border-white   duration-500 ease-in-out  ${isOpened ? 'z-50  ' : 'z-10'} flex-col ${isFullWidth ? ' w-full' : 'w-1/2'}`}>
            {label && <h6 className="mb-4 text-white">{label}</h6>}

            <div ref={dropdownRef} onClick={(e) => { e.stopPropagation(); toggle(name) }} className="relative w-full cursor-pointer md:border-white/70">
                <div className="flex items-center justify-between mt-0">
                    <p className="text-white md:text-xl font-extralight">{value}</p>
                    <span className="flex justify-end text-3xl text-white " role='button'><RiArrowDropDownLine className={` ${isOpened ? 'rotate-180' : ''} font-extralight text-2xl transition-transform duration-300 `} /></span>
                </div>

                <ul className={` absolute overflow-hidden transition-all   duration-500 ease-in-out  bg-slate-100   ${isOpened ? 'max-h-[180px] opacity-100  z-50 ' : 'max-h-0 opacity-0 z-10'}   w-full py-1 mt-2  overflow-y-auto bg-black   `}
                    onWheel={(e) => e.stopPropagation()}
                    onTouchMove={(e) => e.stopPropagation()}>

                    {options?.map((option, index) => (
                        <li onClick={() => handleOptionSelection(name, option)} key={index} className={`relative py-2 ${value === option ? 'bg-slate-300' : ''} transition-all duration-100 md:pl-2  `}>{(option > 5 && isRangeApplied) ? <>{option}<span className='absolute ml-0.5 text-sm top-1'>+</span>
                        </> : option}</li>
                    ))}
                </ul>

            </div>
        </div>



    )
}



const ContactForm = ({ isContactModal, setIsContactModal, Tab = null }) => {

    const {pathname} = useLocation()

    const [activeTab, setActiveTab] = useState('Message us');
    const modalRef = useRef(null)
    const projectRef = useRef(null)
    const [activeDropdown, setactiveDropdown] = useState(null)

    const handleDropdown = (name) => {
        setactiveDropdown(activeDropdown === name ? null : name);
    };


    const ProjectOptions = ['New Project', 'Careers', 'Just a message',]


    const NavMenu = [
        { menu: 'Capabilities', link: '/' },
        { menu: 'Solutions', link: '/#solutions' },
        { menu: 'About', link: '/about' },
        { menu: 'Careers', link: '/career' },
    ]


    const [formData, setformData] = useState(
        {
            email: '',
            first_name: '',
            last_name: '',
            new_project: 'New Project',
            project_name: '',
            message: '',

        }
    )

    const handleOptionSelection = (name, value) => {
        setformData((prev) => ({
            ...prev,
            [name]: value,
            other_location: value === "Others" ? prev.other_location : ""
        }));
    }


    const handleChange = (name, value) => {
        setformData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    useEffect(() => {

        if (Tab) {
            setActiveTab(Tab)
        }

    }, [])



    useEffect(() => {
        const handleClickOutside = (event) => {
            // alert('clicked outside ')

            if (modalRef.current && !modalRef.current.contains(event.target)) {

                setIsContactModal(false);
            }

        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    useEffect(() => {
        const handleClickOutside = (event) => {
            // alert('clicked outside ')

            if (projectRef.current && !projectRef.current.contains(event.target)) {
                setactiveDropdown(null)
            }

        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);




    return (
        <>
            <div className={` fixed inset-0 flex   z-50  justify-center items-center   ${isContactModal ? '  ' : ' pointer-events-none  '} ease-in-out  transition-all  duration-100 w-full max-md:min-h-[80vh] max-md:h-auto md:max-h-full  `}>
                <div ref={modalRef} className={`md:justify-between   ${isContactModal ? ' opacity-100 ' : ' pointer-events-none opacity-0 '} max-sm:relative  z-40 items-center max-md:min-h-[80vh] max-sm:py-10 max-md:max-h-[90vh] md:max-h-[90vh] px-5 md:px-10 md:py-20 border-2 rounded-xl border-white/30  transition-all duration-500 max-md:flex-col md:w-11/12 md:flex md:space-x-10 bg-black/10 backdrop-blur-md backdrop-filter  xl:px-12 xl:py-20 2xl:px-20  `}>
                    <div className="text-white md:h-full max-sm:hidden max-sm:w-full md:w-1/3 2xl:mt-10 ">
                        <div className="">
                            <img src={OriginalLogo} alt="logo" className="w-auto h-16 " />
                        </div>
                        <ul className="flex mt-10 max-sm:space-x-10 md:space-y-20 md:flex-col xl:mt-20 2xl:mt-24 xl:space-y-20 2xl:space-y-28 ">
                            {NavMenu.map((data, index) => (
                                <li className={`text-xl md:text-3xl 2xl:text-5xl xl:text-4xl font-extralight ${pathname === data.link ? ' font-semibold' : '' }`} key={index} >
                                    <Link to={data.link} onClick={() => setIsContactModal(false)}>{data.menu}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="flex flex-col items-center justify-center 2xl:mt-16 xl:mt-10 ">
                        <h2 className="2xl:text-[58px] xl:text-5xl lg:text-4xl max-sm:text-center text-2xl md:text-nowrap text-white ">Let's shape what's next.</h2>
                        <div className=" mt-1 md:mt-10  w-full lg:w-[480px] ">
                            {/* <div className="my-10 border-b border-white/40 ">

                        </div> */}

                            <div className="relative flex space-x-8 font-light border-b max-sm:mt-3 border-white/20">
                                {/* Tab 1 */}
                                <div
                                    onClick={() => setActiveTab('Schedule a call now')}
                                    className="relative cursor-pointer group"
                                >
                                    <span className={`md:text-lg ${activeTab === 'Schedule a call now' ? 'text-white' : 'text-gray-200'}`}>
                                        Schedule a call now
                                    </span>
                                    {activeTab === 'Schedule a call now' && (
                                        <div className="absolute left-0 -bottom-0.5 h-0.5 bg-white w-full transition-all duration-700"></div>
                                    )}
                                </div>

                                {/* Tab 2 */}
                                <div
                                    onClick={() => setActiveTab('Message us')}
                                    className="relative cursor-pointer group"
                                >
                                    <span className={`md:text-lg ${activeTab === 'Message us' ? 'text-white' : 'text-gray-200'}`}>
                                        Message us
                                    </span>
                                    {activeTab === 'Message us' && (
                                        <div className="absolute left-0 -bottom-0.5 h-0.5 bg-white w-full transition-all duration-700"></div>
                                    )}
                                </div>
                            </div>

                            <div className="relative my-2 mt-10 overflow-hidden   max-sm:min-w-[300px]  xl:mt-10 2xl:mt-16 ">

                                <div className={` z-30  absolute inset-0 ${activeTab === 'Schedule a call now' ? ' translate-x-0 opacity-100' : ' translate-x-full   opacity-100'} transition    duration-500 md:mt-4 bg-white w-full h-full   `}>
                                    {/* <img src="/Images/Discover-session.jpg" alt="Discovery-session" className="w-full h-full " /> */}
                                    < CalendlyWidget />

                                </div>


                                <div className={`md:space-y-8  space-y-4 duration-300 ${activeTab === 'Schedule a call now' ? 'opacity-0' : 'opacity-100'}`}>
                                    <EnquiryInput placeholder="Email*" name="email" value={formData.email} onChange={handleChange} />

                                    <div className="flex w-full max-sm:space-y-4 md:space-x-4 max-sm:flex-col ">
                                        <EnquiryInput placeholder="First name*" name="first_name" value={formData.first_name} onChange={handleChange} />
                                        <EnquiryInput placeholder="Last name*" name="last_name" type="text" value={formData.last_name} onChange={handleChange} />
                                    </div>

                                    <div className="flex items-center w-full max-sm:space-y-4 md:space-x-4 max-sm:flex-col ">
                                        {/* <EnquiryInput placeholder="New Project" name="new_project" value={formData.new_project} onChange={handleChange} /> */}
                                        {/* <contactDropDown toggle={handleDropdown} handleOptionSelection={handleChange} isFullWidth={true} label='New project' dropdownRef={projectRef}  setDropdown={setactiveDropdown} name={formData.new_project} value={formData.new_project}  isOpened={true} options={ProjectOptions} /> */}
                                        <ContactDropDown toggle={handleDropdown} handleOptionSelection={handleOptionSelection} dropdownRef={projectRef} setDropdown={setactiveDropdown} name='new_project' value={formData.new_project} isOpened={activeDropdown === 'new_project'} options={ProjectOptions} />

                                        {formData.new_project === 'New Project' && <EnquiryInput placeholder="Project name*" name="project_name" type="text" value={formData.project_name} onChange={handleChange} />}
                                    </div>


                                    <EnquiryInput placeholder="Message*" name="message" value={formData.message} onChange={handleChange} />

                                    <div className="flex items-center pt-2 text-white ">
                                        <input type="checkbox" className='w-4 h-4' />
                                        <p className="mt-1 ml-2 text-sm font-light">Add me to Drizzla mailing list</p>
                                    </div>

                                    <div className="">
                                        <button className='w-full py-3 bg-white rounded-full active:bg-slate-100'>Send</button>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                    <span onClick={() => setIsContactModal(false)} className="absolute top-4 right-4 lg:hidden"><RxCross2 className='text-3xl text-white' /></span>

                </div>
            </div>
        </>
    )
}

export default ContactForm