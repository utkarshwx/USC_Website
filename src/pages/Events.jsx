import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import {eventsData} from "../data/events_data";
import img from "../assets/images/event-venue.jpg";
export default function Events() {
  return (
    <div>
      <Navbar/>
      <div className="wrapper mx-auto w-11/12">
      <div style={{backgroundImage:`linear-gradient(45deg, black, transparent),url(${img})`,backgroundSize:'cover'}} className="h-[60vh] w-full bg-[#fedad3] flex flex-col justify-center items-center">
        <h1 className=" mt-18 font-semibold text-xl">OUR EVENTS</h1>
        <h1 className="font-semibold text-4xl text-center">
          Lectures,workshops & master-classes
        </h1>
      </div>
      <div className="md:h-screen h-[200vh] w-full relative">
        <div className="absolute flex items-center justify-center flex-col md:flex-row flex-wrap gap-10 -top-16 z-10">
          {eventsData.map((event) => {
            return (
              <div key={event.id} className="w-3/4 md:w-1/4 bg-[#2d3436] rounded-2xl border flex flex-col gap-3 shadow-xl p-6 h-1/3">
                <h1 className=" text-2xl text-[#ff3f3a]">{event.date}</h1>
                <h1 className="text-white font-bold">{event.name}</h1>
                <p className="text-white line-clamp-3">{event.descripton}</p>
                <p>{event.venue}</p>
                <a target="_blank" href={event.link}>
                  <button className=" mt-4 rounded-md hover:bg-[#ff3f3a] hover:text-white w-full h-fit p-2 border-2 border-[#ff3f3a] text-[#ff3f3a] font-semibold">
                    LEARN MORE
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}
