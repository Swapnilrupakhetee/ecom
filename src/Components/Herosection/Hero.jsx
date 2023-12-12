import React from 'react'
import './Hero.css'
import house from '../Assets/house-right.jpeg'
import CountUp from 'react-countup';
import {HiLocationMarker} from 'react-icons/hi'
const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-container'>
        <div className='flexColStart hero-left'>
          <div className='hero-title'>
            <div className='circle'/>
            <h1>Discover<br/>Most Suitable <br/>Property</h1>


          </div>
          <div className='flexColStart hero-description secondary-text'>
            <span>Lorem ipsum, dolor sit amet consectetur voluptatum </span>
            <span>quia, repellat deserunt laborum eaque.</span>
          </div>
          <div className='flexCenter search-bar'>
            <HiLocationMarker color='lightcoral' size={25}/>
            <input type='text' placeholder='search'/>
            <button className='button'>Find</button>

          </div>
          <div className='flexCenter stats'>
            <div className='flexColStart stat'>
              <span>
                <CountUp start={1000}
                end={1555}
                duration={5}/>
                <span>+</span>
              </span>
              <span className='secondary-text'>Property</span>
            </div>
            <div className='flexColStart stat'>
              <span>
                <CountUp 
                start={1}
                end={155}
                duration={5}
                />
                <span>+</span>
              </span>
              <span className='secondary-text'>Agents</span>
            </div>
            <div className='flexColStart stat'>
              <span>
                <CountUp start={100}
                end={450}
                duration={5}/>
                <span>+</span>
              </span>
              <span className='secondary-text'>Customers</span>
            </div>

          </div>

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
