import React, { useEffect, useRef } from 'react';
import { animate, motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';

function CircularProgress({isActive}) {
    
    const circleRef = useRef()
    const VALUES = [0,100]
    const progress = useMotionValue(VALUES[0])
    const circleProgress = useTransform(progress, [0,100], [0,360])
    const bg01= useMotionTemplate`conic-gradient(#0c0a09 ${circleProgress}deg , rgb(237,237,237)0deg)`

    useEffect(()=> {
        if(isActive){
            animate(progress, VALUES, {
                ease: 'easeInOut',
                duration: 10,
                repeat: Infinity,
            })
        }
    }, [isActive])

    return (
    <motion.div className="shadow-xl relative circular-progress h-64 w-64 rounded-full"
    ref={circleRef}
        style={{  
            backgroundImage: bg01,
            scale: 0.3
        }}  
    >
        <div className="shadow-sm h-[100px] w-[100px] rounded-full bg-[rgb(237,237,237)] absolute top-[75px] left-[75px]"></div>
    </motion.div>
    );
}

export default CircularProgress;
