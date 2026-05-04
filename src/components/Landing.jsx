import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Server, Database, Globe } from "lucide-react";
import Navbar from "../components/Navbar";
import { FaDiscord } from "react-icons/fa";

export default function Landing() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen relative overflow-x-hidden bg-[#fafafa] text-gray-900 font-sans">
            <Navbar />

            {/* Enhanced Background Glows */}
            <div className="absolute w-[500px] h-[500px] blur-[120px] rounded-full -top-20 -left-20 opacity-[0.15] bg-green-400 animate-pulse" />
            <div className="absolute w-[500px] h-[500px] blur-[120px] rounded-full bottom-0 -right-20 opacity-[0.1] bg-blue-400" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 grid md:grid-cols-2 gap-16 items-center min-h-[95vh] relative z-10 pt-24 pb-12">

                {/* LEFT SIDE: Typography & CTA */}
                <div className="text-center md:text-left space-y-8">
                    {!loaded ? (
                        <div className="space-y-4">
                            <div className="w-3/4 h-16 bg-gray-200 animate-pulse rounded-2xl mx-auto md:mx-0" />
                            <div className="w-full md:w-5/6 h-6 bg-gray-200 animate-pulse rounded-lg mx-auto md:mx-0" />
                            <div className="flex gap-4 justify-center md:justify-start pt-4">
                                <div className="w-40 h-12 bg-gray-200 animate-pulse rounded-full" />
                            </div>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                                Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">Scalable Digital</span> Solutions
                            </h1>

                            <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
                                Full Stack MERN Developer specializing in high-performance web applications
                                with clean architecture and professional UI/UX.
                            </p>

                            {/* Social Icons with Micro-interactions */}
                            <div className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">
                                {[
                                    { Icon: Github, link: "https://github.com/Apuravaanand", label: "GitHub" },
                                    { Icon: Linkedin, link: "https://www.linkedin.com/in/apurava-anand-/", label: "LinkedIn" },
                                    { Icon: Globe, link: "https://www.fiverr.com/users/apurava_anand/seller_dashboard", label: "Fiverr." },
                                    { Icon: FaDiscord, link: "https://discord.gg/hthSU6nT", label: "Discord" },
                                ].map(({ Icon, link, label }, index) => (
                                    <motion.a
                                        key={index}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -4 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group flex flex-col items-center"
                                    >
                                        <div className="p-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm group-hover:shadow-green-100 group-hover:border-green-200 group-hover:bg-green-50/50 transition-all duration-300">
                                            <Icon size={22} className="text-gray-700 group-hover:text-green-600 transition-colors" />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 text-green-600 transition-all duration-300">
                                            {label}
                                        </span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* RIGHT SIDE: Expertise Card */}
                <div className="relative w-full max-w-lg mx-auto">
                    {!loaded ? (
                        <div className="w-full h-64 bg-gray-200 animate-pulse rounded-[2rem]" />
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="relative group"
                        >
                            {/* Neon Conic Glow */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                                className="absolute -inset-4 rounded-[2.5rem] bg-[conic-gradient(from_0deg,#22c55e,#ffffff,#3b82f6,#22c55e)] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                            />

                            {/* Glassmorphism Card */}
                            <div className="relative rounded-[2rem] w-full p-8 bg-white/90 backdrop-blur-xl shadow-2xl border border-white/20 ring-1 ring-gray-900/5 overflow-hidden transition-transform duration-500">

                                <div className="flex flex-col gap-8">
                                    <div className="text-left border-b border-gray-100 pb-4">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                                            Core Expertise
                                        </h3>
                                        <p className="text-sm font-semibold text-green-600 uppercase tracking-tighter">
                                            Scalable • Secure • Performance
                                        </p>
                                    </div>

                                    {/* Tech Items */}
                                    <div className="grid grid-cols-1 gap-4">
                                        {[
                                            { icon: Code2, text: "MERN Stack Development" },
                                            { icon: Server, text: "Backend Architecture" },
                                            { icon: Database, text: "System Authentication" },
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ x: 10 }}
                                                className="flex items-center gap-4 p-3 rounded-xl bg-gray-200 hover:bg-green-50/50 transition-colors border border-transparent hover:border-green-100"
                                            >
                                                <div className="p-2.5 bg-white rounded-lg shadow-sm">
                                                    <item.icon size={20} className="text-green-600" />
                                                </div>
                                                <span className="text-sm font-bold text-gray-700">
                                                    {item.text}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <div className="absolute top-6 right-6">
                                    <div className="flex items-center gap-2 px-4 py-1.5 bg-green-600 rounded-full shadow-lg shadow-green-200">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                        </span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white">
                                            Ready to Ship
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}