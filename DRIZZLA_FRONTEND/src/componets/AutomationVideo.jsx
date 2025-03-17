import React from 'react'


const AutomationVideo = () => {

  return (
    <div className="w-full flex-center ">
                <div className="w-11/12 bg-[#1F1F2D] flex-col justify-center items-center p-8 sm:p-10  lg:p-20 2xl:p-24">
                    <div className="">
                        <h2 className="text-2xl font-semibold tracking-wide text-white lg:text-4xl ">Beyond Chat</h2>
                        <p className="text-[#454256] mt-2 text-lg lg:text-3xl">Explore AIP</p>
                    </div>

                    <div className="mt-5 lg:mt-10 lg:px-20 sm:px-10 2xl:px-44 xl:px-32">
                        <div className="px-6 border border-border-ash ">
                            <div className="py-2 pl-2 border-l border-r border-border-ash">
                                <h6 className=" text-sm text-[#EFEFEF]/90 ">AUTOMATION</h6>
                            </div>

                            <div className=" 2xl:h-[650px] xl:h-[550px] lg:h-[480px] border-l border-r border-t border-border-ash">
                                <video
                                    src='/Videos/banner-video.mp4'
                                    className="object-fill w-full h-full "
                                    loop
                                    autoPlay
                                    muted
                                    playsInline
                                    preload="auto"
                                >
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default AutomationVideo