import React, { useMemo } from 'react';
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

const FloatingSticker = ({ src, delay = 0, initialPos = {}, duration = 6, customAnimate = {} }) => (
  <motion.img
    src={src}
    className="absolute w-24 h-24 md:w-28 z-[60] object-contain pointer-events-none"
    style={initialPos}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      ...customAnimate
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
  />
);

const Tech_Orbit = () => {
  const clusters = [
    {
      id: "inner",
      radius: 190,
      speed: 12, // Faster: 12s per rotation (was 20)
      tech: [
        { name: "React", icon: react },
        { name: "Node.js", icon: node },
        { name: "Postman", icon: postman }
      ]
    },
    {
      id: "middle",
      radius: 320,
      speed: 25, // Medium: 25s per rotation (was 35)
      tech: [
        { name: "JavaScript", icon: js },
        { name: "Python", icon: py },
        { name: "PHP", icon: php },
        { name: "Fiverr", icon: fivrr }
      ]
    },
    {
      id: "outer",
      radius: 380,
      speed: 30, // Slower: 40s per rotation (was 50)
      tech: [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css }
      ]
    }
  ];

  return (
    <section className="relative w-full min-h-[1000px] bg-white-300 overflow-hidden flex items-center justify-center">
      {/* Background Accents */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-100 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 blur-[120px] rounded-full" />
      </div>

      {/* Specialty Floating Stickers */}
      <FloatingSticker src={alian} delay={0} initialPos={{ top: '10%', left: '10%' }} />
      <FloatingSticker src={alian1} delay={2} initialPos={{ bottom: '10%', right: '15%' }} />

      {/* Rocket drifting across the top-right */}
      <FloatingSticker
        src={rocket}
        delay={1}
        initialPos={{ top: '15%', right: '10%' }}
        duration={4}
        customAnimate={{ x: [0, 20, 0], scale: [1, 1.1, 1] }}
      />

      {/* Central Core */}
      <div className="relative z-50">
        <div className="w-40 h-40 rounded-full bg-white flex flex-col items-center justify-center shadow-[0_15px_60px_rgba(0,0,0,0.08)] border border-gray-50">
          <span className="text-gray-900 font-black text-2xl tracking-tighter">EXPERT</span>
          <div className="h-1 w-12 bg-green-500 mt-2 rounded-full" />
        </div>
      </div>

      {/* 2D Orbital Assembly */}
      <div className="absolute inset-0 flex items-center justify-center">
        {clusters.map((cluster) => (
          <React.Fragment key={cluster.id}>
            <div
              className="absolute rounded-full border border-gray-100/60"
              style={{ width: cluster.radius * 2, height: cluster.radius * 2 }}
            />

            <motion.div
              className="absolute"
              style={{ width: cluster.radius * 2, height: cluster.radius * 2 }}
              animate={{ rotate: 360 }}
              transition={{ duration: cluster.speed, repeat: Infinity, ease: "linear" }}
            >
              {cluster.tech.map((item, idx) => {
                const angle = (idx / cluster.tech.length) * 360;
                return (
                  <div
                    key={item.name}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${angle}deg) translate(${cluster.radius}px) rotate(-${angle}deg)`,
                    }}
                  >
                    <motion.div
                      className="relative group flex items-center justify-center"
                      style={{ width: '80px', height: '80px' }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: cluster.speed, repeat: Infinity, ease: "linear" }}
                    >
                      {/* Sticker shadow/bg */}
                      <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-100 transition-all shadow-xl scale-90 group-hover:scale-110" />

                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-14 h-14 md:w-16 object-contain relative z-10 drop-shadow-md rounded-md"
                      />

                      <span className="absolute -bottom-10 text-[10px] font-bold text-gray-500 opacity-0 group-hover:opacity-100 uppercase tracking-widest">
                        {item.name}
                      </span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Tech_Orbit;