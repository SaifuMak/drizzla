import React, { useEffect, useRef, useState } from 'react'
import { CustomerServiceData } from '../datas/Products'
import OverlayLayout from '../componets/products/OverlayLayout'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductsDetails from '../componets/products/ProductsDetails';
import ReactPlayer from "react-player/vimeo";


const Demo = ({ videoId = 'https://vimeo.com/1068616127/772bfd5dd7' }) => {





    return (
        <div className="relative w-full h-screen ">
            {/* <ReactPlayer
                url={videoId}
                playing
                controls
                loop
                muted
                width="100%"
                height="100%"
                className="absolute top-0 left-0 !w-full !h-full"
                style={{ objectFit: "cover" }} // Ensures it behaves like a <video>
            /> */}

            <video
                src='/Videos/banner-video.mp4'
                className={`object-fill absolute top-0 w-full h-full  `}
                loop
                autoPlay
                muted
                playsInline
                preload="auto"
                onLoadedData={() => setVideoLoaded(true)}
            />
        </div>
    );



}

export default Demo