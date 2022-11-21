import React from 'react'
import './Utilities.css'
import {motion} from 'framer-motion'



const Utilities = () => {
  return (
    <div className='utilities_container'>
        <div className='utilities_inner'>
        <div className='hero_inner'>
            <div className='hero_text'>
            <motion.div initial={{ x: -300 }} animate={{ x: 0 }} transition={{ ease: "easeInOut", duration: 2, type: 'tween' }} class="content">
            <div class='text_container'>
                <span>U</span>
                <span>T</span>
                <span>I</span>
                <span>L</span>
                <span>I</span>
                <span>T</span>
                <span>I</span>
                <span>E</span>
                <span>S</span>
               </div>
               </motion.div>            
            </div>
        </div>
        </div>
    </div>
  )
}

export default Utilities