import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Asset Imports
import html from '../assets/html.jpg';
import js from '../assets/js.jpg';
import css from '../assets/css.jpg';
import php from '../assets/php.jpg';
import fivrr from '../assets/fivrr.jpg';
import postman from '../assets/postmans.jpg';
import react from '../assets/react.jpg';
import node from '../assets/node.jpg'; // New
import py from '../assets/py.jpg';     // New
import rocket from '../assets/rocket.jpg'; // New
import alian from '../assets/alian.jpg';
import alian1 from '../assets/alian1.jpg';


const FallingSticker = ({ src, name, delay }) => {
  // Use state to generate random position only on mount to prevent hydration mismatch
  const [position, setPosition] = useState(0);
  
  useEffect(() => {
    setPosition(Math.random() * 90 + 5); // 5% to 95% width
  }, []);

  return (
    <motion.div
      className="absolute flex flex-col items-center"
      style={{ left: `${position}%` }}
      initial={{ y: -180 }}
      animate={{ y: '80vh' }}
      transition={{
        duration: 2 + Math.random() * 6, // Random speed (6s to 12s)
        repeat: Infinity,
        ease: "linear",
        delay: delay,
        repeatDelay: 0
      }}
    >
      <img src={src} alt={name} className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-lg" />
      <span className="mt-2 text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">{name}</span>
    </motion.div>
  );
};

const Tech_Fall = () => {
  const allTech = [
    { name: "React", icon: react }, { name: "Node.js", icon: node },
    { name: "Postman", icon: postman }, { name: "JavaScript", icon: js },
    { name: "Python", icon: py }, { name: "PHP", icon: php },
    { name: "Fiverr", icon: fivrr }, { name: "HTML", icon: html },
    { name: "CSS", icon: css }
  ];

  return (
    <section className="relative w-full h-[600px] bg-white overflow-hidden">

      {/* Randomized Rain */}
      {allTech.map((tech, i) => (
        <FallingSticker 
          key={tech.name} 
          src={tech.icon} 
          name={tech.name} 
          delay={i * 5} // Staggered start times
        />
      ))}
    </section>
  );
};

export default Tech_Fall;