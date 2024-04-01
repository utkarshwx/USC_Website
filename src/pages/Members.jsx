import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import TeamHero from '../components/Team/teamHero'
import TeamContainer from '../components/Team/teamContainer'

export default function Members() {
  return (
    <>
    <Navbar/>
    <TeamHero/>
    <TeamContainer/>
    <Footer/>
    </>
  )
}
