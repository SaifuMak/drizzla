import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";


const Dropdown = ({ label, name, value, toggle, isOpened, options }) => {

    return (
        <div className="flex flex-col w-full">
            {label && <h6 className="">{label}</h6>}

            <div onClick={toggle} className="relative w-full border-b border-white/80">
                <div className="flex items-center justify-between mt-1">
                    <p className="">{value}</p>
                    <span className="flex justify-end text-3xl " role='button'><RiArrowDropDownLine className={` ${isOpened ? 'rotate-180' : ''} transition-transform duration-300 `} /></span>
                </div>
                {isOpened && (<ul className="absolute w-full mt-2 bg-slate-900 ">
                    {options?.map((career, index) => (
                        <li key={index} className="my-1">{career}</li>
                    ))}
                </ul>)}
            </div>
        </div>
    )
}

export default Dropdown