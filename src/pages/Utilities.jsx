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
        <div className='utilities_body'>
          <h1 className='mindus_text'>Mindus</h1>
          <div className='underline_utils'></div> 
          <h2>- Information on <span className='mindus_text_inner'>Mindus</span> - Our OTC NFT Trading Bot! -</h2>

          <h2>What Is <span className='mindus_text_inner'>Mindus?</span></h2>
          <div className='underline_utils'></div> 
          
          <p><span className='mindus_text_inner'>Mindus</span> is the first-of-its-kind bot built with the purpose of making it quick, easy, and above all SAFE to trade your NFT assets directly from any discord server using our bot service.</p>
          <img src='/mindus_1.PNG'
          alt='mindus_screenshot'
          />


          <h2>How does <span className='mindus_text_inner'>Mindus</span> Work?</h2>
          <div className='underline_utils'></div> 
          
          
          <p>1. Once initiated, <span className='mindus_text_inner'>Mindus</span> will create an escrow wallet along with a "trade ID" to be given ONLY to the other party participating in the trade. After they enter the "trade ID" they will be given access to the private trade channel, where the trade can be discussed discretely. </p>
          <img src='/mindus_2.jpg'
          alt='mindus_screenshot'
          />
          <p>2. Both trading parties send the agreed upon NFT(s)/SOL/SPL Tokens to the escrow wallet.
Trading parties may then review the contents of the escrow wallet and verify assets held within.</p>
<img 
src='/mindus_3.jpg'
alt='mindus screenshot'
/>
<p>3. Once <span className='mindus_text_inner'>Mindus</span> gets the confirmation of the trade terms being accepted, it will then proceed safely sending the desired assets to the correct parties' wallets.</p>
<img src='/mindus_4.png'
alt='mindus'
/>
<p><span className='mindus_text_inner'>Mindus</span> will send a confirmation with the Solscan transaction link when the assets have been sent.</p>

<img src='/mindus_5.PNG'
alt='mindus'
/>
<p>
In the case that one or both parties decide they no longer want to proceed with the trade, they can cancel the trade and all assets will be returned from the escrow wallet so long as there is enough SOL in the escrow wallet to cover network fees. 
If there is not enough SOL in the escrow wallet, then MIndus will alert the trading parties of the network fees needed to complete the return.
</p>
<img
src='/mindus_6.PNG'
alt='mindus'
/>
<p>Once there is enough SOL in the escrow wallet, then Minus will proceed with returning the assets to the wallets they were sent from. <span className='mindus_text_inner'>Mindus</span> will send a confirmation along with the Solscan transaction link once all assets have been returned.</p>
<img
src='/mindus_7.jpg'
alt='mindus'
/>

<h2>What's the Cost?</h2>
<div className='underline_utils'></div> 



<h3>Pre-Mint Pricing</h3>



<p>We will be hand-selecting projects, DAOs, and communities to be a part of our Pre-Mint Beta Testing Phase. (No Charge)</p>

<h3>Post Mint Pricing</h3>
<p>For Non-Holders - The Set-up cost will be 3 Sol with a monthly service fee of 2.5 Sol</p>
    <p>For Gen 1 Holders - The Set-up cost is waived for holders of 1+ TOME NFT and the monthly service fee will be reduced from 2.5 Sol to 1 Sol (40% Monthly Discount)</p>
    <p>(Prices are subject to change)</p>
  
  <h2>How do i get <span className='mindus_text_inner'>Mindus</span> set up in my server?</h2>
  <div className='underline_utils'></div> 
  Simply join our <a href='https://discord.gg/BNEAYauekZ'
  style={{textDecoration:'underline'}}
  >Discord</a> and open a ticket to start the process.
  </div>
  </div>
  </div>
  )
}

export default Utilities