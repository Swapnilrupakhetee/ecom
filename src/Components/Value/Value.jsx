import React from 'react'
import '../Value/Value.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState

} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md';


const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            <div className="v-left">
                <div className="image-container">
                    <img src='./value.png' alt='ho'/>
                </div>
            </div>
            <div className="flexColStart v-right">
                <span>Our Value</span>
                <span>Value We Give to You</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, expedita cupiditate.
                    <br/>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, tempora voluptates.
                </span>
            </div>
        </div>
    </section>
  )
}

export default Value