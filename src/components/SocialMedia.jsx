import React from 'react';
import { motion } from 'framer-motion';
import robu from '../assets/robu.jpg';
import { FaInstagram, FaLinkedinIn, FaDiscord } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

const SocialMedia = () => {
    const socials = [
        { id: 'insta', name: 'Insta_Net', icon: <FaInstagram />, link: "https://www.instagram.com/apurava__/", color: "#ff00ff", shadow: "shadow-[0_0_15px_rgba(255,0,255,0.4)]" },
        { id: 'linkdin', name: 'Link_Auth', icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/apurava-anand-/", color: "#00d4ff", shadow: "shadow-[0_0_15px_rgba(0,212,255,0.4)]" },
        { id: 'fiverr', name: 'Gig_Proc', icon: <SiFiverr />, link: "https://www.fiverr.com/s/jjBE1p9", color: "#1dbf73", shadow: "shadow-[0_0_15px_rgba(29,191,115,0.4)]" },
        { id: 'discord', name: 'Comm_Link', icon: <FaDiscord />, link: "https://discord.gg/hthSU6nT", color: "#5865f2", shadow: "shadow-[0_0_15px_rgba(88,101,242,0.4)]" },
    ];

    return (
        <section className="relative w-full py-24 bg-[#050505] overflow-hidden font-mono">
            {/* Cyberpunk Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">

                {/* LEFT: THE ROBO ASSET WITH GLITCH EFFECT */}
                <div className="w-full md:w-1/2 flex justify-center items-center order-2 md:order-1">
                    <motion.div
                        animate={{ 
                            y: [0, 0, 0],
                            filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(0deg)"]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                    >
                        {/* Digital Aura Glow */}
                        <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full" />
                        
                        <img
                            src={robu}
                            alt="Robu Character"
                            className="w-64 md:w-80 lg:w-[450px] h-auto object-contain pointer-events-none drop-shadow-[0_0_30px_rgba(0,255,255,0.3)] brightness-110 contrast-125"
                        />
                        
                        {/* Scanning Bar Animation */}
                        <motion.div 
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-[2px] bg-cyan-400/50 shadow-[0_0_15px_#22d3ee] z-20"
                        />
                    </motion.div>
                </div>

                {/* RIGHT: THE NEON STACK */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-end space-y-8 order-1 md:order-2">
                    <div className="text-center md:text-right relative">
                        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none mix-blend-difference">
                            Access <br /> <span className="text-cyan-400">Nodes</span>
                        </h2>
                        <div className="absolute -top-4 -right-2 text-[10px] text-cyan-500/50 tracking-[0.5em]">DIRECT_LINK_ESTABLISHED</div>
                    </div>

                    <div className="flex flex-col gap-5 w-full max-w-[340px]">
                        {socials.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                whileHover={{ x: -20, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`
                                    relative group flex items-center justify-between px-8 py-5 
                                    bg-black/80 border border-white/10 backdrop-blur-md overflow-hidden
                                    ${social.shadow} transition-all duration-300
                                `}
                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 92% 100%, 0 100%)' }}
                            >
                                {/* Background Hover Glow */}
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                    style={{ backgroundColor: social.color }}
                                />

                                <div className="flex flex-col">
                                    <span className="text-[10px] text-white/40 mb-1">0{index + 1} //</span>
                                    <span className="font-black italic uppercase tracking-widest text-lg text-white group-hover:text-cyan-400 transition-colors">
                                        {social.name}
                                    </span>
                                </div>
                                
                                <motion.span 
                                    className="text-3xl"
                                    style={{ color: social.color }}
                                    animate={{ textShadow: [`0 0 5px ${social.color}`, `0 0 15px ${social.color}`, `0 0 5px ${social.color}`] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    {social.icon}
                                </motion.span>

                                {/* Glitch Line Overlay */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent translate-y-[-100%] group-hover:translate-y-[500%] transition-transform duration-1000" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            
        </section>
    );
};

export default SocialMedia;