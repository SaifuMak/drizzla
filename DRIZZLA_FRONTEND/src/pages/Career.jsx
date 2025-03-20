import React, { useState, useRef, useEffect } from 'react'
import Dropdown from '../componets/layouts/Dropdown';
import InputBox from '../componets/layouts/InputBox';
import AnimatedVideo from '../componets/AnimatedVideo';
import Footer from '../componets/Footer';


const Career = () => {

    const [activeDropdown, setactiveDropdown] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null);
    const roleRef = useRef(null)
    const experienceYearsRef = useRef(null)
    const experienceMonthsRef = useRef(null)


    const handleDropdown = (name) => {
        setactiveDropdown(activeDropdown === name ? null : name);
    };

    const handleOptionSelection = (name, value) => {
        setformData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file.name); // Set the selected file name
        }
    };


    const [formData, setformData] = useState(
        {
            role: '',
            name: '',
            email: '',
            phone: '',
            current_city: '',
            experience_years: '0',
            experience_months: '0',
            preferred_location: '',
            captcha: ''
        }
    )


    useEffect(() => {
        const handleClickOutside = (event) => {

            if (roleRef.current && !roleRef.current.contains(event.target) &&
                experienceYearsRef.current && !experienceYearsRef.current.contains(event.target)
                && experienceMonthsRef.current && !experienceMonthsRef.current.contains(event.target)) {

                setactiveDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const CareerOptions = ["Developer", "Designer", "Marketer", "Product Manager", "Data Scientist", "SEO Specialist"];
    const experienceYearsOptions = ["1", "2", "3", "4", "5 plus", "10 plus", "15 plus", "20 plus"];

    const experienceMonthsOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];


    const handleChange = (name, value) => {
        setformData((prev) => ({
            ...prev,
            [name]: value
        }));
    }



    return (
        <>
            <AnimatedVideo />

            <div className="flex  flex-col  items-center justify-center my-10 text-lg-custom font-light text-white md:my-20">
                <div className="flex-col w-10/12 lg:w-8/12 flex-center ">
                    <h2 className="text-3xl 2xl:text-4xl font-semibold text-center ">Build the future with us. (And have a blast doing it.)</h2>

                    <div className="flex flex-col justify-start w-full mt-10 space-y-5 lg:space-y-10 ">

                        <div className="">
                            <p className="mb-2  font-medium tracking-wide text-lg">Applying for</p>

                            <Dropdown toggle={handleDropdown} handleOptionSelection={handleOptionSelection} dropdownRef={roleRef} setDropdown={setactiveDropdown} name='role' value={formData.role} isOpened={activeDropdown === 'role'} options={CareerOptions} />
                        </div>

                        <div className="flex w-full max-sm:space-y-7 md:space-x-4 max-sm:flex-col ">
                            <InputBox placeholder="Name*" name="name" value={formData.name} onChange={handleChange} />
                            <InputBox placeholder="Email*" name="email" type="email" value={formData.email} onChange={handleChange} />
                        </div>

                        <div className="flex w-full max-sm:space-y-7 md:space-x-4 max-sm:flex-col ">
                            <InputBox placeholder="Phone*" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                            <InputBox placeholder="Current City*" name="current_city" value={formData.current_city} onChange={handleChange} />
                        </div>

                        <div className="flex flex-col max-sm:pt-3">
                            <p className="  font-medium tracking-wide text-lg">Experience</p>
                            <div className="flex w-full mt-4 max-sm:space-y-7 md:space-x-4 max-sm:flex-col ">
                                <Dropdown toggle={handleDropdown} handleOptionSelection={handleOptionSelection} label='Yrs' dropdownRef={experienceYearsRef} isRangeApplied={true} setDropdown={setactiveDropdown} name='experience_years' value={formData.experience_years} isOpened={activeDropdown === 'experience_years'} options={experienceYearsOptions} />
                                <Dropdown toggle={handleDropdown} handleOptionSelection={handleOptionSelection} label='Months' dropdownRef={experienceMonthsRef} setDropdown={setactiveDropdown} name='experience_months' value={formData.experience_months} isOpened={activeDropdown === 'experience_months'} options={experienceMonthsOptions} />
                            </div>

                        </div>

                        <div className="">
                            <InputBox placeholder="" label='Preferred Location' name="preferred_location" value={formData.preferred_location} onChange={handleChange} />
                        </div>

                        <div className="">
                            <p className="">Attach your Resume (pdf/docx Only, not more than 2MB)</p>
                            <div className="flex items-center mt-2 md:space-x-2">
                                {/* Hidden input for file selection */}
                                <input
                                    type="file"
                                    id="resume-upload"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                {/* Custom button to trigger file input */}
                                <label htmlFor="resume-upload" className="px-2 md:py-0.5 py-1 text-center  max-sm:text-sm text-black bg-white rounded-md cursor-pointer">
                                    Choose File
                                </label>
                                {/* Display selected file name */}
                                <p className="ml-2 font-extralight">{selectedFile ? selectedFile : "No file chosen"}</p>
                            </div>
                        </div>

                        <div className="w-full h-[1px] bg-white/70"></div>

                        <div className="flex items-center max-sm:pt-2 ">
                            <div className="w-[305px] flex-center h-[50px] lg:h-[65px] gradient-bg">
                                <p className="text-3xl font-normal tracking-widest text-black ">S 4 R 5 0 G R</p>
                            </div>
                            <div className="ml-3 cursor-pointer w-7 h-7  ">
                                <img src="/Images/recycle-icon.svg" alt="" className="" />
                            </div>

                        </div>

                        <div className="flex flex-col ">
                            <label htmlFor="text" className="mb-4">Enter the text shown in the picture</label>
                            <InputBox placeholder="" name="captcha" value={formData.captcha} onChange={handleChange} />

                        </div>

                        <div className="w-full flex-center ">
                            <button className='md:px-10  mt-4 md:py-2.5 max-sm:w-full max-sm:py-4 font-normal text-black bg-white rounded-3xl '>Submit Now</button>
                        </div>



                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Career