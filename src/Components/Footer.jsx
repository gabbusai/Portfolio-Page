import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaFacebook   } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";


function FooterIcon({item}){
    const [isHovered, setIsHovered] = useState(false);
    return(
        <motion.div className='h-52 w-52 rounded-full flex flex-col'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={()=> setIsHovered(true)}
        onTouchEnd={()=> setIsHovered(false)}
        animate={isHovered ? {scale: 1.2} : {scale:.9} }
        whileHover={{ 
            background:'#0C0C0C',
         }}
        >
            <motion.p className={`text-center font-roboto font-thin text-stone-50 mt-2 z-10`}
            animate={
                isHovered ? 
                {
                    color: '#FFFF',
                    fontSize: "22px",
                    fontWeight: 'normal'
                } 
                : 
                {
                    color: 'white',
                    fontSize: "42px",
                }
            }
            >
                {item.title}
            </motion.p>
            <AnimatePresence>
                {isHovered && (
                <motion.a href={item.link} className='z-1'
                initial={{ 
                    opacity: 0,
                    translateY: -80,
                 }}
                animate={{ 
                    opacity: 1,
                    translateY: 0,
                 }}
                transition={{ 
                    duration: .7,
                 }}
                 exit={{ 
                    opacity: [1,0.1,0],
                    translateY: -100,
                    scale: .3,
                  }}
                > 
                    {item.component}
                </motion.a>)}
            </AnimatePresence>

        </motion.div>
    )
}
function Footer() {
    const ICON_SIZE = 120;
    const ICON_COLOR = '#FFFF';
    const footerLinks = [
        {
            title: "GitHub",
            link: 'https://github.com/gabbusai',
            component: <FaGithub size={ICON_SIZE} color={ICON_COLOR} className='m-auto'/>
        },
        {
            title: "Email",
            link: 'mailto: dayritjohn08@gmail.com',
            component: <TbBrandGmail size={ICON_SIZE} color={ICON_COLOR} className='m-auto'/>
        },
        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/dayrit-john-gabriel-022054323/",
            component: <FaLinkedin size={ICON_SIZE} color={ICON_COLOR} className='m-auto'/>
        },
        {
            title: "Facebook",
            link: "https://www.facebook.com/Blizzen00/",
            component: <FaFacebook size={ICON_SIZE} color={ICON_COLOR} className='m-auto'/>
        }
    ]
  return (
    <motion.div className='lg:h-[50vh] w-screen bg-zinc-900 sm:h-[120vh]'
    >

        <div className="text-[42px] py-8 text-center font-spaceMono font-thin text-stone-50">
            Check my links and contacts here!
        </div>

        <div className="lg:flex gap-x-5 justify-center items-center sm:grid sm:grid-cols-1 sm:place-items-center">
        {
            footerLinks.map((item, index) => (
                <FooterIcon item={item} key={item.title}/>
            ))
        }
        </div>

        
    </motion.div>
  )
}

export default Footer
