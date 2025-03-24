import React, { useRef, useEffect } from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import gsap from "gsap";



const Dropdown = ({ isFullWidth = false,  label, dropdownRef, handleOptionSelection, setDropdown, name, value, toggle, isOpened, options, isRangeApplied = false }) => {



    return (
        <div className={`flex transition-all duration-500 ease-in-out  ${isOpened ? 'z-50  ' : 'z-10'} flex-col ${isFullWidth ? ' w-full' : 'w-1/2'}`}>
            {label && <h6 className="mb-1">{label}</h6>}

            <div ref={dropdownRef} onClick={(e) => { e.stopPropagation(); toggle(name) }} className="relative w-full border-b border-white cursor-pointer md:border-white/70">
                <div className="flex items-center justify-between mt-2">
                    <p className="">{value}</p>
                    <span className="flex justify-end text-3xl " role='button'><RiArrowDropDownLine className={` ${isOpened ? 'rotate-180' : ''} font-extralight text-2xl transition-transform duration-300 `} /></span>
                </div>

                <ul className={` absolute overflow-hidden transition-all duration-500 ease-in-out  bg-black   ${isOpened ? 'max-h-[180px] opacity-100  z-50 ' : 'max-h-0 opacity-0 z-10'}   w-full py-1 mt-2  overflow-y-auto bg-black   `}
                    onWheel={(e) => e.stopPropagation()}
                    onTouchMove={(e) => e.stopPropagation()}>

                    {options?.map((option, index) => (
                        <li onClick={() => handleOptionSelection(name, option)} key={index} className="relative py-1.5 transition-all duration-100 md:pl-2 hover:bg-slate-900 ">{(option > 5 && isRangeApplied) ? <>{option}<span className='absolute ml-0.5 text-sm top-1'>+</span>
                        </> : option}</li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Dropdown