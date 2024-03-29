import React from 'react'
import Navbar from '../components/navbar'
import Slider from '../components/slider'
import Community from '../components/community'
import Believe from '../components/believe'
import About from '../components/about'
import Testimonial from '../components/testimonial '
import Footer from '../components/footer'
import Champion from '../components/champion'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Community/>
      <Believe/>
      <About/>
      <Champion/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}
