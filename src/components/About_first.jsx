import React from 'react';
// Path adjusted to your local assets
import profileImg from '../assets/about.png';

const About_first = () => {
    return (
        <section 
            className="relative bg-white py-12 md:py-20 px-6 font-sans overflow-hidden z-30"
            style={{
                /* Standard mobile clip-path */
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                paddingBottom: "80px"
            }}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">

                {/* Left Side: Content */}
                <div className="flex-1 space-y-6 text-center md:text-left order-2 md:order-1 lg:pl-20 xl:pl-32">
                    <div className="inline-block px-4 py-1 rounded-full bg-green-50 text-green-700 text-[10px] font-black uppercase tracking-[0.2em] border border-green-100">
                        Available for Projects
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-black leading-tight italic">
                        Hi, I'm <br />
                        <span className="text-green-600 not-italic uppercase tracking-tighter">Apurava Anand.</span>
                    </h1>

                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 uppercase tracking-wide">
                        Full Stack <span className="text-green-600">MERN</span> Developer.
                    </h2>

                    <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 border-l-4 border-zinc-100 pl-6 italic font-medium">
                        I build high-performance web applications that bridge the gap between
                        complex backend logic and sleek, user-centric frontends.
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
                <div className="flex-1 relative order-1 md:order-2 flex justify-center w-full px-4 md:px-0">
                    {/* Decorative Elements for visual depth */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-zinc-50 rounded-full -z-10"></div>
                    
                    {/* Industrial Frame Accent */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-8 border-r-8 border-green-600/20 -z-10 hidden lg:block"></div>

                    <img
                        src={profileImg}
                        alt="Apurava Anand"
                        className="w-full max-w-[280px] sm:max-w-sm md:max-w-md h-auto drop-shadow-[25px_25px_0px_rgba(0,0,0,0.05)] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-crosshair active:scale-95"
                    />
                </div>
            </div>

            {/* Matching Desktop Silhouette Style */}
            <style dangerouslySetInnerHTML={{ __html: `
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