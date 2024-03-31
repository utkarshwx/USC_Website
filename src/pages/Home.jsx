import React from 'react'
import Navbar from '../components/navbar'
import Slider from '../components/slider'
import Community from '../components/community'
import Believe from '../components/believe'
import About from '../components/about'
import Testimonial from '../components/Testimonial'
import Footer from '../components/footer'
import Champion from '../components/champion'
import Leads from '../components/Leads'
import Mentor from '../components/Mentor/mentor'
import Advisory from '../components/Advisory'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Community/>
      <Believe/>
      <About/>
      <Champion/>
      <Mentor/>
      <Advisory/>
      <Leads/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}
