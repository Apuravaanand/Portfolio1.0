import React from 'react';
import { GraduationCap, Code2, Cpu, Cloud, Layers } from 'lucide-react';

const About_sec = () => {
    const educationData = [
        {
            title: "Bachelor of Technology",
            major: "Electronic & Communication Engineering",
            status: "Core Academic Foundation",
            icon: <GraduationCap className="text-green-500" size={24} />
        },
        {
            title: "MERN Stack Architecture",
            major: "Full-Stack Development Specialist",
            status: "Professional Certification",
            icon: <Code2 className="text-green-500" size={24} />
        },
        {
            title: "Frontend Engineer",
            major: "React | Next.js Developer",
            status: "Specialized Training",
            icon: <Cpu className="text-green-500" size={24} />
        },
        {
            title: "Cloud & DevOps Integration",
            major: "AWS | Docker | CI/CD Pipelines",
            status: "Infrastructure Mastery",
            icon: <Cloud className="text-green-500" size={24} />
        },
        {
            title: "UI/UX & Product Design",
            major: "Figma | Design Systems",
            status: "Creative Implementation",
            icon: <Layers className="text-green-500" size={24} />
        }
    ];

    return (
        <section
            className="relative z-45 w-full bg-gray-200 py-20 overflow-visible border-y border-zinc-300"
            style={{
                /* Standard mobile clip-path */
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                marginTop: "-40px",
                paddingTop: "100px",
                paddingBottom: "80px"
            }}
        >
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/30 -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">

                {/* Left Side: Section Label */}
                <div className="lg:col-span-4 relative">
                    <div className="sticky top-48">
                        {/* Background Watermark */}
                        <h2 className="text-9xl font-black text-black/5 absolute -top-16 -left-4 select-none leading-none z-0">
                            ED_U
                        </h2>

                        <div className="relative z-10">
                            <h3 className="text-4xl md:text-5xl font-black text-black uppercase italic leading-tight">
                                Academic <br />
                                <span className="text-green-600">Evolution</span>
                            </h3>
                            <div className="w-16 h-2 bg-black mt-4 shadow-[4px_4px_0px_rgba(34,197,94,1)]" />
                            <p className="text-zinc-600 mt-10 font-medium leading-relaxed max-w-xs border-l-2 border-green-500/30 pl-4">
                                Bridging the gap between hardware logic and modern web architecture.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Education List */}
                <div className="lg:col-span-8 space-y-6">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border border-zinc-200 p-8 hover:bg-black hover:border-black transition-all duration-500 ease-in-out shadow-sm overflow-hidden"
                        >
                            {/* Content Layer */}
                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex items-center gap-6">
                                    <div className="p-4 bg-zinc-50 border border-zinc-100 group-hover:bg-zinc-900 group-hover:border-zinc-800 transition-colors duration-500">
                                        {edu.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl md:text-2xl font-black text-black group-hover:text-white uppercase italic tracking-tight transition-colors duration-500">
                                            {edu.title}
                                        </h4>
                                        <p className="text-zinc-500 group-hover:text-zinc-400 font-bold text-xs uppercase tracking-widest mt-1 transition-colors duration-500">
                                            {edu.major}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-[10px] font-mono font-black text-green-600 bg-green-50 border border-green-200 px-4 py-1.5 group-hover:bg-green-600 group-hover:text-black group-hover:border-green-600 transition-all duration-500">
                                        {edu.status}
                                    </span>
                                </div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[20px] border-t-transparent border-r-[20px] border-r-zinc-200 group-hover:border-r-green-500 transition-colors duration-500 z-20" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Matching Desktop Silhouette */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (min-width: 1024px) {
                    section {
                        /* Locks into the Achievements section's top profile */
                        clip-path: polygon(0% 0%, 20% 0%, 25% 40px, 45% 40px, 50% 0%, 75% 0%, 80% 40px, 100% 40px, 100% 100%, 0% 100%) !important;
                        margin-top: -80px !important;
                        padding-top: 160px !important;
                    }
                }
            `}} />
        </section>
    );
};

export default About_sec;