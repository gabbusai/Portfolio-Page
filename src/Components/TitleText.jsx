import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { TypeAnimation } from 'react-type-animation'

function TitleText() {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    
  return (
<TypeAnimation
    preRenderFirstString={true}
    sequence={ [
            'Greetings!', 
            1000, // Waits 1s
            'And Welcome', 
            2000,
            'To my Portfolio!',   
            2000,
            () => {
            },
        ]
    
    }
        cursor={true}
        repeat={Infinity}
        />
  )
}

export default TitleText
