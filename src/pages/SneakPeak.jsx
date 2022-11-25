import React from 'react'
import './SneakPeak.css'
import {motion} from 'framer-motion'
import Showcase from '.././components/Showcase'



const SneakPeak = () => {
  return (
    <div className='sneakpeak_container'>
       <div className='hero_inner'>
            <div className='hero_text'>
            <motion.div initial={{ x: -300 }} animate={{ x: 0 }} transition={{ ease: "easeInOut", duration: 2, type: 'tween' }} class="content">
            <div class='text_container'>
                <span>S</span>
                <span>N</span>
                <span>E</span>
                <span>A</span>
                <span>K</span>
                <span>&nbsp;</span>
                <span>P</span>
                <span>E</span>
                <span>A</span>
                <span>K</span>
                <span>S</span>
               </div>
               </motion.div>            
            </div>
        </div>
    <Showcase/>
    </div>
  )
}

export default SneakPeak