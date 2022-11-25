import React from 'react'
// import Video from './Video'
import './Showcase.css'



const Showcase = () => {
  return (
    <div className='showcase_container'>
        <div className='showcase_inner'>
        <div className='showcase_top'>
        <video
        muted
        autoPlay
                loop
                controls
                src='./Videos/book_silver.mp4'
                type="video/mp4"
            />
        <video
              muted
                loop
                autoPlay
                controls
                src='./Videos/book_red.mp4'
                type="video/mp4"
            />
        </div>
        <div className='showcase_bottom'>
        <video
        muted 
        autoPlay
                loop
                controls
                src='./Videos/book_bronze.mp4'
                type="video/mp4"
            />
        <video
       
                loop
                controls
                src='./Videos/book_gold.mp4'
                type="video/mp4"
            />
        </div>
        
        </div>
    </div>
  )
}

export default Showcase;