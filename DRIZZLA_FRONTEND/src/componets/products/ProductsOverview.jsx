import React from 'react'

const ProductsOverview = ({ containerClass, title, description, number }) => {
    return (
        <div className={`${containerClass} px-12 py-6 rounded-xl  cursor-pointer custom-hover-effect mt-8 `}>
            <div className="flex justify-between ">
                <h3 className="text-3xl">{title}</h3>
                <span className="text-2xl">{number}</span>
            </div>
            <p className="w-4/6 mt-5 font-light leading-relaxed text-lg-custom">{description}</p>
        </div>
    )
}

export default ProductsOverview