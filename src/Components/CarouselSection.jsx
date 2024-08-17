import React, { useEffect, useRef, useState } from 'react'
import CarouselCard from './CarouselCard'
import { FaChevronLeft, FaChevronRight  } from "react-icons/fa";
import {motion, useAnimation, useInView, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import noise from '../assets/noise.jpg'
import { FaReact, FaLaravel, FaUserGraduate, FaCloud   } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

function CarouselSection() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const [translateVal, setTranslateVal] = useState(0)
    const iconsize = 250;
    const iconColor = 'white'
    const [carouselData, setCarouselData] = useState([
        {
            id: 1, title: 'Current Status and Education', content: 'Currently a 4th Year BS Information Technology student in Systems Plus College Foundation', 
            color: "#4793AF", iconComponent: <FaUserGraduate size={iconsize} color={iconColor} className="m-auto mb-2"/>
        },
        {
            id: 2, title: 'Computer Skills', content: 'I have a basic understanding of networking and computer troubleshooting and other programming languages such as VB.Net, C#, C++, Java, Python, JS, TS and PHP', 
            color: "#FFC470", iconComponent: <FaComputer size={iconsize} color={iconColor} className="m-auto mb-2"/> 
        },
        {
            id: 3, title: 'Development Skills [Front-End]', content: 'I have experience with plain HTML, CSS and JavaScript and also has knowledge with React.JS', 
            color: "#D37676", iconComponent: <FaReact size={iconsize} color={iconColor} className="m-auto mb-2"/>
        },
        {
            id: 4, title: 'Development Skills [Back-End]', content: 'Developed personal/school projects using PHP, MySQL and modern MVC framework Laravel.', 
            color: "#FF76CE", iconComponent: <FaLaravel size={iconsize} color={iconColor} className="m-auto mb-2"/> 
        },
        {
            id: 5, title: 'Cloud Services', content: 'Previously used AWS and Vercel for Deployment! Though I could learn more in this department.', 
            color: "#C3E2C2",  iconComponent: <FaCloud  size={iconsize} color={iconColor} className="m-auto mb-2"/>
        }
    ])
    
    const carouselRef = useRef()
    const [curr, setCurr] = useState(0)
    //reveal cards on view
    const isInView = useInView(carouselRef, {once: true})
    const mainControls = useAnimation();
    useEffect(()=> {
        isPortrait ? setTranslateVal(50) : setTranslateVal(38);

        if (isInView) {
            mainControls.start("visible")
        }

    }, [translateVal, curr, isInView])

    const prevHandler = () => {
        const newIndex = (curr + 1) % carouselData.length;
        setCurr(newIndex);
    } 

    const nextHandler = () => {
        const newIndex = (curr - 1 + carouselData.length) % carouselData.length;
        setCurr(newIndex);
    }

    return (
    <section className='h-[120vh] w-screen m-auto relative overflow-hidden bg-zinc-800'>
        <div className="top-[10vh] relative mt-[150px] h-[800px] sm:w-full overflow-x-hidden overflow-y-hidden">
            <motion.div className="mt-10 relative flex flex-row w-[170vw] lg:gap-x-0 md:gap-x-0 sm:gap-x-10 h-[700px] px-[100px]
            transition-transform ease-out duration-500" ref={carouselRef}
            style={{
                transform: `translateX(-${curr * translateVal}% )`
                }}
            >
            {carouselData.map((item, index) => (
                <motion.div className="sm:h-full sm:w-full" key={item.id}
                variants={{ 
                    hidden: {opacity: 0, x: -200, rotateY: 90, rotateZ: 15},
                    visible: {opacity: 1, x: 0, rotateY: 0, rotateZ: 0}
                 }}
                initial="hidden"
                animate={mainControls}
                transition={{ 
                    duration: 1,
                    delay: item.id * 0.15,
                    type: 'spring'
                 }}>
                    <CarouselCard key={item.id} className='h-full sm:w-[100vw]' cardData={item}/>
                </motion.div>
            ))}
            </motion.div>

            <button className='p-1 top-[320px] absolute right-4 rounded-full bg-slate-50 opacity-80'
            onClick={prevHandler}
            style={{ 
                display: !isPortrait && curr === 1 && 'none'
             }}>
                <FaChevronRight  color="black" size={65}/>
            </button>

            <button className='p-1 top-[320px] absolute left-1  rounded-full bg-slate-50 opacity-80'
            onClick={nextHandler}
            style={{ 
                display: !isPortrait && curr === 0 && 'none'
             }}>
                <FaChevronLeft color="black" size={65}/>
            </button>
                
                
        </div>

        <div className="w-screen grid place-items-center">
            <h1 className="font-spaceMono text-stone-50  font-light text-[42px] sm:text-center">
                Some of My Skills and Facts About Me!
            </h1>
            <p className="font-roboto text-orange-300 font-thin text-[22px]">
                I am relatively green in the field so hopefully through more experiences I can update these!
            </p>
        </div>

        <motion.div
                className={`z-1 sm:hidden md:block bg-repeat absolute top-0 mix-blend-color-burn pointer-events-none opacity-35`}
                style={{ backgroundImage: `url(${noise})`,
                        inset:"-200%"}}      
                        initial={{x: 0, y: 0 }} 
                        animate={{ x:["0", "10%", "0"],
                            // y:["0", "10%", "0"]
                }}
                transition={{
                    duration: .2, 
                    ease: "easeInOut", 
                    repeat: Infinity,
                    repeatType: "both", 
                }}
                >
            </motion.div>
    
</section>
  )
}

export default CarouselSection
