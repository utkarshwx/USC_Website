import React from 'react'
import lead_data from '../../data/lead_data';
import TeamCard from './teamCard';
export default function TeamContainer() {
    return (
        <div className='my-5'>
            <div className="wrapper w-11/12 mx-auto flex flex-wrap">
                {
                    lead_data.map((item, index) => <TeamCard key={index} name={item.name} image={item.src} postion={item.postion} />)
                }
            </div>
        </div>
    )
}
