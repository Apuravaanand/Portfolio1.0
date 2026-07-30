import { useState, useEffect } from "react";
import { Github, Linkedin, Code2, Server, Database, Globe } from "lucide-react";
import Navbar from "../components/Navbar";
import { FaDiscord, FaInstagram, FaTelegramPlane, FaLinkedin } from "react-icons/fa";

const SOCIAL_LINKS = [
    {
        Icon: FaInstagram,
        link: import.meta.env.VITE_INSTAGRAM,
        label: "Instagram",
    },
    {
        Icon: FaTelegramPlane,
        link: import.meta.env.VITE_TELEGRAM,
        label: "Telegram",
    },
    {
        Icon: FaLinkedin,
        link: import.meta.env.VITE_LINKEDIN,
        label: "LinkedIn",
    },
    {
        Icon: FaDiscord,
        link: import.meta.env.VITE_DISCORD,
        label: "Discord",
    },
];

const TECH_ITEMS = [
    { icon: Code2, text: "Custom Web Application Development" },
    { icon: Server, text: "Scalable API & Backend Development" },
    { icon: Database, text: "System Integration & Automation" },
];

export default function Landing() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-screen h-screen overflow-hidden bg-[#fafafa] text-gray-900 font-sans flex flex-col">
            <Navbar />

            {/* Fixed Background */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute w-[500px] h-[500px] blur-[120px] rounded-full -top-20 -left-20 opacity-[0.15] bg-green-400" />
                <div className="absolute w-[500px] h-[500px] blur-[120px] rounded-full bottom-0 -right-20 opacity-[0.1] bg-blue-400" />
            </div>

            <main className=" flex-1 flex items-center justify-center w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-12 lg:px-16 py-6 md:py-8">
                {loading ? (
                    /* Skeleton Loader */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full animate-pulse">
                        <div className="space-y-6 text-center md:text-left">
                            <div className="h-16 bg-gray-200 rounded-2xl w-full max-w-md mx-auto md:mx-0" />
                            <div className="h-6 bg-gray-200 rounded-lg w-full max-w-lg mx-auto md:mx-0" />
                        </div>
                        <div className="w-full h-80 bg-gray-200 rounded-[2rem] max-w-lg mx-auto" />
                    </div>
                ) : (
                    /* Main Content */
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full mb-8">
                        <div className="text-center md:text-left mt-10 space-y-4">
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
                                Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">Scalable Digital</span> Solutions
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-xl mx-auto md:mx-0 leading-relaxed text-justify">
                                Turn your idea into a reliable product with modern full-stack development.
                                I create scalable end-to-end applications, secure backend APIs, and responsive
                                user experiences focused on performance, quality, and long-term growth.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">
                                {SOCIAL_LINKS.map(({ Icon, link }, index) => (
                                    <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="p-4 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-green-100 hover:border-green-200 transition-all">
                                        <Icon size={22} className="text-gray-700 hover:text-green-600" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="relative w-full max-w-lg mx-auto">
                            <div className="relative rounded-[2rem] p-5 sm:p-6 lg:p-8 bg-white/90 backdrop-blur-xl  border border-gray-400">
                                <div className="flex flex-col gap-8">
                                    <div className="border-b border-gray-100 pb-4">
                                        <h3 className="text-2xl font-bold text-gray-800">Core Expertise</h3>
                                        <pre className="text-sm font-semibold text-green-600 uppercase tracking-tighter">Scalable  • Secure  • Business Focused</pre>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        {TECH_ITEMS.map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-gray-100 border border-gray-200">
                                                <div className="p-2.5 bg-white rounded-lg shadow-sm"><item.icon size={20} className="text-green-600" /></div>
                                                <span className="text-sm font-bold text-gray-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}