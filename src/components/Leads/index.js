import React from 'react'
import LeadSlider from './leadsSlider'

export default function Leads() {
  return (
    <section>
      <div className="wrapper mx-auto w-11/12 py-8">
        <div className="title text-center font-bold text-4xl py-9">
          Our <span className='text-[#FF7D36] higlight'> Leads</span>
        </div>
        <LeadSlider/>
      </div>
    </section>
  )
}
