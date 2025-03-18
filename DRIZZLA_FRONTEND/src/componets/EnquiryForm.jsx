import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import InputBox from './layouts/InputBox';

const EnquiryInput = ({ placeholder, label, name, value, onChange }) => {
    return (
        <div className={`flex-1   space-y-3 text-white   border-b-2 border-white font-light md:border-white/70 bg-transparent`}>
            {label && <label htmlFor="" >{label}</label>}
            <input onChange={(e) => onChange(name, e.target.value)} type="text" value={value} placeholder={placeholder} name={name} className='w-full text-xl  placeholder:text-xl  py-3  font-light  tracking-wide placeholder:text-white bg-transparent outline-none' />
        </div>
    )
}

const EnquiryForm = () => {

    const [activeTab, setActiveTab] = useState('Message us');

    const NavMenu = [
        { menu: 'Capabilities', link: '#' },
        { menu: 'Solutions', link: '#' },
        { menu: 'About', link: '#' },
        { menu: 'Careers', link: '#' },
    ]

    const [formData, setformData] = useState(
        {
            email: '',
            first_name: '',
            last_name: '',
            new_project: '',
            project_name: '',
            message: '',

        }
    )


    const handleChange = (name, value) => {
        setformData((prev) => ({
            ...prev,
            [name]: value
        }));
    }


    return (
        <div className="absolute w-full h-screen p-10 flex-center">
            <div className="w-full h-screen flex justify-between p-20 bg-black/70 backdrop-blur-md backdrop-filter">
                <div className="w-1/3 h-full bor text-white ">

                    <ul className="flex flex-col py-10 space-y-20 ">
                        {NavMenu.map((data, index) => (
                            <li className='mx-6 text-5xl 2xl:mx-8' key={index} >
                                <Link to={data.link}>{data.menu}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bor w-[500px] ">
                    <h2 className="text-[52px] text-nowrap text-white ">Let's shape what's next.</h2>
                    <div className="w-full ">
                        {/* <div className="border-b border-white/40  my-10 ">

                        </div> */}

                        <div className="relative border-b border-white/20  flex space-x-8">
                            {/* Tab 1 */}
                            <div
                                onClick={() => setActiveTab('Schedule a call now')}
                                className="relative group cursor-pointer"
                            >
                                <span className={`text-lg ${activeTab === 'Schedule a call now' ? 'text-white' : 'text-gray-400'}`}>
                                    Schedule a call now
                                </span>
                                {activeTab === 'Schedule a call now' && (
                                    <div className="absolute left-0 -bottom-0.5 h-0.5 bg-white w-full transition-all duration-700"></div>
                                )}
                            </div>

                            {/* Tab 2 */}
                            <div
                                onClick={() => setActiveTab('Message us')}
                                className="relative group cursor-pointer"
                            >
                                <span className={`text-lg ${activeTab === 'Message us' ? 'text-white' : 'text-gray-400'}`}>
                                    Message us
                                </span>
                                {activeTab === 'Message us' && (
                                    <div className="absolute left-0 -bottom-0.5 h-0.5 bg-white w-full transition-all duration-700"></div>
                                )}
                            </div>
                        </div>

                        <div className=" relative  my-2  overflow-hidden  ">
                            
                            <div className={` z-30 absolute inset-0 ${activeTab === 'Schedule a call now' ? ' translate-x-0 opacity-100' : ' translate-x-full opacity-100'} transition    duration-500 mt-4 bg-white w-full h-full   `}>
                                <img src="/Images/Discover-session.jpg" alt="Discovery-session" className=" w-full h-full" />
                            </div>

                            <div className={`space-y-5  duration-300 ${activeTab === 'Schedule a call now' ? 'opacity-0' : 'opacity-100'}`}>
                                <EnquiryInput placeholder="Email*" name="email" value={formData.email} onChange={handleChange} />

                                <div className="flex w-full max-sm:space-y-7 md:space-x-4 max-sm:flex-col ">
                                    <EnquiryInput placeholder="First name*" name="first_name" value={formData.first_name} onChange={handleChange} />
                                    <EnquiryInput placeholder="Last name*" name="last_name" type="text" value={formData.last_name} onChange={handleChange} />
                                </div>
                                <div className="flex w-full max-sm:space-y-7 md:space-x-4 max-sm:flex-col ">
                                    <EnquiryInput placeholder="New Project" name="new_project" value={formData.new_project} onChange={handleChange} />
                                    <EnquiryInput placeholder="Project name*" name="project_name" type="text" value={formData.project_name} onChange={handleChange} />
                                </div>
                                <EnquiryInput placeholder="Message*" name="message" value={formData.message} onChange={handleChange} />
                                <div className=" flex  items-center pt-2 text-white ">
                                    <input type="checkbox" className='w-4 h-4' />
                                    <p className="ml-2 mt-1 text-sm font-light">Add me to Drizzla mailing list</p>
                                </div>
                                <div className="">
                                    <button className='w-full py-3 bg-white active:bg-slate-100 rounded-full'>Send</button>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnquiryForm