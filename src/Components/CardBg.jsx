import { useMotionTemplate, motion, AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'




function CircleEffect({height, width,}){

    return(
    <motion.div className="bg-stone-100 rounded-full"
    style={{ 
        height,
        width,
     }}
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: [0.1, 0.2, 0.1], scale: [0.9, 1, 0.9]}}
            exit={{ opacity: 0 }}
            transition={{ 
                duration: 4,
                ease: 'easeOut',
                repeat: Infinity
            }}>
        </motion.div>
    )
}
function CardBg({isActive}) {
    useEffect(() => {
        console.log(isActive)
    }, [isActive])
  return (
    <AnimatePresence>
    {isActive && (
        <div className="relative">

            <div className="absolute top-0 right-0">
                <CircleEffect height={"600px"} width={"600px"}/>
            </div>
            
        </div>
        
        
    )}
    </AnimatePresence>
  )
}

export default CardBg
