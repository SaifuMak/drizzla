import React from 'react'

const ProductsOverview = ({ containerClass, title, description, number }) => {
    return (
        <div className={`${containerClass} 2xl:px-12 lg:px-6 2xl:py-8 lg:py-6 py-4 rounded-xl px-6  cursor-pointer custom-hover-effect mt-8 `}>
            <div className="flex justify-between ">
                <h3 className="text-2xl xl:text-3xl">{title}</h3>
                <span className="text-xl font-light lg:text-2xl xl:text-3xl">{number}</span>
            </div>
            <p className="mt-3 font-light lg:w-5/6 xl:w-4/6 xl:mt-5 xl:text-xl xl:leading-relaxed">{description}</p>
        </div>
    )
}

export default ProductsOverview