import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaDiscord, FaInstagram, FaTelegramPlane, FaLinkedin } from "react-icons/fa";

const SOCIAL_LINKS = [
    {
        Icon: FaLinkedin,
        link: import.meta.env.VITE_LINKEDIN,
        label: "Founder's LinkedIn",
    }
];

export default function Landing() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen w-full bg-white text-gray-900 font-sans flex flex-col overflow-x-hidden">
            <Navbar />

            {/* Fixed Background Glows */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] blur-[120px] rounded-full -top-20 -left-20 opacity-[0.1] bg-green-400" />
                <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] blur-[120px] rounded-full bottom-0 -right-20 opacity-[0.08] bg-blue-400" />
            </div>

            <main className="flex-1 flex items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-8 md:py-12">
                {loading ? (
                    /* Skeleton Loader */
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full animate-pulse">
                        <div className="w-full h-72 sm:h-80 bg-gray-100 rounded-[2rem] max-w-lg mx-auto" />
                        <div className="space-y-6 text-center lg:text-left">
                            <div className="h-16 bg-gray-100 rounded-2xl w-full max-w-md mx-auto lg:mx-0" />
                            <div className="h-6 bg-gray-100 rounded-lg w-full max-w-lg mx-auto lg:mx-0" />
                        </div>
                    </div>
                ) : (
                    /* Main Content */
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

                        {/* Left Column: pl-0 on mobile, md:pl-24 / lg:pl-12 only on desktop to clear the navbar dock */}
                        <div className="text-center lg:text-left space-y-6 pl-0 md:pl-24 lg:pl-12">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] font-audiowide">
                                Enterprise-Grade <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">Cloud Infrastructure</span> & <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">SaaS Automation</span>
                            </h1>

                            {/* Short, to-the-point paragraph with lighter weight */}
                            <p className="text-sm sm:text-base font-light text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed text-justify">
                                Resilient cloud architecture and automated deployments engineered for high-availability SaaS products.
                            </p>

                            {/* Social Links with Bottom Margin */}
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center lg:justify-start mb-12 sm:mb-16">
                                {SOCIAL_LINKS.map(({ Icon, link, label }, index) => (
                                    <a
                                        key={index}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="p-3 sm:p-4 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-green-100 hover:border-green-300 transition-all"
                                    >
                                        <Icon size={20} className="text-gray-700 hover:text-green-600" />
                                    </a>
                                ))}

                                <a href="/contact" className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl bg-gray-400 hover:bg-gray-600 text-white font-bold text-xs sm:text-sm uppercase tracking-widest shadow-md transition-all duration-300 flex items-center justify-center"  >
                                    Contact
                                </a>
                                <a href="/about" className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-2xl bg-blue-600 hover:bg-gray-600 text-white font-bold text-xs sm:text-sm uppercase tracking-widest shadow-md transition-all duration-300 flex items-center justify-center"  >
                                    About Provider
                                </a>
                            </div>
                        </div>

                        {/* Right Column / Top on Mobile: GIF Container */}
                        <div className="relative w-full max-w-md sm:max-w-lg mx-auto flex items-center justify-center lg:-translate-y-6">
                            <div className="relative rounded-[2rem] p-2 sm:p-3 bg-transparent overflow-hidden w-full">
                                <img
                                    src="/landing_page.gif"
                                    alt="Landing Page Animation"
                                    className="w-full h-auto rounded-[1.5rem] object-cover"
                                />
                            </div>
                        </div>

                    </div>
                )}
            </main>
        </div>
    );
}