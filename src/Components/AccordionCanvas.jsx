import { Environment, Html, OrbitControls, Shadow, useProgress, } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Bars } from "react-loader-spinner";
import { useMediaQuery } from "react-responsive";
import Accordion from "./Accordion";
import { useScroll, useSpring, useTransform } from 'framer-motion'
import { motion } from 'framer-motion-3d'
        //the loader 
function TheLoader() {
        const { active, progress } = useProgress(); 
        if (!active) return null;
    
    return (
        <Html center style={{ color: 'black', backgroundColor: 'white' }}>
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



function AccordionCanvas(){
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const sceneRef = useRef()
    const { scrollYProgress } = useScroll(sceneRef)
    const rotateTrans = useTransform(scrollYProgress, [0, 0.7, 1], [-2, 1, -2]);
    const scaleTrans = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.02, 0.3, 0.5,0.05, 0.02])
    const smoothScale = useSpring(scaleTrans, 10)
    const smoothRotate = useSpring(rotateTrans, 10)
    return (
        <div className="h-[56rem] w-screen z-0">
            <Canvas className=" "
            ref={sceneRef}>
            <Suspense fallback={<TheLoader />}>
            

                <Environment preset='studio'/>
                <OrbitControls 
                    maxPolarAngle={Math.PI / 2}
                    minAzimuthAngle={-Math.PI / 4}
                    maxAzimuthAngle={Math.PI / 4}
                    enableDamping={false}
                    enablePan={false}
                    enableZoom={false}
                />

                    <motion.mesh
                    ref={sceneRef}
                    position={isPortrait? [0,.3,-1]:[0,0,-1]}
                    rotation={[smoothRotate,0,0]}
                    scale={isPortrait ? 0.34: smoothScale}>

                        <Html
                        className="shadow-2xl"
                        transform 
                        center>
                            <Accordion />
                        </Html>

                    </motion.mesh>
            </Suspense>
            </Canvas>
        </div>
    )
}

export default AccordionCanvas