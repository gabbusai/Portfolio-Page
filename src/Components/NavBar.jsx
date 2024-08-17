import { motion} from 'framer-motion'
import React, { useState } from 'react'

function NavBar({tabs}) {
    const [selectedTab, setSelectedTab] = useState(tabs[0].id);

    const selectHandler = (tab) => {
        setSelectedTab(tab.id)
        tab.tabRef.current?.scrollIntoView({
            behavior:'smooth'
        });
    }

  return (
    <motion.div className="flex space-x-1 bg-zinc-950 py-2 justify-center lg:w-[40vw] sm:w-screen m-auto rounded-[40px] gap-x-3"
    transition={{ 
        duration: .5,
        type: 'spring'
     }}
    onMouseLeave={()=> {
        setTimeout(() =>{
            setSelectedTab(900)
        }, 1000)
        
    }}
    >
        {
            tabs.map((tab) => (
                <motion.button
                key={tab.id}
                onClick={() => selectHandler(tab)}
                whileHover={{ 
                    scale: 1.2
                }}
                className={`relative rounded-full px-3 text-sm font-medium text-white outline-2 outline-sky-400 focus-visible:outline
                    h-16 w-32
                    ${selectedTab === tab.id ? `` : `hover:text-white`}
                    `}
                >
                    {selectedTab === tab.id  && (
                        <motion.div className=" bg-stone-50 absolute inset-0"
                        layoutId='pill'
                        transition={{ 
                            type: "spring",
                        }}
                        style={{ 
                            borderRadius: 9999
                        }}
                        />
                    )}
                    <span className='z-10 relative font-dmSans text-[24px] mix-blend-exclusion'
                    >
                        {tab.title}
                    </span>
                            
                </motion.button>
            ))
        }
    </motion.div>
  )
}

export default NavBar
