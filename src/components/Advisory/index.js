import React, { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';
import advisory_list from "../../data/advisory_list";
export default function Advisory() {
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
        <div className="heading my-8">
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
            className="title text-4xl text-center font-semibold">Our <motion.span className='higlight'
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
              transition={{ duration: .5, delay: .30 }}
            >Advisory Committee</motion.span></motion.div>
        </div>
        <div className="main_wrapper py-4 flex flex-wrap">
          {advisory_list.map((item, index) => <motion.div key={index} ref={ref}
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
            transition={{ duration: .5, delay: item.delay }} className="lg:w-3/12 md:w-4/12 sm:w-6/12 w-full wrapper px-7">
            <div className="image w-full rounded-md h-[210px] overflow-hidden bg-slate-300">
              <img src={item.src} alt="img" />
            </div>
            <div className="name text-center my-2 text-xl">
              {item.name}
            </div>
          </motion.div>)
          }
        </div>
      </div>
    </section>
  )
}
