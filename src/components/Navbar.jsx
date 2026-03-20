import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const links = ["Home", "About", "Blogs", "Contact"];

    return (
        <>
            {/* Desktop Navbar */}
            <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg rounded-full px-10 py-3">
                    <div className="flex gap-10 text-black-200 font-medium">
                        {links.map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase()}`}
                                className="text-black-200 relative group transition duration-300"
                            >
                                <span className="group-hover:text-green-600 transition">
                                    {item}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden fixed top-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="backdrop-blur-md bg-white/10 border border-white/20 p-3 rounded-full text-black transition hover:scale-105"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed top-20 left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl z-40"
                    >
                        <div className="flex flex-col items-center gap-6 py-6 text-gray-800 font-medium">
                            {links.map((item) => (
                                <a
                                    key={item}
                                    href={`/${item.toLowerCase()}`}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-green-600 transition text-lg sm:text-xl"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
