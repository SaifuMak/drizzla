import React, { useState, useRef, useEffect } from 'react'
import Dropdown from '../componets/layouts/Dropdown';
// import InputBox from '../componets/layouts/InputBox';
import AnimatedVideo from '../componets/AnimatedVideo';
import Footer from '../componets/Footer';
import Navbar from '../componets/Navbar';
import { CareerOptions, locationPreferences } from '../datas/Career';


import { ToastContainer, toast } from "react-toastify";
import { validateEmail } from '../datas/Validations';




const InputBox = ({ isFullWidth = false, label, name, value, placeholder, onChange, onBlur, error, type = "text" }) => {


    return (

        <div className={`${isFullWidth ? ' w-full' : 'w-1/2'} max-sm:w-full`}>
            <div className={` flex-1   space-y-2  border-b border-white md:border-white/70 bg-transparent`}>
                {label && <label htmlFor="" >{label}</label>}
                <input onChange={(e) => onChange(name, e.target.value)}

                    type={type}
                    value={value}
                    placeholder={placeholder}
                    name={name}
                    onBlur={() => onBlur(name, value)}
                    className='w-full text-lg placeholder-white bg-transparent outline-none placeholder:font-extralight' required />

            </div>
            {error && value && (<span className="text-red-500 max-xl:text-xs ">{error}</span>)}

        </div>
    )
}

