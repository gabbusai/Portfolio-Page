
import { MeshDistortMaterial, Outlines, useGLTF} from '@react-three/drei'
import { Html } from '@react-three/drei'
import RippleBg from './RippleBg'
import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion-3d'
import { useScroll, useSpring, useTransform } from 'framer-motion'
import { Bloom, EffectComposer, Noise , Scanline } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

function SphereScene() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const [portrait, setPortrait] = useState(false)
    
    //const { nodes, materials, scene } = useGLTF('src/assets/wireframe_sphere.glb')
    const { nodes, materials, scene } = useGLTF('/wireframe_sphere.glb')
    const sceneMesh = useRef()
    useGLTF.preload('/wireframe_sphere.glb')

    const { scrollYProgress } = useScroll(sceneMesh)
    const rotateTrans = useTransform(scrollYProgress, [0, 1], [0, 3]);
    const scaleTrans = useTransform(scrollYProgress, [0,1], [1.1,2])
    const smoothScale = useSpring(scaleTrans, 10)
    const smoothRotate = useSpring(rotateTrans, 10)
    useEffect(() => {
        if (isPortrait) {
            setPortrait(true)
        }
        else{
            setPortrait(false)
        }
        
    }, [isPortrait])



    
return (
    <motion.group scale={2}
                    initial={{ 
                    scale: 0.1
                    }}
                    animate={{
                    scale: isPortrait? [0.9, 1.1, 0.9]: [1.2, 1.3, 1.2] ,
                    }}
                    transition={{ 
                    duration: 3,
                    easing: 'spring',
                    repeat: Infinity,
                    }}
                    
    >

        <EffectComposer>                    
            <Bloom luminanceThreshold={0.32} luminanceSmoothing={10} height={900} />
            <Noise opacity={1} />
            <Scanline
                blendFunction={BlendFunction.OVERLAY} // blend mode
                density={1.25} // scanline density
            />
            <motion.mesh
                transition={{ 
                    duration: 3,
                }}
                ref={sceneMesh}
                geometry={nodes.Object_2.geometry}
                material={materials.None}
                position={[0,-1,1]}
                rotation={[5,0, smoothRotate]}
                scale={smoothScale}
                
            >
                <Outlines thickness={0.005} color="hotpink" />
                <MeshDistortMaterial distort={.16} speed={7} />
            </motion.mesh>
            

                <Html
                    scale={5}
                    className='pointer-events-none opacity-100 sm:hidden md:block'
                    occlude='blending'
                    prepend={true}
                    center
                    style={isPortrait ? { translateX: '-200px' } : {}}>
                        <RippleBg/>
                </Html>
            </EffectComposer>

    </motion.group>
)
}

export default SphereScene
