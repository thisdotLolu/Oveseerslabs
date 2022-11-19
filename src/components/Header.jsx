import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaTimes,FaBars} from 'react-icons/fa'
import './Header.css'

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
                <div className='logo'>
                    <img src='/observables_logo.jfif'
                    alt='logo'
                    />
                </div>
                <ul className={click?'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <p onClick={closeNav}  className='nav-link'>ABOUT</p>
                    </li>
                    <li className='nav-item'>
                        <p onClick={closeNav} className='nav-link'>ROADMAP</p>
                    </li>
                    <li className='nav-item'>
                        <p onClick={closeNav} className='nav-link'>TEAM</p>
                    </li>
                    <li className='nav-item'>
                        <p onClick={closeNav} className='nav-link'>FAQ</p>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click? (<FaTimes size={20} style={{color:'#fff',width:'50px'}}/>):(<FaBars style={{color:'fff',width:'50px'}} size={20}/>)}
                </div>
            </nav>
        </header>
  )
}

export default Header;