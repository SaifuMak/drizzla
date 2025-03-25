import { useState, useEffect } from "react";
import { BsArrowDown } from "react-icons/bs";



const Demo = ({ videoId = '1068017702' }) => {
    const [videoUrl, setVideoUrl] = useState("");
    const [videoLoaded, setVideoLoaded] = useState(false)



    return (
        <div className="flex justify-center w-full bg-slate-800 ">
            <div className="w-10/12 bor " style={{ paddingTop: "56.25%", position: "relative" }}>
                <iframe
                    src="https://player.vimeo.com/video/1068017702?h=a6c468e90f&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "85%" }}
                    title="Vimeo Video"
                    allowFullScreen
                ></iframe>

                <div className="absolute top-0 flex justify-between w-full bg-slate-400 ">
                    <div className="text-3xl ">Logo </div>
                    <div className="text-2xl">Nav items Nav itemsNav items </div>
                </div>

                {/* <div className="absolute inset-x-0 h-48 bottom-32 bg-gradient-to-b bor from-black/30 to-black/90" /> */}
                <div className="absolute inset-x-0 bottom-32 bg-gradient-to-b bor from-black/30 to-black/90">
                <div className="flex flex-col items-center w-full mt-10 text-white ">
                    <span className="lg:text-xl"><BsArrowDown /></span>
                    <span className="mt-1 text-xs tracking-wider lg:text-base"> Scroll to Explore  </span>
                    </div>
                </div>

                {/* Scroll Down Icon */}
                {/* <div className="absolute inset-x-0 bottom-0 flex flex-col items-center h-20 text-white cursor-default bg-gradient-to-t from-black/90 to-transparent">
                    {videoLoaded && (<div className="flex flex-col items-center justify-center mt-20 ">
                        <span className="lg:text-xl"><BsArrowDown /></span>
                        <span className="mt-1 text-xs tracking-wider lg:text-sm"> Scroll to Explore  </span>
                    </div>)}
                </div> */}

            </div>
        </div>
    );
};

export default Demo;
