import React from 'react'
import './Footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-left'>
        <div className='location'>
         <FaLocationDot className='basic-icons' />
         
         <h4>Kupondle,Lalitpur</h4>
        </div>
        <div className='phone'>

        <FaPhoneAlt className='basic-icons' />
        <p>+1 555 12323214</p>
        </div>
        <div className='mail'>

        <IoIosMail className='basic-icons' />
         <p>mynameis@gmail.com</p> 
        </div>
      </div>
      <div className='footer-right'>
        <div className='title'>
          <h1>About the company</h1>

        </div>
        <div className='description'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Perspiciatis provident autem, voluptatibus omnis molestiae eius<br/>  obcaecati magnam perferendis. Illo, consequuntur voluptatem. <br/> 
          
        </div>
        <div className='logos'>
        <FaFacebook className='right-logos'/>
        <FaXTwitter className='right-logos'/>
        <FaLinkedin className='right-logos'/>
        <IoLogoGithub className='right-logos'/>
          
        </div>

      </div>
    </div>
  )
}

export default Footer