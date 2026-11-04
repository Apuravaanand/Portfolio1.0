import React from 'react';
import { GraduationCap, Code2, Cpu, Cloud, Layers, Briefcase, Award, FileText, CheckCircle2 } from 'lucide-react';

const About_sec = () => {
    const skillsData = [
        {
            title: "Frontend Engineering",
            major: "React.js | Next.js | JavaScript | Responsive Interfaces",
            status: "User Experience & Performance",
            icon: <Code2 className="text-green-600" size={24} />
        },
        {
            title: "Backend Development",
            major: "Node.js | Express.js | GraphQL | REST APIs",
            status: "Scalable Server Architecture",
            icon: <Cpu className="text-green-600" size={24} />
        },
        {
            title: "Database Engineering",
            major: "MongoDB | SQL | MySQL Workbench",
            status: "Data Modeling & Optimization",
            icon: <GraduationCap className="text-green-600" size={24} />
        },
        {
            title: "Automation & Integration",
            major: "Python | API Integration | Postman | Workflow Automation",
            status: "Business Process Automation",
            icon: <Cloud className="text-green-600" size={24} />
        },
        {
            title: "Software Architecture",
            major: "Scalable Systems | Clean Architecture | DSA (C++)",
            status: "Enterprise Engineering Practices",
            icon: <Layers className="text-green-600" size={24} />
        }
    ];

    return (
        <section
            className="relative z-45 w-full bg-gray-100 py-16 sm:py-20 overflow-visible border-y border-zinc-300 font-sans"
            style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                marginTop: "-40px",
                paddingTop: "90px",
                paddingBottom: "80px"
            }}
        >
            {/* Symmetrical mobile padding (px-4), with desktop-only left offset for the navigation dock (md:pl-28) */}
            <div className="max-w-6xl mx-auto px-4 sm:px-8 md:pl-32 lg:pl-32 pr-4 sm:pr-8 space-y-16 sm:space-y-20">

                {/* 1. DETAILS / SUMMARY ROW */}
                <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 sm:p-2.5 bg-green-500/10 border border-green-500/20 text-green-600 rounded-xl shrink-0">
                            <FileText size={22} className="sm:w-6 sm:h-6" />
                        </div>
                        <h2 className="text-lg sm:text-2xl md:text-3xl font-black tracking-tight text-gray-900 uppercase">
                            Professional Summary
                        </h2>
                    </div>
                    <div className="bg-white border border-gray-200 p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm">
                        <p className="text-gray-700 text-xs sm:text-base md:text-lg leading-relaxed sm:leading-loose text-left tracking-normal">
                            Final-year B.Tech engineering student and software developer specializing in high-availability cloud infrastructure, MERN stack web applications, and embedded systems automation. Passionate about clean code conventions, scalable system architectures, and robust API design.
                        </p>
                    </div>
                </div>

                {/* 2. SKILLS / COMPETENCIES ROW */}
                <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 sm:p-2.5 bg-green-500/10 border border-green-500/20 text-green-600 rounded-xl shrink-0">
                            <Code2 size={22} className="sm:w-6 sm:h-6" />
                        </div>
                        <h2 className="text-lg sm:text-2xl md:text-3xl font-black tracking-tight text-gray-900 uppercase">
                            Technical Competencies
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {skillsData.map((item, index) => (
                            <div key={index} className="bg-white border border-gray-200 p-5 sm:p-6 rounded-2xl shadow-sm hover:border-green-500 transition-all flex flex-col justify-between">
                                <div>
                                    <div className="mb-3 sm:mb-4">{item.icon}</div>
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900">{item.title}</h3>
                                    <p className="text-xs sm:text-sm font-medium text-green-600 mt-1 leading-normal">{item.major}</p>
                                </div>
                                <span className="text-[11px] sm:text-xs font-mono text-gray-400 mt-4 pt-3 sm:pt-4 border-t border-gray-100 block">
                                    {item.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. EDUCATION ROW */}
                <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 sm:p-2.5 bg-green-500/10 border border-green-500/20 text-green-600 rounded-xl shrink-0">
                            <GraduationCap size={22} className="sm:w-6 sm:h-6" />
                        </div>
                        <h2 className="text-lg sm:text-2xl md:text-3xl font-black tracking-tight text-gray-900 uppercase">
                            Education & Academic Background
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl shadow-sm">
                            <span className="text-[10px] sm:text-xs font-mono font-bold px-3 py-1 bg-green-500/10 text-green-700 rounded-full inline-block mb-3">
                                Final Year Student
                            </span>
                            <h3 className="text-base sm:text-xl font-bold text-gray-900">Bachelor of Technology (B.Tech)</h3>
                            <p className="text-xs sm:text-sm text-green-600 font-semibold mt-1">Thapar University</p>
                            <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-normal">Focusing on advanced software engineering, data structures, and enterprise application development.</p>
                        </div>

                        <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl shadow-sm">
                            <span className="text-[10px] sm:text-xs font-mono font-bold px-3 py-1 bg-green-500/10 text-green-700 rounded-full inline-block mb-3">
                                2021 – 2024 | GPA: 8.76 / 10
                            </span>
                            <h3 className="text-base sm:text-xl font-bold text-gray-900">Diploma in Electronics & Communication</h3>
                            <p className="text-xs sm:text-sm text-green-600 font-semibold mt-1">Central Institute of Technology, Kokrajhar</p>
                            <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-normal">Core hardware tinkering, embedded microcontrollers, and foundational electronics engineering.</p>
                        </div>
                    </div>
                </div>

                {/* 4. EXPERIENCE ROW */}
                <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 sm:p-2.5 bg-green-500/10 border border-green-500/20 text-green-600 rounded-xl shrink-0">
                            <Briefcase size={22} className="sm:w-6 sm:h-6" />
                        </div>
                        <h2 className="text-lg sm:text-2xl md:text-3xl font-black tracking-tight text-gray-900 uppercase">
                            Professional Experience
                        </h2>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                            <h3 className="text-base sm:text-xl font-bold text-gray-900">Full-Stack Developer Intern</h3>
                            <span className="text-[10px] sm:text-xs font-mono font-bold px-3 py-1 bg-green-500/10 text-green-700 rounded-full w-fit">
                                June 2026 – July 2026
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-green-600 mb-3 sm:mb-4">VrixaaLabs Private Limited</p>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed sm:leading-loose text-left">
                            Engineered real-time bidirectional messaging features utilizing Socket.IO across Next.js and Node.js repositories. Collaborated on scalable API endpoints, secure JWT authentication flows, and dynamic UI state synchronization under professional guidance.
                        </p>
                    </div>
                </div>

                {/* 5. CERTIFICATES & CREDENTIALS ROW */}
                <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 sm:p-2.5 bg-green-500/10 border border-green-500/20 text-green-600 rounded-xl shrink-0">
                            <Award size={22} className="sm:w-6 sm:h-6" />
                        </div>
                        <h2 className="text-lg sm:text-2xl md:text-3xl font-black tracking-tight text-gray-900 uppercase">
                            Certificates & Credentials
                        </h2>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="font-bold text-sm sm:text-base text-gray-900">Internship Completion Certificate</h4>
                                <p className="text-[11px] sm:text-xs font-mono text-green-600 mt-0.5">VrixaaLabs Private Limited</p>
                                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-normal">Verified internship certification for full-stack MERN and real-time Socket.IO development.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 sm:gap-4">
                            <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="font-bold text-sm sm:text-base text-gray-900">Full-Stack System Architecture</h4>
                                <p className="text-[11px] sm:text-xs font-mono text-green-600 mt-0.5">Advanced Engineering Certification</p>
                                <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-normal">Expertise in RESTful CRUD APIs, role-based access control (RBAC), and secure token handling.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Matching Desktop Silhouette */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (min-width: 1024px) {
                    section {
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