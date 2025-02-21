import React from 'react'
import back from '../assets/Videos/background.mp4'

const Products = () => {
    return (
        <>
            <div className=" relative w-full h-[600px]">
                <video
                    src={back}
                    className=" w-full h-full object-fill"
                    loop
                    autoPlay
                    muted
                ></video>
            <div className="absolute bottom-0  w-full h-32 bg-gradient-to-t from-black/90 to-transparent"></div>

            </div> 

        </>
    )
}

export default Products


