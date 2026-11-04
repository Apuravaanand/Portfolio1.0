import React, { useState, useEffect } from 'react';
// Path adjusted to your local assets
import profileImg from '../assets/about.png';

const TYPING_TITLES = [
    "FOUNDER & CEO",
    "CLOUD ARCHITECT",
    "SAAS DEVELOPER",
    "SYSTEMS ENGINEER"
];

const About_first = () => {
    // Typewriter State Logic
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentFullText = TYPING_TITLES[titleIndex];
        let typingSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && displayedText === currentFullText) {
            typingSpeed = 2000;
        } else if (isDeleting && displayedText === "") {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % TYPING_TITLES.length);
            typingSpeed = 400;
        }

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
                if (displayedText === currentFullText) {
                    setIsDeleting(true);
                }
            } else {
                setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, titleIndex]);

    return (
        <section className="relative block w-full bg-white pt-6 sm:pt-10 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-16 font-sans z-10 clear-both">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 relative z-10">

                {/* Top / Right Side: Organic Bordered Image Container */}
                <div className="flex-1 relative order-1 md:order-2 flex justify-center items-center w-full">

                    {/* Soft Backdrop Ambient Glow */}
                    <div className="absolute w-56 sm:w-80 h-56 sm:h-80 bg-green-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

                    {/* Organic Mask Container */}
                    <div
                        className="relative p-2 bg-gradient-to-tr from-green-500 to-green-300 shadow-xl shadow-green-500/10"
                        style={{
                            borderRadius: "60% 40% 70% 30% / 40% 50% 60% 50%"
                        }}
                    >
                        <div
                            className="overflow-hidden bg-gray-100"
                            style={{
                                borderRadius: "58% 42% 68% 32% / 38% 48% 58% 52%"
                            }}
                        >
                            <img
                                src={profileImg}
                                alt="Apurava Anand"
                                className="w-full max-w-[200px] sm:max-w-xs md:max-w-sm h-auto object-cover block"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom / Left Side: Content with Desktop Dock Offset */}
                <div className="flex-1 space-y-4 text-center md:text-left order-2 md:order-1 pl-0 md:pl-28 lg:pl-32 w-full">

                    {/* Animated Re-typing Subtitle */}
                    <div className="flex items-center justify-center md:justify-start gap-1.5 h-6">
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-green-600 font-mono">
                            {displayedText}
                            <span className="inline-block w-1.5 h-4 bg-green-600 ml-1 align-middle animate-pulse" />
                        </p>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
                        Apurava Anand
                    </h1>

                    {/* Description Paragraph */}
                    <p className="max-w-xl mx-auto md:mx-0 border-l-4 border-green-600 pl-4 py-1 text-sm sm:text-base leading-relaxed text-gray-600 text-left">
                        Architecting high-availability cloud infrastructure, custom SaaS automation pipelines, and scalable enterprise software solutions.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About_first;