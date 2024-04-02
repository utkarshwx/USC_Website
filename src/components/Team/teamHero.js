import React from 'react'
import img from "../../assets/images/why-uipath.jpeg";
export default function TeamHero() {
    return (
        <section style={{ background: `linear-gradient(45deg, black, transparent),url(${img})`, backgroundSize: 'cover' }} className='team_hero h-[80vh] w-screen flex justify-center items-center'>
            <div className="text title text-7xl">
                Meet <span className="higlight">
                    Our Team
                </span>
            </div>
        </section>
    )
}
