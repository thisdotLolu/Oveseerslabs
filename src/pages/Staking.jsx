import React from 'react'
import './Staking.css'
import {motion} from 'framer-motion'


const Staking = () => {
  return (
    <div className='staking_container'>
      <div className='staking_inner'>
        <div className='staking_hero'>
        <div className='hero_inner'>
            <div className='hero_text'>
            <motion.div initial={{ x: -300 }} animate={{ x: 0 }} transition={{ ease: "easeInOut", duration: 2, type: 'tween' }} class="content">
            <div class='text_container'>
                <span>S</span>
                <span>T</span>
                <span>A</span>
                <span>K</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
               </div>
               </motion.div>            
            </div>
        </div>
        </div>
        <div className='staking_section_one'>
          
        </div>
      </div>
    </div>
  )
}

export default Staking