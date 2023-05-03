import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slider.css'

import slide_image_1 from '../../../assets/slider1.jpg'
import slide_image_2 from '../../../assets/slider2.jpg'
import slide_image_3 from '../../../assets/slider3.jpg'
import slide_image_4 from '../../../assets/slider4.jpg'
import slide_image_5 from '../../../assets/slider5.jpg'
import slide_image_6 from '../../../assets/slider6.jpg'
import slide_image_7 from '../../../assets/slider7.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Slider = () => {
    return (
        <Container>
            <h1 className="text-center" style={{ fontSize: "4rem" }}>Our Popular Dishes</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_6} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_7} alt="slide_image" />
                </SwiperSlide>

                <div className="slider-controller">
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </Container>
    );
};

export default Slider;