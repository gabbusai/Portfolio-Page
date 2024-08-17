
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useRef, useState } from 'react'
import AccordionCanvas from './AccordionCanvas'
function Pillar({scaleAnim}){
    
    const springScale = useSpring(scaleAnim, 25)
    const springHeight = useSpring(scaleAnim, { stiffness: 200, damping: 55 });
    return(
        <motion.div className=" rounded-xl w-[102%] h-64  bg-gradient-to-b from-zinc-50 to-stone-300"
        style={{ 
            transformOrigin: 'bottom',
            scaleY: springHeight,
         }}>
        </motion.div>
    )
}
function TransitionSection() {

    const pillarsRef = useRef()
    const { scrollYProgress } = useScroll(pillarsRef, ["start end", "end start"])
    const pillar1 = useTransform(scrollYProgress, [0, 1], [1.3,9])
    const pillar2 = useTransform(scrollYProgress, [0,.9], [1.1,7])
    const pillar3 = useTransform(scrollYProgress, [0,1], [1,5])
    const pillar4 = useTransform(scrollYProgress, [0,.9], [1.1,7])
    const pillar5 = useTransform(scrollYProgress, [0,1], [1.3,9])

    return (
    <section className="relative w-screen">
    <div className='grid grid-cols-5 h-[50vh] bg-stone-300 relative' ref={pillarsRef}>
        <Pillar scaleAnim={pillar1} />
        <Pillar scaleAnim={pillar2} />
        <Pillar scaleAnim={pillar3} />
        <Pillar scaleAnim={pillar4} />
        <Pillar scaleAnim={pillar5} />
    </div>
    

    <div className="translateY-[-250px] lg:h-[150vh] sm:h-[150vh] bg-stone-300 relative">
        <div className="h-64">
            <p className="font-roboto lg:text-[97px] sm:text-[64px] text-stone-950 text-center">Development Portfolio</p>
            <p className="font-dmSans font-light text-[30px] text-zinc-950 text-center">
                Since I lack real work experience, here are some of my personal projects:
            </p>
        </div>

        <div className="grid place-items-center sm:h-[150vh] lg:h-screen">
            <AccordionCanvas /> 
        </div>
        
                                                        

    </div>
    </section>
  )
}

export default TransitionSection
