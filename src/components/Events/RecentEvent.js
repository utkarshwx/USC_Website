import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { FaMedium } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';
import SocalMediaIicon from '../../utils/UI/SocalMediaIicon';
export default function RecentEvent() {
    return (
        <div className='parrent_wrapper flex flex-wrap mx-auto w-11/12  my-4'>
            <div className="w-full md:w-6/12   px-6">
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
            <div className="w-full md:w-6/12 mt-4 md:mt-0">
                <div className="mainContainer pl-16 ">
                    <div className="higlihted_area bg-orange-500 px-3 rounded-full py-2 w-[200px]">
                        Our Recent Activity
                    </div>
                    <div className="title text-3xl my-2">
                        Automatrix:Hands-on experience in automating email tasks, enhancing their understanding of RPA concepts in real-world scenarios
                    </div>
                    <div className="descrbtion">
                        <p>
                            On <i><b>April 4th, 2024</b></i>, USC KIIT's "AutoMatrix" workshop, with @official.sdec, introduced students to RPA via UiPath Studio. It covered features, email automation, and practical exercises, enhancing real-world RPA understanding.
                        </p>
                    </div>
                    <div className="socalMedia mt-5 flex gap-2">
                      
                           <SocalMediaIicon link={""} icon={<FaInstagram fill="black"/>} />
                           <SocalMediaIicon link={""} icon={<FaLinkedin fill="black"/>} />
                           <SocalMediaIicon link={""} icon={<FaMedium fill="black"/>} />

                     
                    </div>
                </div>
            </div>
        </div>
    )
}
// -webkit-linear-gradient(top, #e17055, #cd3334) text


{/* <div style={{
                "background": "-webkit-linear-gradient(top, #e17055, #cd3334) text",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent"
            }} className="heading font-semibold text-4xl my-10">
                Recently at USC
            </div>
            <div className="recent_img_wrapper">
                <div className="parent">
                    <div className="div1 box relative h-[400px] p-1 rounded-md overflow-hidden cursor-pointer ">
                        <div className="overlay absolute w-full h-full bg-[#0000008f] p-5 pb-7 text-3xl flex items-end">
                            <div className="text duration-200">
                                Volunteer power at Automatrix Events! Making moments matter.
                            </div>
                        </div>
                        <img className='rounded-md w-full h-full' src={img1} alt="" />

                    </div>
                    <div className="div2 box relative h-[400px] p-1 rounded-md overflow-hidden cursor-pointer">
                        <div className="overlay absolute w-full h-full bg-[#0000008f] p-5 pb-7 text-3xl flex items-end">
                            <div className="text duration-200">
                                Volunteer power at Automatrix Events! Making moments matter.
                            </div>
                        </div>
                        <img className='rounded-md w-full h-full' src={img2} alt="" /></div>
                    <div className="div3 box relative h-[300px] p-1 rounded-md overflow-hidden cursor-pointer">
                        <div className="overlay absolute w-full h-full bg-[#0000008f] p-5 pb-7 text-3xl flex items-end">
                            <div className="text duration-200">
                                Volunteer power at Automatrix Events! Making moments matter.
                            </div>
                        </div>
                        <img className='rounded-md w-full h-full' src={img3} alt="" /></div>
                    <div className="div4 box relative h-[300px] p-1 rounded-md overflow-hidden cursor-pointer">
                        <div className="overlay absolute w-full h-full bg-[#0000008f] p-5 pb-7 text-3xl flex items-end">
                            <div className="text duration-200">
                                Volunteer power at Automatrix Events! Making moments matter.
                            </div>
                        </div>
                        <img className='rounded-md w-full h-full' src={img4} alt="" /></div>
                    <div className="div5 box relative h-[300px] p-1 rounded-md overflow-hidden cursor-pointer">
                        <div className="overlay absolute w-full h-full bg-[#0000008f] p-5 pb-7 text-3xl flex items-end">
                            <div className="text duration-200">
                                Volunteer power at Automatrix Events! Making moments matter.
                            </div>
                        </div>
                        <img className='rounded-md w-full h-full' src={img5} alt="" /></div>


                </div>
            </div> */}