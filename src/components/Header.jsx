import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaTimes,FaBars, FaTwitter, FaDiscord} from 'react-icons/fa'
import './Header.css';

const Header = () => {
    const[click,setClick]=useState(false)


    const handleClick=()=>{
        setClick(!click)
    }
    const closeNav=()=>{
        setClick(!click)
    }
  return (
        <header>
            <nav className='navbar'>
                <Link to='/' className='logo'>
                    <img src='/observables_logo.jfif'
                    alt='logo'
                    />
                </Link>
                <ul className={click?'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' onClick={closeNav}  className='nav-link'>INFO</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/staking' onClick={closeNav} className='nav-link'>STAKING</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/utilities' onClick={closeNav} className='nav-link'>UTILITIES</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/gallery' onClick={closeNav} className='nav-link'>SNEAK PEAKS</Link>
                    </li>
                    <li className='twitter'>
                        <a href='https://twitter.com/Overseers_Labs'><FaTwitter/></a>
                    </li>
                    <li className='discord'>
                        <a href='https://discord.gg/BNEAYauekZ'><FaDiscord/></a>
                    </li>
                    <div className='social_list_container'>
                    <div className='social_list'>
                       <div className='twitter_mobile'>
                        <a href='https://twitter.com/Overseers_Labs'><FaTwitter/></a>
                        </div> 
                       <div className='discord_mobile'>
                        <a href='https://discord.gg/BNEAYauekZ'><FaDiscord/></a>
                        </div> 
                    </div>
                    <p className='copyright'>
                        &copy; Overseers Labs 2022
                    </p>
                    </div>
                    
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click? (<FaTimes size={20} style={{color:'#fff',width:'50px'}}/>):(<FaBars style={{color:'fff',width:'50px'}} size={20}/>)}
                </div>
            </nav>
        </header>
  )
}

export default Header;