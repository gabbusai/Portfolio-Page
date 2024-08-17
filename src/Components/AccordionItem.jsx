import { motion } from 'framer-motion';
import React from 'react'
import { FaExpandAlt } from "react-icons/fa";
import { MdCloseFullscreen } from "react-icons/md";

    function AccordionItem({handleClick , title, content, id, isOpen}) {
        return (
        <motion.div className={`my-8 rounded-lg opacity-80 shadow-xl border-2
        ${isOpen ? 'border-stone-200 bg-stone-100 shadow-inner' : 'border-stone-900 bg-none'}`}
        >
            <button className="p-4 w-full h-[104px] grid grid-cols-5  " 
            onClick={handleClick}>
                <h1 className={`text-orange-50 p-4 ${isOpen ? 'text-stone-950' : 'text-orange-50' } font-oswald font-light text-[24px] col-span-4 pointer-events-none`}>
                    {title}  
                </h1>
                <div className="col-span-1 h-full w-full grid items-center justify-end">
                    {isOpen ? <MdCloseFullscreen size={45} color={"black"}/> : <FaExpandAlt  size={35} color={"white"}/>}
                </div> 
            </button>
            <div className={`grid px-2 text-center overflow-hidden h-transition duration-300 ease-in-out font-light font-poppins text-[21px]
            ${isOpen 
            ? 'h-auto pt-4 pb-2 text-stone-950' 
            : 'h-0 text-orange-50'}`}
            >
                {content}
            </div>
        </motion.div>
        );
    }

export default AccordionItem
