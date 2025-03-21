import React from "react";

const VideoPlayer = ({ videoId }) => {
    



    return (
        <div className="relative w-full h-full overflow-hidden bg-red-300 ">
            {/* YouTube Video */}   
            <iframe
                className="absolute left-0 z-10 object-cover w-full h-full p-4 bg-yellow-100 top-20 bor "
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&mute=1&modestbranding=1&showinfo=0&rel=0`}
                allow="autoplay"
                allowFullScreen
            ></iframe>

            {/* Content Overlay */}
            <div className="relative z-10 flex items-center justify-center w-full h-full text-white bg-opacity-10 bg-black/50">
            </div>
        </div>
    );
};

export default VideoPlayer;
