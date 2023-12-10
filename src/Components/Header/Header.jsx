import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='flexCenter paddings innerWidth header-container'>
            <h1>LOGO</h1>
            <div className='flexCenter header-menu'>
                <a href=''>Residencies</a>
                <a href=''>Value</a>
                
                <a href=''>Get Started</a>
                <button className='button'><a href=''>Contact US</a></button>
                
            </div>
        </div>
      
    </div>
  )
}

export default Header
