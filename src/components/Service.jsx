import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Database, Globe, Briefcase } from "lucide-react";

const Service = () => {
    const services = [
        {
            number: "01",
            icon: <Globe className="text-green-500" size={24} />,
            title: "Full Stack MERN Applications",
            desc: "End-to-end development of dynamic web apps using MongoDB, Express, React, and Node.js.",
            points: ["Custom SaaS Platforms", "Admin Dashboards", "E-commerce Solutions"]
        },
        {
            number: "02",
            icon: <ShieldCheck className="text-green-500" size={24} />,
            title: "Professional Portfolios",
            desc: "High-end digital identities with dark themes and glassmorphism UI.",
            points: ["Developer Identity Kits", "Interactive Showcases", "Landing Posters"]
        },
        {
            number: "03",
            icon: <Database className="text-green-500" size={24} />,
            title: "Backend & API Architecture",
            desc: "Secure, scalable server-side systems with optimized database logic.",
            points: ["JWT & OAuth Security", "RESTful API Design", "DB Optimization"]
        },
        {
            number: "04",
            icon: <Briefcase className="text-green-500" size={24} />,
            title: "Business & Enterprise Sites",
            desc: "Tech-forward websites designed for corporate scalability and high conversion.",
            points: ["CMS Integration", "Scalable Architecture", "SEO Optimization"]
        }
    ];

    return (
        <section className="relative bg-black py-24 md:py-44 px-4 sm:px-8 md:px-16 overflow-visible">

            {/* TOP OVERLAY: Adjusted height for mobile to prevent layout shift */}
            <div
                className="absolute top-0 left-0 w-full h-20 md:h-32 bg-white-100 z-20"
                style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 80% 40%, 75% 0%, 55% 0%, 50% 40%, 25% 40%, 20% 0%, 0% 0%)" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">

                    {/* LEFT SIDE: Heading - Sticky only on Desktop (lg) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-44 space-y-4 md:space-y-6 text-center lg:text-left">
                        <div className="inline-block px-4 py-1 border border-green-500/30 bg-green-500/10 rounded-full">
                            <span className="text-green-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">Solutions</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            Digital <br />
                            <span className="text-green-600 italic">Architecture</span>
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg max-w-sm mx-auto lg:mx-0">
                            Engineering production-ready MERN solutions with a focus on security and scalability.
                        </p>
                        <div className="h-1.5 w-16 md:w-20 bg-green-500 rounded-full mx-auto lg:mx-0" />
                    </div>

                    {/* RIGHT SIDE: Services */}
                    <div className="lg:col-span-7 space-y-6 md:space-y-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="group bg-[#0c0c0c] p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 hover:border-green-500/30 transition-all duration-500"
                            >
                                <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
                                    <div className="shrink-0 flex justify-start sm:justify-center">
                                        <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/5 rounded-xl md:rounded-2xl group-hover:bg-green-500/10 group-hover:rotate-6 transition-all duration-300">
                                            {service.icon}
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2 md:mb-4">
                                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                                                {service.title}
                                            </h3>
                                            <span className="hidden sm:block text-2xl md:text-3xl font-black text-white/5 italic select-none">
                                                {service.number}
                                            </span>
                                        </div>
                                        <p className="text-gray-500 text-sm md:text-base mb-6 leading-relaxed">
                                            {service.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.points.map((p, i) => (
                                                <span key={i} className="px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-white/10 rounded-md group-hover:border-green-500/20 transition-all">
                                                    {p}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* BOTTOM OVERLAY: Higher Z-index and interlocks with Achievements */}
            <div
                className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-white z-40"
                style={{
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 60%, 80% 60%, 75% 100%, 55% 100%, 50% 60%, 25% 60%, 20% 100%, 0% 100%)",
                    marginBottom: "-1px" // Fixes micro-gap on some browsers
                }}
            />
        </section>
    );
};

export default Service;