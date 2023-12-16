import React from 'react'
import './Contact.css'
import { MdCall, MdChatBubbleOutline } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <div className='c-wrapper'>
        <div className="paddings innerWidth flexCenter c-container">
            {/*Left side*/}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to buy</span>
                <span className='secondaryText'>Lorem  adipisicing elit. Cumque id repellendus quidem.</span>

                <div className="flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                    
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>Google</span>
                                </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdChatBubbleOutline size={25}/>
                                    
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>Chat</span>
                                </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                        </div>
                        

                        
                    </div>
                </div>
                <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                    
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>Call</span>
                                </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                        </div>

                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdChatBubbleOutline size={25}/>
                                    
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Chat</span>
                                    <span className='secondaryText'>Chat</span>
                                </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                        </div>
            </div>
            </div>
            
            {/*Right side */}
            <div className="c-right">
                <div className="image-container">
                    <img src="./s4.jpg" alt='hi'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact

