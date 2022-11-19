import React from 'react'
import './Roadmap.css'


const Roadmap = () => {
  return (
    <div className='roadmap_container'>
        <div className='roadmap_inner'>
           <h1>ROAD MAP</h1>
            <div className='q3'>
            <video
                loop
                // controls
                src='./Videos/book_bronze.mp4'
                type="video/mp4"
            />
            <div className='q3_inner'>
                <h1>Q3 2022 - The Beginning</h1>
                <ul>
                <li>Build server and implement tools</li>
                <li>Hire Artists</li>
                &nbsp;
                <li>Hire Dev</li>
                <li>Begin construction of website</li>
                <li>Begin work on Gen 1 collection artwork</li>
                &nbsp;
                <li>Reveal Gen 1 Utilities[First Set]</li>
                <li>Begin collabs with other projects for WL</li>
                <li>Hire Mods from Community</li>
                &nbsp;
                <li>Start opening the disord to the public</li>
                <li>Start whitelist giveaways and invite competitions</li>
                </ul> 
            </div>
            </div>
            
            <div className='q4'>
            <video
                loop
                // controls
                src='./Videos/book_bronze.mp4'
                type="video/mp4"
            />
            <div className='q4_inner'>
            <h1>Q4 2022 - The Prep</h1>
                <ul>
                    <li>Start first MAJOR marketing push</li>
                    <li>Continue collaborating with other projects for WL</li>
                    <li>Continue revewling Gen 1 utilities[Second Set]</li>
                    <li>Gen 1 artwork completed check</li>
                    <li>Gen 1 artwork revealed check</li>
                    <li>Mint Details reveal [PT1]</li>
                    <li>Start second MAJOR marketing push</li>
                </ul>
            </div>
            </div>


            <div className='q4-2'>
            <video
                loop
                // controls
                src='./Videos/book_bronze.mp4'
                type="video/mp4"
            />
            <div className='q4-2_inner'>
            <h1>Q4 2022 - The BlastOff</h1>
                <ul>
                    <li>Star 3 and final pre-mint MAAJOR marketing push</li>
                    <li>Mint Details Reveal [PT.2 Full Reveal]</li>
                    <li>Reveal Third Set [Final Set] of Gen 1 utilities</li>
                    <li>Close WL / Collaborations until Post-Mint</li>
                    <li>Mint Out Gen 1 Collection</li>
                    <li>Start construction on Roadmap V2</li>
                </ul>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Roadmap