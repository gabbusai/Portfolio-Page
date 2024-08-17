import React, {useRef} from 'react'
import { motion } from 'framer-motion'

function RippleEffect({scaleProp, durationProp, transDelay}){
    return(
        <>
        <motion.div
                className='rounded-full absolute top-[25%] left-[40%] '
                style={{
                position: 'absolute',
                height: '364px',
                width: '364px',
                backgroundImage: 'radial-gradient(circle, rgba(18,18,18,0) 60%, rgba(247,247,247,.5) 100%)',
                }}
                initial={{
                scale: 0.1,
                opacity: 1,
                }}
                animate={{
                scale: scaleProp,
                opacity: 1,
                }}
                transition={{
                duration: durationProp, // Specify the desired animation duration
                ease: 'easeInOut', // Specify the desired easing function
                repeat: Infinity,
                repeatType: 'mirror',
                delay: transDelay,
                }}
            ></motion.div>
        </>
    )
}


function RippleBg() {
    const ripple1 = useRef();
    const ripple2 = useRef();
  return (
    <div className='h-screen w-screen overflow-hidden relative'>
        <RippleEffect scaleProp={2.2} durationProp={2} transDelay={0} />
        <RippleEffect scaleProp={2.2} durationProp={2} transDelay={1} />
        <RippleEffect scaleProp={2.4} durationProp={2} transDelay={2} />
    </div>
  )
}

export default RippleBg
