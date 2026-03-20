import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const About = () => {
    useEffect(() => {
        const snowContainer = document.querySelector(".snow-wrapper");

        if (!snowContainer) return;

        // Clear old snow if component re-renders
        snowContainer.innerHTML = "";

        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const snowCount = isMobile ? 25 : 60;

        for (let i = 0; i < snowCount; i++) {
            const snow = document.createElement("span");
            snow.classList.add("snowflake");

            const size = Math.random() * 8 + 4;
            snow.style.width = size + "px";
            snow.style.height = size + "px";

            snow.style.left = Math.random() * 100 + "vw";

            const duration = isMobile
                ? Math.random() * 6 + 10
                : Math.random() * 5 + 5;

            snow.style.animationDuration = duration + "s";
            snow.style.animationDelay = Math.random() * 5 + "s";

            snowContainer.appendChild(snow);
        }

        // Scroll reveal
        const cards = document.querySelectorAll(".reveal");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                });
            },
            { threshold: 0.2 }
        );

        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative min-h-screen bg-[#131047] text-white overflow-hidden py-20 sm:py-28 px-4 sm:px-6">
            <Navbar />

            {/* Snow */}
            <div className="snow-wrapper absolute inset-0 z-0"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto space-y-16 sm:space-y-24">

                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-12 sm:mb-16">
                    Discover My Experience
                </h1>

                {/* Timeline Cards */}
                {[
                    {
                        title: "Frontend Development | 2020-2022",
                        desc: "Focused on building responsive and interactive user interfaces using modern web technologies. Developed strong foundations in HTML, CSS, JavaScript, and React while learning UI/UX principles, component-based architecture, and performance optimization."
                    },
                    {
                        title: "Backend Development | 2022–2025",
                        desc: "Transitioned into full-stack development by building scalable server-side applications using Node.js, Express, and MongoDB. Worked on REST APIs, authentication systems, database design, deployment, and integrating frontend with backend services."
                    },
                    {
                        title: "Backend + Security | 2025–Present",
                        desc: "Currently focusing on secure and scalable system design. Implementing authentication best practices, API protection strategies, database security, and performance monitoring while building production-ready applications with a strong emphasis on reliability and data protection."
                    },
                    {
                        title: "Performance Optimization | in-next",
                        desc: "Optimizing applications for speed, scalability, and clean architecture."
                    }
                ].map((item, index) => (
                    <div key={index} className="timeline-card reveal">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                            {item.title}
                        </h2>
                        <h4 className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                            {item.desc}
                        </h4>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default About;
