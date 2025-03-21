import React, { useEffect, useRef, useState } from 'react'
import { CustomerServiceData } from '../datas/Products'
import OverlayLayout from '../componets/products/OverlayLayout'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductsDetails from '../componets/products/ProductsDetails';



const Demo = ({ videoId = 'nz2jaxYItWc' }) => {

    const sectionRefs = useRef([]);
    const [active, setActive] = useState(false);





    return (
        <div className="w-32">
            <div onClick={() => setActive(!active)} className="mb-5 cursor-pointer bg-slate-200">click</div>
            {/* <div className={` transition-all duration-500  w-full space-y-4 text-white ease-in-out bg-red-300 ${active ? 'h-20' : 'max-h-0'}`}> */}
           <div className={` transition-all duration-500 ${active ? 'opacity-100' : 'opacity-0'} w-full space-y-4 text-white ease-in-out bg-red-300  h-20`}>

            
            </div>
            <div className="h-10 mt-3 bg-slate-100"></div>
        </div>

    )
}

export default Demo