import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
import './Faq.css'




const Faq = () => {
  return (
    
      <div className='faq_container'>
    <div className='faq_inner'>
        <div className='header'>
            <h1 style={{textAlign:'center'}}>FREQUENTLY ASKED QUESTIONS</h1>
            <div className='underline'></div>
        </div>
    <Accordion 
    className='accordion_container'
    defaultIndex={[0]} allowMultiple>
  <AccordionItem
  className='accordion_item'
  >
    <h2>
      <AccordionButton>
        <Box 
        className='question'
        flex='1' textAlign='left'>
        Who are Overseers Labs? 🤔
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    A community and project with the drive, passion, and ambition to dare to be different, bent on bringing value to our holders through our innovative tools and services! 
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem
  className='accordion_item'
  >
    <h2>
      <AccordionButton>
        <Box 
        className='question'
        flex='1' textAlign='left'>
        What are The TOMES? 📚
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    The Tomes is the Genesis Collection for Ⓞverseers Labs with a limited deflationary supply of only 999 Tomes that are packed with both present/future utilities along with completely passive income as well! 💸🤑
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem
  className='accordion_item'
  >
    <h2>
      <AccordionButton>
        <Box 
        className='question'
        flex='1' textAlign='left'>
        What are the utilities for The TOMES?🛠️
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    A full breakdown of current and future gen 1 utilities can be found <a href='https://discordapp.com/channels/968725854068822057/1013191519433408644/1020241456415387668'>here</a>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem
  className='accordion_item'
  >
    <h2>
      <AccordionButton>
        <Box 
        className='question'
        flex='1' textAlign='left'>
        WEN MINT???🥵
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    TBA
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem
  className='accordion_item'
  >
    <h2>
      <AccordionButton>
        <Box 
        className='question'
        flex='1' textAlign='left'>
        What is MINDUS? 🤷🏾‍♂️
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Mindus is the first of its kind OTC trading bot, and is the first tool developed by Overseers Labs. (For more info please refer to our white paper.)
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem
  className='accordion_item'
  >
    <h2>
      <AccordionButton>
        <Box 
        className='question'
        flex='1' textAlign='left'>
        What does MINDUS (Post-Mint) Pricing look like 💵
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Non-Holders | Setup Cost: 3 SOL | Monthly Subscription: 2.5 SOL/mo
Holders | Setup Cost: Hold 1 TOME NFT | Monthly Subscription: 1 SOL/mo
(Prices subject to change.⬆️)
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem
  className='accordion_item'
  >
    <h2>
      <AccordionButton>
        <Box 
        className='question'
        flex='1' textAlign='left'>
        How do I get MINDUS in my server? 🤝
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    We will be hand selecting projects, daos, and communities for our closed alpha/beta pre-mint testing. 
    </AccordionPanel>
  </AccordionItem>
</Accordion>
        </div>
        <div className='incase_unanswered'>
In case your question wasn't answered above, please let us know via a Support Ticket over at our <a href='https://discord.gg/BNEAYauekZ'>Discord Channel</a>
</div>
    </div>
  
    
  )
}

export default Faq