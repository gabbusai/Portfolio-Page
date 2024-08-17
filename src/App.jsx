import { useEffect, useRef, useState } from 'react'

import HeroSection from './Components/HeroSection'
import TransitionSection from './Components/TransitionSection'
import CarouselSection from './Components/CarouselSection'
import { motion, useInView  } from 'framer-motion'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
function App() {
  const [count, setCount] = useState(0);
  //footer ref
  const footerRef = useRef();
  const isFooterInView = useInView(footerRef);
  //hero ref
  const heroRef = useRef();
  const isHeroInView = useInView(heroRef);
  //carousel ref
  const carouselRef = useRef();
  const isCarouselInView = useInView(carouselRef);
  //transition ref
  const transitionRef = useRef();
  const isTransitionInView = useInView(transitionRef);

  const contactButtonHandler = () => {
    footerRef.current?.scrollIntoView({
      behavior:'smooth'
    });
  }

  const sectionRefs = [heroRef, transitionRef, carouselRef, footerRef]; // array of refs to your sections
  const sectionInViews =[isFooterInView, isHeroInView, isCarouselInView, isTransitionInView  ]
  const [currentRef, setCurrentRef] = useState(heroRef);
  const TABS = [
    {id: 1, title: 'Home', tabRef: heroRef},
    {id: 2, title: 'Projects', tabRef: transitionRef},
    {id: 3, title: 'Skills', tabRef: carouselRef},
    {id: 4, title: 'Contact', tabRef: footerRef},
  ]

  useEffect(() => {
    sectionInViews.map((section) => {
      
    })
  }, [sectionInViews])


  return (
    <div className="relative overflow-x-clip bg-zinc-950">
      <motion.div className="relative overflow-x-clip"
      initial={{ 
        opacity: 0,
        scale: 0.99
      }}
      animate={{ 
        opacity: 1,
        scale: 1
        }}
        transition={{ 
          duration: 1.5,
          ease: 'easeInOut'
        }}>
          
          <motion.div className=" 
          sticky z-20 top-0">
            <NavBar tabs={TABS}/>
          </motion.div>

          <div className="" ref={heroRef}
        
          >
            <HeroSection className=" md:z-0 sm:z-0 overflow-x-hidden " contactButtonHandler={contactButtonHandler}/>
          </div>
            
          <div className="" ref={transitionRef}>
            <TransitionSection className="overflow-x-hidden z-0"/>
          </div>

          <div className="" ref={carouselRef}>
            <CarouselSection className=' '/>
          </div>
            
          <div className="" ref={footerRef}>
            <Footer/>
          </div>

          
        </motion.div>
      </div> 
  )     
}

export default App
