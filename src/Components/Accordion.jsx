import { motion } from 'framer-motion'
import React, {useEffect, useRef, useState } from 'react'
import AccordionItem from './AccordionItem';
import overlay01 from '../assets/overlay01.jfif'
import fakeDex from '../assets/FakeDex-01.png';
import thoughtsApp from '../assets/ThoughtsApp-01.png';
import portfolioPage from '../assets/PortfolioPage-01.png';
import CircularProgress from './CircularProgress';


    function Accordion() {
    const [content, setContent] = useState([
        { title: 'Micro Blogging App', content: 'Developed and deployed micro blogging app for a week using laravel and react. (Deployed with AWS EC2)', id: 1 },
        { title: 'PokeDex App', content: 'Although not deployed, a personal PokeDex app using React Native Expo and other libraries', id: 2 },
        { title: 'This Portfolio Page!', content: 'This portfolio page was created using various libraries such as React Three Fiber and Framer Motion', id: 3 },
    ]);

    const [imagesContent, setImages] = useState([
        { image: thoughtsApp, id: 1 },
        { image: fakeDex, id: 2 },
        { image: portfolioPage, id: 3 },
    ]);

    const [selectedId, setSelectedId] = useState(null);
    const [previousId, setPreviousId] = useState();
    const [isActive, setActive] = useState(false);
    const imageContainerRef = useRef(null);

    const handleClick = (id) => {
        setActive(!isActive)
        setSelectedId((prevState) => (prevState === id ? null : id));
        setPreviousId(prevState => prevState);
        
    };


    const handleScrollToImage = (selectedIndex) => {
        setActive(!isActive)
        if (!imageContainerRef.current) return;

        imageContainerRef.current.scrollTo({
        top: selectedIndex * imageContainerRef.current.clientHeight, // Use container height
        behavior: 'smooth',
        });

    };

    useEffect(() => {
        if (selectedId !== null) {
        handleScrollToImage(imagesContent.findIndex((image) => image.id === selectedId));
        }

        const intervalId = setInterval(() => {
            setActive(true);
            const nextId = (selectedId + 1) % content.length; // Cycle through content
            setSelectedId(nextId);
          }, 10000); // Update every 10 seconds
        return () => clearInterval(intervalId);

    }, [selectedId]);

    return (
        <div className="relative lg:mt-2 sm:mt-[100px] sm:w-[37rem] sm:h-auto lg:h-[38rem] lg:w-[74rem]
        bg-zinc-950 rounded-lg shadow-lg lg:overflow-hidden sm:block lg:grid grid-cols-6 p-3 gap-x-3
        border-2 border-stone-900">
            
        <div className="accordion h-full w-full col-span-2 overflow-hidden">
            {content.map((item) => (
            <AccordionItem
                key={item.id}
                title={item.title}
                content={item.content}
                handleClick={() => handleClick(item.id)}
                isOpen={item.id === selectedId}        
            />
            ))}
        </div>

        <motion.div
            ref={imageContainerRef}
            className="images sm:h-[22rem] md:h-[36rem] w-full col-span-4
            border-2 border-stone-800 overflow-hidden rounded-lg shadow-xl" 
        >
            <div className="absolute bottom-[0px] right-[0rem]">
                <CircularProgress isActive={isActive}/>
            </div>
            {imagesContent.map((image) => (
            
            <img
                src={image.image}
                key={image.id}
                alt=""
                className="sm:h-full w-full object-cover  rounded-lg"
            /> 
            ))}
        </motion.div>
        </div>
    );
    }

    export default Accordion;
