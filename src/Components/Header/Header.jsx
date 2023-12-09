import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='flexCenter paddings header-container'>
            <h1>LOGO</h1>
            <div className='header-menu'>
                <a href=''>Residencies</a>
                <a href=''>Values</a>
                
                <a href=''>Get Started</a>
                <button className='buttons'><a href=''>Contact US</a></button>
                
            </div>
        </div>
      
    </div>
  )
}

export default Header
