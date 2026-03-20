import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Server, Database } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Landing() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden bg-white text-gray-900">
            <Navbar />

            {/* Background Glow */}
            <div className="absolute w-96 h-96 blur-3xl rounded-full top-10 left-10 opacity-10 bg-green-400" />
            <div className="absolute w-96 h-96 blur-3xl rounded-full bottom-10 right-10 opacity-10 bg-gray-300" />

            <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center min-h-screen relative z-10 pt-16">

                {/* LEFT SIDE */}
                <div className="text-center md:text-left space-y-6">
                    {!loaded ? (
                        <>
                            <div className="w-3/4 h-12 bg-gray-200 animate-pulse rounded-md mx-auto md:mx-0"></div>
                            <div className="w-full md:w-5/6 h-6 bg-gray-200 animate-pulse rounded-md mx-auto md:mx-0"></div>
                            <div className="flex gap-4 justify-center md:justify-start mt-6">
                                <div className="w-32 h-10 bg-gray-200 animate-pulse rounded-xl"></div>
                            </div>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                                Building <span className="text-green-600">Scalable Digital</span> Solutions
                            </h1>

                            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 text-gray-600">
                                I design and develop scalable web applications with modern architecture,
                                clean code, and performance-driven solutions.
                                <br />
                                I build systems that don’t just work — they perform.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <button
                                    onClick={() =>
                                        document
                                            .getElementById("projects")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="px-7 py-3 rounded-xl font-semibold shadow-md transition duration-300 hover:scale-105 bg-green-600 text-white"
                                >
                                    View Projects
                                </button>
                            </div>

                            <div className="flex gap-6 mt-10 justify-center md:justify-start">
                                {[
                                    { Icon: Github, link: "https://github.com/Apuravaanand" },
                                    { Icon: Linkedin, link: "https://www.linkedin.com/in/apurava-anand-/" },
                                ].map(({ Icon, link }, index) => (
                                    <a
                                        key={index}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full transition duration-300 hover:scale-110 border border-gray-200 bg-white shadow-sm hover:bg-green-50"
                                    >
                                        <Icon size={20} className="text-green-600" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* RIGHT SIDE */}
                <div className="relative w-full max-w-md md:max-w-none mx-auto">
                    {!loaded ? (
                        <div className="w-full h-40 bg-gray-200 animate-pulse rounded-2xl"></div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            {/* Rotating Glow */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 8,
                                    ease: "linear",
                                }}
                                className="absolute -inset-6 rounded-[40px] 
        bg-[conic-gradient(#22c55e,_#bbf7d0,_#e5e7eb,_#22c55e)]
        blur-3xl opacity-40"
                            />

                            {/* Responsive Horizontal Card */}
                            <div className="relative rounded-2xl w-full md:w-[115%] lg:w-[125%] px-6 md:px-8 py-4 bg-white shadow-xl border border-gray-200">

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                                    {/* Title */}
                                    <div className="text-center md:text-left">
                                        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                                            Core Expertise
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Scalable • Secure • Performance Driven
                                        </p>
                                    </div>

                                    {/* Items */}
                                    <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-center justify-center md:justify-end gap-6">
                                        {[
                                            { icon: Code2, text: "Full Stack" },
                                            { icon: Server, text: "Backend Architecture" },
                                            { icon: Database, text: "Authentication" },
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="p-2 bg-green-100 rounded-lg">
                                                    <item.icon size={18} className="text-green-600" />
                                                </div>
                                                <span className="text-sm font-medium text-gray-700">
                                                    {item.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                                {/* Badge */}
                                <div className="absolute -top-3 right-4 md:right-8">
                                    <span className="px-3 py-1 text-xs font-semibold bg-green-600 text-white rounded-full shadow-md">
                                        Production Ready
                                    </span>
                                </div>

                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}