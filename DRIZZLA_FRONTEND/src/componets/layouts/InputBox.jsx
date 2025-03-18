import React from 'react'

const InputBox = ({ placeholder, label, name, value, onChange }) => {
    return (

        <div className={`flex-1   space-y-3  border-b border-white md:border-white/70 bg-transparent`}>
            {label && <label htmlFor="" className=''>{label}</label>}
            <input onChange={(e)=>onChange(name, e.target.value)} type="text" value={value} placeholder={placeholder} name={name} className='w-full bg-transparent outline-none' />

        </div>
    )

}

export default InputBox