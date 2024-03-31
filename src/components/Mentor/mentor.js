import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import MentorCard from './mentorCard'
import mentor_data from "../../data/mentor_data";
import "./style.css";

export default function Mentor() {
  const ref = useRef();
    const isInView = useInView(ref, { once: true });
    const mainAnimation = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainAnimation.start("visiable");
        }
    }, [isInView]);
  return (
    <section>
      <div className="wrapper mx-auto w-11/12">
        <div className="headline">
          <div
           
            className="title text-4xl text-center">
           <motion.span
           
            ref={ref}
        variants={{
          hidden: {
            opacity: 0, y: 10,
          },
          visiable: {
            opacity: 1, y: 0,
          }
        }}
        initial="hidden"
        animate={mainAnimation}
        transition={{ duration: .5, delay: .20 }}
           >
            Our
            </motion.span>  <motion.span

            
            className='higlight'
             ref={ref}
        variants={{
          hidden: {
            opacity: 0, y: 10,
          },
          visiable: {
            opacity: 1, y: 0,
          }
        }}
        initial="hidden"
        animate={mainAnimation}
        transition={{ duration: .5, delay: .25 }}>Mentors</motion.span>
          </div>
        </div>
        <div className="wrapper_box flex justify-center flex-wrap gap-5 mt-10 py-5">
          {
            mentor_data.map((item, index) => {
              return <MentorCard key={index} name={item.name} role={item.role} src={item.src} position={item.position} delay={item.animation_delay} />
            })
          }


        </div>
      </div>
    </section>
  )
}
