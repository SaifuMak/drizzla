import React, { useState } from 'react'
import Dropdown from '../componets/layouts/Dropdown';
import InputBox from '../componets/layouts/InputBox';
const Career = () => {
    const [careerDropdown, setCareerDropdown] = useState(false)
    const [isExperienceYearsDropdown, setIsExperienceYearsDropdown] = useState(false)
    const [isExperienceMonthsDropdown, setIsExperienceMonthsDropdown] = useState(false)


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
        }
    )

    const CareerOptions = ["Developer", "Designer", "Marketer"];
    const experienceYearsOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10 plus years"];
    const experienceMonthsOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]


    const toggleCareerDropdown = () => {
        setCareerDropdown(!careerDropdown)
    }

    const toggleExperienceMonths = () => {
        setIsExperienceMonthsDropdown(!isExperienceMonthsDropdown)
    }

    const toggleExperienceYears = () => {
        setIsExperienceYearsDropdown(!isExperienceYearsDropdown)
    }

    const handleChange = () => {
        pass
    }

    return (

        <div className="flex flex-col items-center justify-center font-light text-white my-96">
            <div className="flex-col w-8/12 flex-center ">
                <h2 className="text-4xl ">Build the future with us. (And have a blast doing it.)</h2>

                <div className="flex flex-col justify-start w-full space-y-10 ">
                    <div className="">
                        <h6 className="">Applying for</h6>
                        <Dropdown toggle={toggleCareerDropdown} name='role' value={formData.role} isOpened={careerDropdown} options={CareerOptions} />
                    </div>

                    <div className="flex w-full space-x-4 ">
                        <InputBox placeholder="Name*" name="name" value={formData.name} onChange={handleChange} />
                        <InputBox placeholder="Email*" name="email" type="email" value={formData.email} onChange={handleChange} />
                    </div>

                    <div className="flex w-full space-x-4 ">
                        <InputBox placeholder="Phone*" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                        <InputBox placeholder="Current City*" name="current_city" value={formData.current_city} onChange={handleChange} />
                    </div>

                    <div className="flex flex-col ">
                        <p className="">Experience</p>
                        <div className="flex w-full mt-4 space-x-4 ">
                            <Dropdown toggle={toggleExperienceYears} name='experience_years' value={formData.experience_years} label='Yrs.' isOpened={isExperienceYearsDropdown} options={experienceYearsOptions} />
                            <Dropdown toggle={toggleExperienceMonths} name='experience_months' value={formData.experience_months} label='Months' isOpened={isExperienceMonthsDropdown} options={experienceMonthsOptions} />
                        </div>
                    </div>

                    <div className="">
                        <InputBox placeholder="" label='Preferred Location*' name="preferred_location" value={formData.preferred_location} onChange={handleChange} />
                    </div>

                    <div className="">
                        <p className="">Attach your Resume (pdf/docx Only, not more than 2MB) </p>
                        <div className="flex items-center mt-2 space-x-2">
                            <button className="px-2 py-0.5 text-center text-black bg-white rounded-md">choose file</button>
                            <p className=" font-extralight">No file chosen</p>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-white"></div>

                    <div className="flex items-center ">
                        <div className="w-[305px] flex-center h-[65px] gradient-bg">
                            <p className="text-3xl font-normal tracking-widest text-black ">S 4 R 5 0 G R</p>
                        </div>
                        <div className="ml-3 cursor-pointer w-7 h-7 hover:animate-spin ">
                            <img src="/Images/recycle-icon.svg" alt="" className="" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Career