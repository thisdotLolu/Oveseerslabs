import React, { useState } from 'react'
import { useRef } from 'react'

const Video = ({source}) => {
    const videoRef=useRef(null)
    const[isPlaying,setIsPlaying]=useState(false)

    const playVideo = () => {
        videoRef.current.play();
        setIsPlaying(true);
    };
  return (
    <div className='video_container'>
                <video
                loop
                ref={videoRef}
                // controls
                // autoPlay={true}
                src={source}
                type="video/mp4"
            />
              {!isPlaying && (
                <div className='video_overlay'>
                    <div className='video_overlay_inner'>
                        <svg
                            onClick={playVideo}
                            className='play_icon'
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.4297 22.7129C17.9525 22.7129 22.4297 18.2357 22.4297 12.7129C22.4297 7.19004 17.9525 2.71289 12.4297 2.71289C6.90684 2.71289 2.42969 7.19004 2.42969 12.7129C2.42969 18.2357 6.90684 22.7129 12.4297 22.7129Z"
                                stroke="#000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.4297 8.71289L16.4297 12.7129L10.4297 16.7129V8.71289Z"
                                stroke="#000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            )}
            </div>
  )
}

export default Video