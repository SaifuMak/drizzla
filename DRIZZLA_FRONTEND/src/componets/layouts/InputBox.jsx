import React from 'react'

const InputBox = ({ placeholder,label, name, value, onChange }) => {
    return (
       
       <div className={`flex-1    border-b border-white/70 bg-transparent`}>
       {label &&   <label htmlFor="">{label}</label>}
            <input onChange={onChange} type="text" value={value} placeholder={placeholder} name={name} className='w-full bg-transparent outline-none' />

        </div>
    )

}

export default InputBox