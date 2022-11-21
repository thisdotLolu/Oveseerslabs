import React from 'react'
import './Hero.css'
import Video from './Video'
import {motion} from 'framer-motion'



const Hero = () => {

    
  return (
    <>
    <div className='hero_container'>
        <div className='hero_inner'>
            <div className='hero_text'>
            <motion.div initial={{ x: -300 }} animate={{ x: 0 }} transition={{ ease: "easeInOut", duration: 2, type: 'tween' }} class="content">
            <div class='text_container'>
                <span>O</span>
                <span>V</span>
                <span>E</span>
                <span>S</span>
                <span>E</span>
                <span>E</span>
                <span>R</span>
                <span>S</span>
                <span>&nbsp;&nbsp;</span>
                <span>L</span>
                <span>A</span>
                <span>B</span>
                <span>S</span>
               </div>
               <p className='we_have_come'>We have come from the 9 Realms to bring balance to Solana</p>
               </motion.div>

               
            <button className='Mint_Now'>Mint Now</button>
            <a href='https://discord.gg/BNEAYauekZ'><button className='Mint_Now'>Discord</button></a>
            
           <Video
           source='/Videos/book_gold.mp4'
           />
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero