import React, { useState } from 'react'
import '../Value/Value.css';
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
import data from '../../utils/Accordion'



const Value = () => {
    const[className,setClassName]=useState(null)
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            <div className="v-left">
                <div className="image-container">
                    <img src='./s1.jpg' alt='ho'/>
                </div>
            </div>
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give to You</span>
                <span className='secondaryText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, expedita cupiditate.
                    <br/>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, tempora voluptates.
                </span>
                <Accordion
                className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                {data.map((item,i)=>{
                    
                        return(
                            <AccordionItem
                            className={`accordionItem ${className}`} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordionButton'>
                                        <AccordionItemState>
                                            {({expanded})=>expanded?setClassName("expnded"):setClassName("collasped")}
                                        </AccordionItemState>
                                        <div className="flexCenter icon">
                                            {item.icon}
                                        </div>
                                        <span className="primaryText">
                                            {item.heading}
                                        </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                    </AccordionItemButton>
                                    
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondary">{item.detail}</p>

                                </AccordionItemPanel>

                            </AccordionItem>

                        );
                    })

                }

                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value