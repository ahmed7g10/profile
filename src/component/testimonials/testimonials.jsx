import React from 'react'
import "./testimonials.css"
import Card from './../Card';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import timg from "../../assets/moon_night_clouds_115806_3840x2400.jpg"
const Testimonials = () => {
  return (
    <section id='testimonials' >
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
        <Card classn={"testimonial__card"}
        content={(<>
        <div className="testimonial__img">
            <img src={timg} alt="" />
        </div>
        <h4>Ahmed</h4>
        <small className='text-light'>
          Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Magni, 
          temporibus consequatur obcaecati 
          accusamus debitis tenetur quidem id 
          iure quod voluptas labore sequi,
           laudantium soluta
           dolore, atque autem libero ex
           pedita eos?
         
        </small>
        </>)}
        />
        </SwiperSlide>

        <SwiperSlide>
        <Card classn={"testimonial__card"}
        content={(<>
        <div className="testimonial__img">
            <img src={timg} alt="" />
        </div>
        <h4>Ahmed</h4>
        <small className='text-light'>
          Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Magni, 
          temporibus consequatur obcaecati 
          accusamus debitis tenetur quidem id 
          iure quod voluptas labore sequi,
           laudantium soluta
           dolore, atque autem libero ex
           pedita eos?
         
        </small>
        </>)}
        />
        </SwiperSlide>

        <SwiperSlide>
        <Card classn={"testimonial__card"}
        content={(<>
        <div className="testimonial__img">
            <img src={timg} alt="" />
        </div>
        <h4>Ahmed</h4>
        <small className='text-light'>
          Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Magni, 
          temporibus consequatur obcaecati 
          accusamus debitis tenetur quidem id 
          iure quod voluptas labore sequi,
           laudantium soluta
           dolore, atque autem libero ex
           pedita eos?
         
        </small>
        </>)}
        />
        </SwiperSlide>
        <SwiperSlide>
        <Card classn={"testimonial__card"}
        content={(<>
        <div className="testimonial__img">
            <img src={timg} alt="" />
        </div>
        <h4>Ahmed</h4>
        <small className='text-light'>
          Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Magni, 
          temporibus consequatur obcaecati 
          accusamus debitis tenetur quidem id 
          iure quod voluptas labore sequi,
           laudantium soluta
           dolore, atque autem libero ex
           pedita eos?
         
        </small>
        </>)}
        />
        </SwiperSlide>
      
      </Swiper>
    </section>
  )
}

export default Testimonials
