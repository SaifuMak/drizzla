import React, { useRef, useEffect, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextVerticalReveal from '../componets/TextVerticalReveal';
import StickySection from '../componets/products/StickySection';
import { ProductsData } from '../datas/ProductsData';
import Footer from '../componets/Footer';
import AnimatedVideo from '../componets/AnimatedVideo';
import AutomationVideo from '../componets/AutomationVideo';


gsap.registerPlugin(ScrollTrigger);


const Products = () => {

    return (
        <div className="" >

           <AnimatedVideo/>

            <TextVerticalReveal text='Go beyond chat.' secondText='Enterprise Autonomy' />

           <AutomationVideo/>

            <>
                {ProductsData && ProductsData.map((data, index) => (
                    <StickySection key={data.index} data={data} />
                ))}
            </>

            <Footer />

        </div>
    )
}

export default Products


