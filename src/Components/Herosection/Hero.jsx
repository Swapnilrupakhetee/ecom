import React from 'react'
import './Hero.css'
import house from '../Assets/house-right.jpeg'
const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-container'>
        <div className='hero-left'>
        </div>
        <div className='flexCenter hero-right'>
          <div className='image-container'>
          <img src={house} alt='some-random-house'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
