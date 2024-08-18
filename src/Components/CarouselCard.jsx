import React, { useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FaQuoteLeft } from "react-icons/fa";
function CarouselCard({cardData}) {
  //unfinished what are the things that should be included as props? (the card details eg.
  //title, content picture ALSO colors of the card, the glow effect)
  const title = cardData.title
  const content = cardData.content
  const color = cardData.color
  const iconComponent = cardData.iconComponent
//states
  const [isHovered, setIsHovered] = useState(false)
  //useMotionValue
  const x = useMotionValue(0)
  const y = useMotionValue(0)
//useSpring for springy effect
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  //useTransform (goated hook frfr)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])
//mouse move handler
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false);
  }
  const handleMouseOver = () => {
    setIsHovered(true);
  }

  //inline components
  const HoveredContent = () => {
    return(
      <motion.div className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2}}
      transition={{ 
        duration: 1
       }}>
        {iconComponent}
            <h1 className="font-spaceMono text-[22px] text-center m-auto w-[80%] bg-zinc-50 rounded-3xl p-3"
            style={{  
              transform: "translateZ(155px)",
              transformStyle: "preserve-3d",
              color: isHovered ? color : color,  
            }}>
              {content}
            </h1>
      </motion.div>
    )
  }
  
  const UnhoveredContent = () => {
    return(
      <motion.div className="flex p-3 md:h-[400px] sm:h-auto border-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.2}}
      transition={{ 
        duration: 2,
        type: 'spring'
       }}
      >
          <div className="absolute top-0 flex gap-x-2 mt-3 mx-3">
          <div className="h-4 w-4 bg-red-500 rounded-full"/>
          <div className="h-4 w-4 bg-orange-500 rounded-full"/>
          <div className="h-4 w-4 bg-green-500 rounded-full"/>
        </div>
            <FaQuoteLeft size={30} color={color}/>
            <h1 className="font-spaceMono font-bold text-[42px] text-center w-[380px] uppercase"
            style={{  
              transform: "translateZ(155px)",
              transformStyle: "preserve-3d",
              color: isHovered ? "white" : color,  
            }}>
              {title}
            </h1>
            <FaQuoteLeft size={30} color={color}/>
      </motion.div>
    )
  }

  return (
    <section className="relative">
      <motion.div className="relative z-10 h-[600px] w-[500px] bg-stone-300 border-stone-900 rounded-xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseOver}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}>
        <div className="absolute inset-3 grid place-content-center rounded-xl bg-white shadow-lg"
          style={{
            background: isHovered ? color : "white",  
            transform: "translateZ(35px)",
            transformStyle: "preserve-3d",
          }}
        >
          <AnimatePresence>
          {isHovered ? <HoveredContent /> : <UnhoveredContent />}
          </AnimatePresence>
        </div>

      <AnimatePresence>
    {isHovered && (        
      <motion.div className="absolute inset-0 w-[500px]  rounded-xl blur-lg"
                style={{  
                transform: "translateZ(15px)",
                transformStyle: "preserve-3d",
                backgroundColor: color,
        }}
              initial={{ 
                opacity: 0.9
              }}
              animate={{ 
                opacity: 1,
                scale: [0.9, 1.05, 1]
              }}
          />
      )}
      </AnimatePresence>
            

    </motion.div>
      
    </section>
  )
}



export default CarouselCard
