import React from 'react';
// Path adjusted to your local assets
import profileImg from '../assets/about.png';

const About_first = () => {
    return (
        <section
            className="relative bg-white py-10 sm:py-16 md:py-0 px-4 sm:px-6 font-sans overflow-hidden z-30"
            style={{
                /* Standard mobile clip-path */
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                paddingBottom: "60px"
            }}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">

                {/* Left Side: Content */}
                <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left order-2 md:order-1 lg:pl-20 xl:pl-32">

                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-green-600">
                        • FOUNDER & CEO
                    </p>

                    <h1 className="mt-2 sm:mt-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight sm:leading-none text-gray-900">
                        APURAVA ANAND
                        <br className="hidden sm:inline" />
                        <span className="text-green-600">
                            {' '}SINGH
                        </span>
                    </h1>

                    <p className="mt-4 sm:mt-8 max-w-xl mx-auto md:mx-0 border-l-4 border-green-600 pl-4 sm:pl-6 text-base sm:text-lg leading-relaxed sm:leading-8 text-gray-600 text-left">
                        Helping startups, enterprises, and organizations build scalable digital products,
                        automate business operations, and accelerate growth through modern software engineering.
                    </p>

                    {/* <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                        <button className="bg-black text-white px-8 py-4 rounded-sm font-black uppercase tracking-widest hover:bg-green-600 transition-all duration-300 shadow-[8px_8px_0px_rgba(34,197,94,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 w-full sm:w-auto text-xs">
                            View My Work
                        </button>
                        <button className="border-2 border-zinc-200 text-black px-8 py-4 rounded-sm font-black uppercase tracking-widest hover:border-green-600 hover:text-green-600 transition-all duration-300 w-full sm:w-auto text-xs">
                            Hire Me on Fiverr
                        </button>
                    </div> */}
                </div>

                {/* Right Side: Photo */}
                <div className="flex-1 relative order-1 md:order-2 flex justify-center w-full px-2 sm:px-0">
                    {/* Decorative Elements for visual depth */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-zinc-50 rounded-full -z-10"></div>

                    {/* Industrial Frame Accent */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-8 border-r-8 border-green-600/20 -z-10 hidden lg:block"></div>

                    <img
                        src={profileImg}
                        alt="Apurava Anand"
                        className="w-full max-w-[220px] sm:max-w-xs md:max-w-md h-auto drop-shadow-[20px_20px_0px_rgba(0,0,0,0.05)] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-crosshair active:scale-95"
                    />
                </div>
            </div>

            {/* Matching Desktop Silhouette Style */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (min-width: 1024px) {
                    section {
                        /* Same notched bottom as achievements top */
                        clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 40px), 80% calc(100% - 40px), 75% 100%, 50% 100%, 45% calc(100% - 40px), 25% calc(100% - 40px), 20% 100%, 0% 100%) !important;
                        padding-bottom: 120px !important;
                    }
                }
            `}} />
        </section>
    );
};

export default About_first;