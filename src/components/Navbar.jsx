import { useState } from "react";
import { Menu, X, Home, Briefcase, BookOpen, Mail, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hovered, setHovered] = useState(null);

    const links = [
        { name: "Home", icon: <Home size={22} />, path: "/", id: "01" },
        { name: "About", icon: <Briefcase size={22} />, path: "/about", id: "02" },
        { name: "Projects", icon: <Zap size={22} />, path: "/project", id: "03" },
        { name: "Service", icon: <BookOpen size={22} />, path: "/service", id: "04" },
        { name: "Contact", icon: <Mail size={22} />, path: "/contact", id: "05" },
    ];

    return (
        <>
            {/* DESKTOP VERTICAL DOCK */}
            <div className="hidden md:block fixed left-8 top-1/2 -translate-y-1/2 z-[100]">
                {/* Removed radial-gradient background dots */}
                <div className="flex flex-col items-center gap-4 p-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl relative">
                    
                    {links.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.path}
                            onMouseEnter={() => setHovered(item.name)}
                            onMouseLeave={() => setHovered(null)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="relative flex items-center justify-center w-12 h-12 rounded-full border border-transparent hover:border-white/20 transition-colors group"
                        >
                            {/* Tooltip Terminal */}
                            <AnimatePresence>
                                {hovered === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 50 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        className="absolute left-0 whitespace-nowrap z-50 pointer-events-none"
                                    >
                                        {/* Removed pulsing green dot from label */}
                                        <div className="bg-black border border-white/20 px-4 py-2 rounded-lg flex items-center gap-3">
                                            <span className="text-[10px] font-mono text-white/40">{item.id}</span>
                                            <span className="text-xs font-black uppercase tracking-[0.2em] text-white">
                                                {item.name}
                                            </span>
                                        </div>
                                        <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-5 h-[1px] bg-white/20" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className={`relative z-10 transition-colors duration-300 ${hovered === item.name ? 'text-white' : 'text-white/40'}`}>
                                {item.icon}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* MOBILE TRIGGER */}
            <div className="md:hidden fixed top-6 right-6 z-[100]">
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-black border border-white/20 rounded-full flex items-center justify-center text-white shadow-2xl relative"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? <X key="close" size={24} /> : <Menu key="open" size={24} />}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* MOBILE FULLSCREEN OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[90] bg-black flex flex-col items-center justify-center overflow-hidden"
                    >
                        {/* Removed background grid dots/lines */}
                        <nav className="relative z-10 flex flex-col items-start gap-8">
                            {links.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.path}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => setIsOpen(false)}
                                    className="group flex items-center gap-6"
                                >
                                    <span className="font-mono text-white/20 text-sm">/0{index + 1}</span>
                                    <h2 className="text-6xl sm:text-8xl font-black uppercase italic tracking-tighter text-white/10 group-hover:text-white transition-all duration-500 leading-none">
                                        {item.name}
                                    </h2>
                                </motion.a>
                            ))}
                        </nav>
                        
                       
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}