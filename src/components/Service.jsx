import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Database,
    Globe,
    Briefcase,
    Activity,
    Search,
    Compass,
} from "lucide-react";

const Service = () => {
    const services = [
        {
            number: "01",
            icon: <Globe className="text-green-500" size={24} />,
            title: "Frontend & SaaS UI Engineering",
            desc: "Build fast, responsive SaaS interfaces and web applications with clean component architecture, intuitive UX, and room to scale.",
            points: [
                "0-to-1 SaaS UI",
                "Responsive Web Apps",
                "Design Systems & State",
            ],
        },
        {
            number: "02",
            icon: <Database className="text-green-500" size={24} />,
            title: "Full Stack Application & Deployment",
            desc: "Develop end-to-end web applications with structured APIs, reliable databases, and smooth production deployments.",
            points: [
                "End-to-End Web Apps",
                "Auth, Roles & APIs",
                "Production Launch",
            ],
        },
        {
            number: "03",
            icon: <ShieldCheck className="text-green-500" size={24} />,
            title: "DevOps, Cloud & CI/CD",
            desc: "Set up containerized cloud environments, reverse proxies, and automated pipelines for consistent, low-risk releases.",
            points: [
                "Docker & Cloud Setup",
                "Automated CI/CD",
                "Reverse Proxy & SSL",
            ],
        },
        {
            number: "04",
            icon: <Activity className="text-green-500" size={24} />,
            title: "Security, Hardening & Monitoring",
            desc: "Keep applications and servers healthy with practical access controls, uptime checks, log visibility, and system/network monitoring.",
            points: [
                "Uptime & Health Alerts",
                "Server & Network Logs",
                "Auth & Access Hardening",
            ],
        },
        {
            number: "05",
            icon: <Search className="text-green-500" size={24} />,
            title: "Technical SEO & Performance",
            desc: "Improve search visibility, page speed, and Core Web Vitals so SaaS landing pages and web apps load quickly worldwide.",
            points: [
                "Technical SEO Setup",
                "Core Web Vitals",
                "Metadata & Crawlability",
            ],
        },
        {
            number: "06",
            icon: <Briefcase className="text-green-500" size={24} />,
            title: "Internal Tools & Workflow Automation",
            desc: "Build custom admin dashboards, client portals, and automated workflows that remove repetitive manual operations.",
            points: [
                "Admin Dashboards",
                "Client Portals",
                "Workflow Automation",
            ],
        },
        {
            number: "07",
            icon: <Compass className="text-green-500" size={24} />,
            title: "Software Journey Consulting",
            desc: "Practical technical guidance for founders planning an MVP, choosing a stack, or moving from prototype to reliable production.",
            points: [
                "MVP Scope & Roadmap",
                "Stack & Architecture Advice",
                "Deployment Readiness",
            ],
        }
    ];

    return (
        <section className="relative bg-black py-24 md:py-44 px-4 sm:px-8 overflow-visible w-full">

            {/* TOP OVERLAY: Clip-path disabled on mobile, active on desktop */}
            <div
                className="absolute top-0 left-0 w-full h-20 md:h-32 bg-white z-20 service-top-clip"
            />

            {/* Perfectly Centered Container with responsive desktop dock padding */}
            <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-12 md:pl-28 lg:pl-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">

                    {/* LEFT SIDE: Heading - Sticky only on Desktop (lg) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-44 space-y-4 md:space-y-6 text-center lg:text-left">
                        <div className="inline-block px-4 py-1 border border-green-500/30 bg-green-500/10 rounded-full">
                            <span className="text-green-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">Solutions</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight">
                            Our Expertise <br />
                            <span className="text-green-600 italic">Engineering</span>
                        </h2>

                        <div className="h-1.5 w-16 md:w-20 bg-green-500 rounded-full mx-auto lg:mx-0" />
                    </div>

                    {/* RIGHT SIDE: Services Cards */}
                    <div className="lg:col-span-7 space-y-6 md:space-y-8 w-full">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="group bg-[#525252] p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 hover:border-green-500/30 transition-all duration-500 w-full"
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
                                        </div>
                                        <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
                                            {service.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.points.map((p, i) => (
                                                <span key={i} className="px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-300 border border-white/10 rounded-md group-hover:border-green-500/20 transition-all">
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

            {/* BOTTOM OVERLAY: Clip-path disabled on mobile, active on desktop */}
            <div
                className="absolute bottom-0 left-0 w-full h-20 md:h-32 bg-white z-40 service-bottom-clip"
                style={{ marginBottom: "-1px" }}
            />

            <style>{`
                .service-top-clip,
                .service-bottom-clip {
                    clip-path: none;
                }
                @media (min-width: 768px) {
                    .service-top-clip {
                        clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 80% 40%, 75% 0%, 55% 0%, 50% 40%, 25% 40%, 20% 0%, 0% 0%);
                    }
                    .service-bottom-clip {
                        clip-path: polygon(0% 100%, 100% 100%, 100% 60%, 80% 60%, 75% 100%, 55% 100%, 50% 60%, 25% 60%, 20% 100%, 0% 100%);
                    }
                }
            `}</style>
        </section>
    );
};

export default Service;