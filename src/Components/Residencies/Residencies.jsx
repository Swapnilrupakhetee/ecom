import React from 'react'
import './Residencies.css'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';
import "swiper/css"
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common';



const Residencies = () => {
  return (
    <div className='r-wrapper'>
        <div className='paddings innerWidth r-container'>
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular houses</span>

            </div>
            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                    data.map((card,i)=>(
                        <SwiperSlide key={i}>
                            <div className='flexColStart r-card' >
                                <img src={card.image} alt="houses" />
                                <span className="secondaryText r-price">
                                    <span style={{color:"orange"}}>$</span><span>{card.price}</span>
                                </span>
                                <span className='primaryText'>{card.name}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

    </div>
  )
}

export default Residencies;
const SliderButtons=()=>{
    const swiper=useSwiper();
    return(
        <div className='flexCenter r-button'>
            <button onClick={()=>swiper.slidePrev()} className='btn1'>&lt;</button>
            <button onClick={()=>swiper.slideNext()} className='btn2'>&gt;</button>
        </div>
    )

}