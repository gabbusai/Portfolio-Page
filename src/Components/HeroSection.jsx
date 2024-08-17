import React, { Suspense, useEffect } from 'react'
import RippleBg from './RippleBg'
import { Canvas } from '@react-three/fiber'
import { Environment, Html, useProgress } from '@react-three/drei'
import SphereScene from './SphereScene'
import { useMediaQuery } from 'react-responsive'
import grainy02 from '../assets/grainy02.jpg'
import noise from '../assets/noise.jpg'
import { motion, animate, useMotionTemplate, useMotionValue } from 'framer-motion'
import { Bars } from 'react-loader-spinner'
import TitleText from './TitleText'
const COLORS = [ '#0d0e14', '#5d547c', '#0f0f0f'];

    //the loader 
    function TheLoader() {
        const { active, progress } = useProgress(); 
        if (!active) return null;
      
        return (
          <Html center style={{ color: 'rgb(0,0,0)', backgroundColor: '#0f0f0f' }}>
            <Bars
                height="180"
                width="180"
                color="#fff"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
          </Html>
        );
    }


function HeroSection({contactButtonHandler}) {    

    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const color = useMotionValue(COLORS[0])
    const bg01= useMotionTemplate`radial-gradient(120% 120% at 50% 0%, #0F0F0F 50%, ${color} )`
    const bg02 = useMotionTemplate`repeating-radial-gradient(75% 75% at 0% 96%, #2f2f2f 25%, #073AFF00 100%),
    radial-gradient(160% 154% at 711px -303px, ${color} 0%, #120f17 70%)`

    useEffect(() => {
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror'
        })

    }, [])


    return (
        <div className="md:relative overflow-hidden sm:overflow-hidden">
        
            <motion.section className='z-5 sm:overflow-y-hidden h-screen w-screen md:grid grid-cols-12 sm:block'
            style={{ 
                backgroundImage: isPortrait ? bg01: bg01,
            }}>
 
                <div className="col-span-6 ">
                    <motion.p className='text-center text-zinc-50 lg:text-[95px]  md:text-[70px] sm:text-[44px] md:w-full mb-[-20px] 
                    mt-[208px] ml-16 font-thin font-spaceMono'
                    >
                        <TitleText/>
                    </motion.p>
                    
                    <p className="w-full mx-5 sm:hidden md:block text-orange-50 text-[27px] font-roboto font-thin text-center ml-10 mt-6">
                        Hi, there! My name is Gab and this page is a simple portfolio page to showcase a little bit about my skills, abilities, and history! Keep scrolling down to learn about me and hopefully you enjoy your stay!
                    </p>
                    
                    <div className="grid h-[100px] w-100% align-center">
                        <button type="button" className="m-auto text-white font-bold py-4 px-8 rounded-full 
                        shadow-md hover:shadow-lg bg-gradient-to-r from-purple-500 to-pink-500"
                        onClick={() => contactButtonHandler()}
                        >
                        Contact Me!
                        </button>
                    </div>

                </div>


                <Canvas className='col-span-6 md:scale-100 w-full z-[0]' >
                <Suspense fallback={<TheLoader />}>
                    <Environment
                        preset="studio"
                    />  
                        <SphereScene/>
                </Suspense>
                </Canvas>
                
            
            </motion.section>
            
            <div className={`z-3 sm:hidden md:block bg-cover bg-no-repeat h-screen w-screen absolute top-0 
            mix-blend-color-overlay pointer-events-none opacity-10`}
            style={{ 
                backgroundImage: `url(${grainy02})`
            
            }}>
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

        </div>
    )
}

export default HeroSection
