import React from 'react';

const DevStickers = () => {
    const tools = [
        "MERN STACK", "UI/UX DESIGN", "FREELANCE", "C++ LOGIC", 
        "2026 EDITION", "REACT DEVELOPER", "NODE.JS", "TAILWIND CSS",
        "MERN STACK", "UI/UX DESIGN", "FREELANCE", "C++ LOGIC", 
        "2026 EDITION", "REACT DEVELOPER", "NODE.JS", "TAILWIND CSS"
    ];

    return (
        <section className="relative w-full bg-white py-24 overflow-hidden flex items-center justify-center">
            {/* The "Tape" Container */}
            <div className="relative w-full py-4 -rotate-1 scale-105 bg-green-500 border-y-2 border-black shadow-[0_20px_50px_rgba(0,0,0,0.2)] group z-10">
                
                {/* Scrolling Wrapper */}
                <div className="flex w-fit animate-infinite-scroll group-hover:[animation-play-state:paused]">
                    
                    {/* Loop 1 */}
                    <div className="flex items-center gap-12 px-6">
                        {tools.map((tool, index) => (
                            <div key={index} className="flex items-center gap-12">
                                <span className="text-black font-black text-2xl md:text-4xl tracking-tighter whitespace-nowrap uppercase italic">
                                    {tool}
                                </span>
                                <span className="text-black/40 font-black text-3xl select-none">✦</span>
                            </div>
                        ))}
                    </div>

                    {/* Loop 2 (Duplicate for seamless scroll) */}
                    <div className="flex items-center gap-12 px-6" aria-hidden="true">
                        {tools.map((tool, index) => (
                            <div key={`dup-${index}`} className="flex items-center gap-12">
                                <span className="text-black font-black text-2xl md:text-4xl tracking-tighter whitespace-nowrap uppercase italic">
                                    {tool}
                                </span>
                                <span className="text-black/40 font-black text-3xl select-none">✦</span>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Optional Small Gray Technical Label */}
            <div className="absolute bottom-10 right-10 flex flex-col items-end opacity-40">
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em]">System_v4.0</span>
                <div className="w-24 h-[1px] bg-gray-400 mt-1" />
            </div>

        </section>
    );
};

export default DevStickers;