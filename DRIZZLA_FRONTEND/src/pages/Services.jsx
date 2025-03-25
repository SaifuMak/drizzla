import React, { useRef, useState } from 'react'
import GradientText from '../componets/general/GradientText'
import { FirstServiceData, SecondServiceData } from '../datas/Services'
import ServicesZigZagLayout from '../componets/general/ServicesZigZagLayout'
import AnimatedVideo from '../componets/AnimatedVideo'
import Footer from '../componets/Footer'
import { ServiceData } from '../datas/Services'
import { HomeVideos } from '../datas/Videos'




const Services = () => {

  const videoRef = useRef()
  const [isVideoPlaying, setisVideoPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      setisVideoPlaying(true)
      videoRef.current.play();
    }
  };

  return (
    <div className="flex-col w-full flex-center ">

<AnimatedVideo MobileVideo={HomeVideos.mobile}  DesktopVideo = {HomeVideos.desktop} />


      <div className="w-11/12 mt-10 2xl:w-10/12 2xl:mt-5 ">
        <GradientText text='What we do ' customClass='text-2xl font-semibold ' />
        <h2 className="text-3xl font-medium text-white 2xl:text-5xl xl:text-4xl ">Our Services</h2>
      </div>

      <div className="w-11/12 mt-10 2xl:w-10/12">
        <ServicesZigZagLayout datas={ServiceData} />
      </div>

      {/* <div className="px-10 my-5 md:w-9/12 md:px-16 md:my-20 flex-center ">

        <div className=" relative w-full max-sm:h-[300px] 2xl:h-[690px] xl:h-[620px] lg:h-[480px]">
          <video
            ref={videoRef}
            src='/Videos/automation.mp4'
            className="object-fill w-full h-full "
            loop
            muted
            playsInline
            preload="auto"
          >
          </video>
          <div className="absolute inset-0 flex-col w-full h-full bg-black/20 flex-center ">
            {!isVideoPlaying && <h3 className="font-semibold tracking-wide text-white 2xl:text-5xl xl:text-4xl md:text-3xl ">See for yourself</h3>}
            {!isVideoPlaying && <button onClick={handlePlay} className="2xl:py-3 bg-white mt-7 2xl:px-7 rounded-3xl px-4 py-1.5 md:px-5 md:py-2 max-sm:text-sm ">Play Video</button>}
          </div>
        </div>
      </div> */}

      {/* <div className="w-10/12">
        <ServicesZigZagLayout datas={SecondServiceData} />
      </div> */}

      <Footer />

    </div>
  )
}

export default Services