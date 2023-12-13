import React from 'react'
import './Companies.css'
import { IoLogoTiktok } from "react-icons/io5";
import { IoLogoMicrosoft } from "react-icons/io5";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
const Companies = () => {
  return (
    <div className='company-wrapper'>
        <div className='paddings innerWidth flexCenter company-container'>
        <IoLogoTiktok  className='logos'/>
        <IoLogoMicrosoft className='logos'/>
        <BiLogoGithub className='logos'/>
        <BiLogoInstagramAlt className='logos'/>

        </div>
    </div>
  )
}

export default Companies