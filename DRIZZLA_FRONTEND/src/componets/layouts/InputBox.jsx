import React from 'react'

const InputBox = ({ placeholder, label, name, value, onChange }) => {
    return (

        <div className={`flex-1    space-y-2  border-b border-white md:border-white/70 bg-transparent`}>
            {label && <label htmlFor="" >{label}</label>}
            <input onChange={(e) => onChange(name, e.target.value)} type="text" value={value} placeholder={placeholder} name={name} className='w-full text-lg placeholder-white bg-transparent outline-none placeholder:font-extralight' />
        </div>
    )

}

export default InputBox