const Career = () => {

    const [activeDropdown, setactiveDropdown] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null);
    const roleRef = useRef(null)
    const experienceYearsRef = useRef(null)
    const experienceMonthsRef = useRef(null)
    const locationRef = useRef(null)

    const [istriedSubmitting, setIstriedSubmitting] = useState(false)


    const [Captcha, setCaptcha] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const handleDropdown = (name) => {
        setactiveDropdown(activeDropdown === name ? null : name);
    };

    const handleOptionSelection = (name, value) => {
        setformData((prev) => ({
            ...prev,
            [name]: value,
            other_location: value === "Others" ? prev.other_location : ""
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
            other_location: '',
            captcha: ''
        }
    )


    const [errors, setErrors] = useState(
        {
            name: '',
            email: '',
            phone: '',
            current_city: '',
            preferred_location: '',
            other_location: '',
            captcha: ''
        }
    )


    // const handleErrors = (name, value) => {
    //     setErrors((prev) => ({
    //         ...prev,
    //         [name]: value
    //     }));
    // }


    const handleBlur = (field, value) => {
        let errorMessage = "";

        if (field === "email") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                errorMessage = "Please enter a valid email";
            }
        }

        if (field === "phone") {
            const phonePattern = /^[0-9]*$/; // Allows only digits (any length)
            if (!phonePattern.test(value)) {
                errorMessage = "Phone number should contain only numbers";
            }
        }


        if (field === "captcha") {
            const givenCaptcha = Captcha.replace(/\s+/g, "");
            // console.log(cleanedCaptcha, formData.captcha);
            if (value !== givenCaptcha) {
                errorMessage = "Entered captcha is incorrect";

            }

        }



        setErrors((prev) => ({ ...prev, [field]: errorMessage }));
    };



    const validateFields = () => {

        let isError = false

        const response = validateEmail(formData.email)
        isError = response

        const cleanedCaptcha = Captcha.replace(/\s+/g, "");

        if (formData.captcha !== cleanedCaptcha) {
            isError = true
        }

        const phonePattern = /^[0-9]*$/; // Allows only digits (any length)

        if (!phonePattern.test(formData.phone)) {
            isError = true

        }

        return isError

    }


    useEffect(() => {
        const handleClickOutside = (event) => {

            if (roleRef.current && !roleRef.current.contains(event.target) &&
                experienceYearsRef.current && !experienceYearsRef.current.contains(event.target)
                && experienceMonthsRef.current && !experienceMonthsRef.current.contains(event.target)
                && locationRef.current && !locationRef.current.contains(event.target)) {

                setactiveDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    const experienceYearsOptions = ["1", "2", "3", "4", "5+", "10+", "15+", "20+"];

    const experienceMonthsOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];


    const handleChange = (name, value) => {
        setformData((prev) => ({
            ...prev,
            [name]: value
        }));

    }

    const generateRandomText = (length = 7) => {

        setIsLoading(true)


        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";

        for (let i = 0; i < length; i++) {
            result += chars[Math.floor(Math.random() * chars.length)] + " ";
        }

        setTimeout(() => {
            setCaptcha(result.trim())
            setIsLoading(false)

        }, 500);

    };


    const handleSubmittedData = (e) => {
        e.preventDefault();
        const hasErrors = Object.values(errors).some((error) => error !== "");
        // if (hasErrors) {
        //     return
        // }

        if (validateFields()) {
            return
        }
        setformData(
            {
                role: '',
                name: '',
                email: '',
                phone: '',
                current_city: '',
                experience_years: '0',
                experience_months: '0',
                preferred_location: '',
                other_location: '',
                captcha: ''
            }
        )
        toast.success("Email has sent successfully!");


    }

    useEffect(() => {
        generateRandomText()
    }, [])




    return (
        <>
            {/* <AnimatedVideo /> */}
            <Navbar />

            <div className="flex flex-col items-center justify-center my-10 font-light text-white text-lg-custom md:my-20 2xl:pt-12 xl:pt-6">
                <div className="flex-col w-10/12 lg:w-10/12 2xl:w-8/12 flex-center ">

                    <h2 className="text-3xl text-center 2xl:text-4xl "><span className="font-semibold ">Build the future with us.</span> (And have a blast doing it!)</h2>

                    <form onSubmit={handleSubmittedData} className='w-full'>
                        <div className="flex flex-col justify-start w-full mt-10 space-y-5 lg:space-y-7 2xl::space-y-10 ">

                            <div className="">
                                <p className="mb-2 text-lg font-medium tracking-wide">Applying for</p>

                                <Dropdown isFullWidth={true} toggle={handleDropdown} handleOptionSelection={handleOptionSelection} dropdownRef={roleRef} setDropdown={setactiveDropdown} name='role' value={formData.role} isOpened={activeDropdown === 'role'} options={CareerOptions} />
                            </div>


                            <div className="flex w-full max-sm:space-y-7 md:space-x-4 max-sm:flex-col ">
                                <InputBox placeholder="Name*" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} />

                                <InputBox placeholder="Email*" name="email" type="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} error={errors.email} />
                            </div>

                            <div className="flex w-full max-sm:space-y-7 md:space-x-4 max-sm:flex-col ">
                                <InputBox placeholder="Phone*" name="phone" type="tel" value={formData.phone} onChange={handleChange} onBlur={handleBlur} error={errors.phone} />
                                <InputBox placeholder="Current City*" name="current_city" value={formData.current_city} onChange={handleChange} onBlur={handleBlur} />
                            </div>

                            <div className="flex flex-col max-sm:pt-3">
                                <p className="text-lg font-medium tracking-wide ">Experience</p>
                                <div className="flex w-full mt-4 max-sm:space-y-7 md:space-x-4 max-sm:flex-col ">
                                    <Dropdown toggle={handleDropdown} handleOptionSelection={handleOptionSelection} label='Yrs' dropdownRef={experienceYearsRef} isRangeApplied={true} setDropdown={setactiveDropdown} name='experience_years' value={formData.experience_years} isOpened={activeDropdown === 'experience_years'} options={experienceYearsOptions} />
                                    <Dropdown toggle={handleDropdown} handleOptionSelection={handleOptionSelection} label='Months' dropdownRef={experienceMonthsRef} setDropdown={setactiveDropdown} name='experience_months' value={formData.experience_months} isOpened={activeDropdown === 'experience_months'} options={experienceMonthsOptions} />
                                </div>

                            </div>



                            <div className="flex w-full max-sm:space-y-7 md:space-x-4 max-sm:flex-col ">
                                <Dropdown toggle={handleDropdown} handleOptionSelection={handleOptionSelection} label='Preferred Location ' dropdownRef={locationRef} setDropdown={setactiveDropdown} name='preferred_location' value={formData.preferred_location === "Others" ? formData.other_location : formData.preferred_location} isOpened={activeDropdown === 'preferred_location'} options={locationPreferences} />
                                {formData.preferred_location === 'Other' && <InputBox placeholder="" label='Specify your location' name="other_location" value={formData.other_location} onChange={handleChange} onBlur={handleBlur} />}

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
                                <div className="w-[305px] relative flex-center h-[50px] lg:h-[65px] gradient-bg">
                                    <p className="text-3xl font-normal tracking-widest text-black ">{Captcha}</p>
                                    <div className={`absolute inset-0 ${isLoading ? ' bg-black/20' : ''} `}></div>
                                </div>
                                <div onClick={() => generateRandomText()} className="ml-3 cursor-pointer w-7 h-7">
                                    <img src="/Images/recycle-icon.svg" alt="" />
                                </div>

                            </div>

                            <div className="flex flex-col ">
                                <label htmlFor="text" className="mb-4">Enter the text shown in the picture</label>
                                <InputBox placeholder="" name="captcha" value={formData.captcha} onChange={handleChange} error={errors.captcha} onBlur={handleBlur} isFullWidth={true} />

                            </div>

                            <div className="w-full flex-center ">
                                <button type='submit' className='md:px-10  mt-4 md:py-2.5 max-sm:w-full max-sm:py-4 font-normal text-black bg-white rounded-3xl '>Submit Now</button>
                            </div>



                        </div>
                    </form>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Career