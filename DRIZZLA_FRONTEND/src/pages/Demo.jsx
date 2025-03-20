import React, { useEffect, useRef, useState } from 'react'
import { CustomerServiceData } from '../datas/Products'
import OverlayLayout from '../componets/products/OverlayLayout'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductsDetails from '../componets/products/ProductsDetails';



const Demo = () => {

    const sectionRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const triggers = sectionRefs.current.map((section, idx) => {
            return ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "bottom center",
                onEnter: () => setActiveIndex(idx),
                onEnterBack: () => setActiveIndex(idx),
                // markers: true,
            });
        });

        return () => {
            triggers.forEach(trigger => trigger.kill());
        };
    }, []);




    return (
        <div className=" flex-center">

            <div className="flex  w-10/12 bg-black bor my-20 text-white">

                {/* Left sticky cards */}
                <div className="h-auto min-h-[1900px] w-4/12 space-y-32  py-20   bor  ">
                    {CustomerServiceData.map((data) => (
                        <OverlayLayout data={data} />
                    ))}
                </div>

                {/* Right content cards */}
                <div className="h-auto min-h-[1900px] flex-1 space-y-32 px-20 py-20 ">
                    {CustomerServiceData.map((item) => (
                        <ProductsDetails key={item.index} item={item} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Demo