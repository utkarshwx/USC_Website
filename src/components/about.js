import React, { useEffect, useRef } from 'react'
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import UserPic from '../assets/images/why-uipath.jpeg';
import { motion, useInView, useAnimation } from 'framer-motion'
export default function About() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const mainAnimation = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainAnimation.start("visiable");
    }
  }, [isInView]);
  return (
    <section className='py-14'>
      <div className="about_wrapper mx-auto w-11/12 py-6">
        <motion.div
          ref={ref}
          variants={{
            hidden: {
              opacity: 0, y: 20,
            },
            visiable: {
              opacity: 1, y: 0,
            }
          }}
          initial="hidden"
          animate={mainAnimation}
          transition={{ duration: .5, delay: .25 }}
          className="heading title text-4xl">
          Why <span className='highlight'>UiPath?</span>
        </motion.div>
        <div className="wrapper flex flex-wrap-reverse my-5 py-6 gap-4">
          <div className="md:w-6/12 w-full list-none border-0 md:border-r border-r-[#FF7D36] pr-4">
            <motion.div
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
              className='list'>
              <IoCheckmarkDoneSharp className='icon' />
              A vibrant hub within the global network of aspiring minds.

            </motion.div>
            <motion.div
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
              transition={{ duration: .5, delay: .30 }} className='list'>
              <IoCheckmarkDoneSharp className='icon' />
              Dedicated to empowering the next generation of developers.

            </motion.div>
            <motion.div
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
              transition={{ duration: .5, delay: .40 }} className='list'>
              <IoCheckmarkDoneSharp className='icon' />
              A dynamic collective where technology meets creativity.

            </motion.div>
            <motion.div
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
              transition={{ duration: .5, delay: .50 }} className='list'>
              <IoCheckmarkDoneSharp className='icon' />
              Offers a comprehensive platform for holistic development.

            </motion.div>
            <motion.div
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
              transition={{ duration: .5, delay: .60 }} className='list'>
              <IoCheckmarkDoneSharp className='icon' />
              Beyond automation, the community encompasses various domains i.e, Mastery in

            </motion.div>
            <motion.div
              ref={ref}
              variants={{
                hidden: {
                  opacity: 0, y: 20,
                },
                visiable: {
                  opacity: 1, y: 0,
                }
              }}
              initial="hidden"
              animate={mainAnimation}
              transition={{ duration: .5, delay: .70 }} className='list'>
              <IoCheckmarkDoneSharp className='icon text-3xl' />
              UiPath's robotic process automation. Exploration of web development, core machine learning, RPA/AI, UI automation, and cloud computing.

            </motion.div>
          </div>
          <div className="md:w-5/12 w-full px-4">
            <motion.div
              ref={ref}
              variants={{
                hidden: {
                  opacity: 0, x: 20,
                },
                visiable: {
                  opacity: 1, x: 0,
                }
              }}
              initial="hidden"
              animate={mainAnimation}
              transition={{ duration: .5, delay: .80 }}
              className="image rounded-md w-full h-[280px] bg-white">
              <img src={UserPic} className='w-full h-full rounded-md' alt="about_img" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
