import React from 'react'

const InputBox = ({ isFullWidth = false, placeholder, label, name, value, onChange, error = null }) => {
    return (
     <div className={`${isFullWidth ? ' w-full' : 'w-1/2'}`}>
            <div className={` flex-1   space-y-2  border-b border-white md:border-white/70 bg-transparent`}>
                {label && <label htmlFor="" >{label}</label>}
                <input onChange={(e) => onChange(name, e.target.value)} type="text" value={value} placeholder={placeholder} name={name} className='w-full text-lg placeholder-white bg-transparent outline-none placeholder:font-extralight' required />
           
            </div>
            {error && value && (<span className="text-red-500 max-xl:text-xs ">{error}</span>)}

            </div>
    )

}

export default InputBox