import { useState, useEffect } from "react";
import { Menu, X, Home, Briefcase, BookOpen, Mail, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hovered, setHovered] = useState(null);

    const links = [
        { name: "Home", icon: <Home size={20} />, path: "/", id: "01" },
        { name: "About", icon: <Briefcase size={20} />, path: "/about", id: "02" },
        { name: "Service", icon: <BookOpen size={20} />, path: "/service", id: "03" },
        { name: "Policy", icon: <Zap size={20} />, path: "/private-policy", id: "04" },
        { name: "Contact", icon: <Mail size={20} />, path: "/contact", id: "05" },
    ];

    return (
        <>
            {/* DESKTOP VERTICAL DOCK */}
            <div className="hidden md:block fixed left-6 top-1/2 -translate-y-1/2 z-[100]">
                {/* Optimized padding for 100% zoom scaling */}
                <div className="flex flex-col items-center gap-2.5 py-3 px-2 bg-gray-400/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl relative">

                    {links.map((item) => (
                        <motion.a
                            key={item.name}
                            href={item.path}
                            onMouseEnter={() => setHovered(item.name)}
                            onMouseLeave={() => setHovered(null)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="relative flex items-center justify-center w-10 h-10 rounded-full border border-transparent hover:border-white/20 transition-colors group"
                        >
                            {/* Tooltip Terminal */}
                            <AnimatePresence>
                                {hovered === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 45 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        className="absolute left-0 whitespace-nowrap z-50 pointer-events-none"
                                    >
                                        <div className="bg-black border border-white/20 px-3 py-1.5 rounded-lg flex items-center gap-2.5">
                                            <span className="text-[10px] font-mono text-white/40">{item.id}</span>
                                            <span className="text-xs font-black uppercase tracking-[0.15em] text-white">
                                                {item.name}
                                            </span>
                                        </div>
                                        <div className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-4 h-[1px] bg-white/20" />
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
            <div className="md:hidden fixed top-4 right-4 z-[100]">
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-black border border-white/20 rounded-full flex items-center justify-center text-white shadow-2xl relative"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? <X key="close" size={22} /> : <Menu key="open" size={22} />}
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
                        className="fixed inset-0 z-[90] bg-gray-100 flex flex-col items-center justify-center overflow-hidden px-6"
                    >
                        {/* Scaled down gaps and font size to fit 100% viewport properly */}
                        <nav className="relative z-10 flex flex-col items-start gap-6 w-full max-w-xs">
                            {links.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.path}
                                    initial={{ x: -30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.04 }}
                                    onClick={() => setIsOpen(false)}
                                    className="group flex items-center gap-4 w-full py-1"
                                >
                                    <h2 className="text-4xl sm:text-6xl font-black uppercase italic tracking-tighter text-black group-hover:text-white transition-all duration-300 leading-none">
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