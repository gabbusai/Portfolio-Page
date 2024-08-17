import { motion } from 'framer-motion'
import React from 'react'
import grainy from '../../public/grainy.jpg'
import grunge from '../../public/grunge.jpg'
function GrainyBg() {
  return (
    <div>
        <img src={grunge} alt="" className='absolute top-0 h-screen w-screen z-10 
        bg-gradient-to-bl from-zinc-900 to-slate-600'/>
        <div className="absolute mix-blend-overlay bg-gradient-to-bl from-orange-300 to-red-900
        z-20 h-full w-full"></div>
    </div>  
  )
}

export default GrainyBg
