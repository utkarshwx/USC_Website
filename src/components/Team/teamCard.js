import React from 'react'

export default function TeamCard({ name, image, postion }) {
    return (
        <div className="w-4/12">
            <div className="team_main_bop_wrapper bg-[#2C3A47] m-2 pb-6 px-2 pt-2 rounded-lg h-[400px] duration-200 delay-75">
                <div className="image h-[300px] overflow-hidden  rounded-2xl bg-slate-600">
                    <img className='w-full duration-200 delay-100' src={image} alt="image" />
                </div>
                <div className="txt p-2">
                    <div className="name">
                        {name}
                    </div>
                    <div className="position">
                        {postion}
                    </div>
                </div>
            </div>
        </div>
    )
}
