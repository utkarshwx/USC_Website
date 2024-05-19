import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';



// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';
export default function GalleryBanner() {
    return (
        <div className='main_wrapper mt-24 w-10/12 mx-auto flex items-center'>
               <div className="text_box w-full md:w-6/12 px-8 ">
                <div className="txt title text-7xl">
                    Our Gallery
                </div>
                <p className='mt-3'>
                    Exploring Innovation: A Glimpse into USC KIIT's AutoMatrix Workshop Revolutionizing RPA Education with Practical UiPath Techniques
                </p>
            </div>
            <div className="w-full md:w-6/12   md:pl-10 pl-0 mt-10">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCards, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="h-[500px] bg-blue-400">Slide 1</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[500px] bg-blue-900">Slide 2</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[500px] bg-blue-800">Slide 3</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[500px] bg-blue-600">Slide 4</div>
                    </SwiperSlide>
                </Swiper>
            </div>
         
        </div>
    )
}
