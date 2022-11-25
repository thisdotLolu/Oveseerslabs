import React from 'react'
import {FaDiscord, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        
        <p className='copyright'>
        <div className='social_icons'>
        <a href='https://twitter.com/Overseers_Labs'>
        <FaTwitter 
        className='twitter_footer'
        />
        </a>
        
        <a href='https://discord.gg/BNEAYauekZ'>
        <FaDiscord 
        className='discord_footer'
        />
        </a>
        </div>
          &copy; Overseers Labs 2022
      </p>
    </div>
  )
}

export default Footer