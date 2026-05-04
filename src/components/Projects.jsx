import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// DIRECT ASSET IMPORT MAPPING
// This gathers all images in the assets folder at build time
const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true });

const projects = [
    { id: 'project1', name: 'Movies Hub', tech: ['React', 'Node'], imgCount: 4, desc: 'Neural-link commerce interface.' },
    { id: 'project2', name: 'Modern UI Kit', tech: ['Tailwind', 'Framer'], imgCount: 4, desc: 'Next-gen design system protocols.' },
    { id: 'project3', name: 'Startup Platform', tech: ['Next.js'], imgCount: 4, desc: 'Decentralized venture scaling.' },
    { id: 'project4', name: 'Auth Protocol', tech: ['Firebase'], imgCount: 3, desc: 'Biometric encryption layer.' }
];

const ProjectSection = () => {
    const [activeFile, setActiveFile] = useState(projects[0]);
    const suffixes = ['a', 'b', 'c', 'd'];

    // Resolves image from the eager-loaded glob object
    const getImagePath = (id, suffix) => {
        const path = `../assets/${id}_${suffix}.png`;
        return images[path]?.default || '';
    };

    const getAnnouncementAsset = () => {
        // Matches your specific announcement asset
        return images['../assets/announcement.jpg']?.default || '';
    };

    const castellatedPath = {
        clipPath: `polygon(
            0% 10%, 15% 10%, 20% 0%, 45% 0%, 50% 10%, 55% 10%, 60% 0%, 90% 0%, 95% 10%, 100% 10%, 
            100% 90%, 95% 90%, 90% 100%, 60% 100%, 55% 90%, 50% 90%, 45% 100%, 20% 100%, 15% 90%, 0% 90%
        )`
    };

    return (
        <div className="flex flex-col">
            {/* LIGHT INDUSTRIAL SECTION */}
            <section className="relative min-h-[75vh] bg-white flex items-center justify-center py-20 px-6 lg:px-10 overflow-hidden font-sans">
                {/* Background Architecture */}
                <div className="absolute inset-4 bg-zinc-50 border border-zinc-200" style={castellatedPath} />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[size:30px_30px] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]" />

                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">

                    {/* Left Content: Precision Typography */}
                    <div className="flex flex-col space-y-6">
                        <div className="relative">
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.6em] block mb-4 flex items-center gap-2"
                            >
                                <span className="w-2 h-2 bg-black animate-pulse" /> Project_Manifest // v2.0
                            </motion.span>

                            <h2 className="text-6xl lg:text-8xl font-[1000] text-black uppercase tracking-tight leading-[0.85] italic">
                                Visual <br />
                                <span className="text-transparent stroke-black" style={{ WebkitTextStroke: '1px black' }}>Archive</span>
                            </h2>
                        </div>

                        <div className="flex gap-4 items-start border-t border-zinc-200 pt-6">
                            <div className="text-black font-bold text-xs uppercase tracking-tighter shrink-0">[ Info ]</div>
                            <p className="max-w-sm text-zinc-500 font-mono text-[11px] leading-relaxed uppercase">
                                Architecture utilizing Brutalist Clipping and high-fidelity asset rendering. Optimized for modern display protocols. Status: <span className="text-black font-bold">Active_Deployment</span>.
                            </p>
                        </div>
                    </div>

                    {/* Right Content: The "Terminal" Image */}
                    <div className="relative">
                        {/* Minimalist Tech Frame */}
                        <div className="absolute -top-4 -right-4 text-[10px] font-mono text-zinc-300 uppercase rotate-90 origin-bottom-right">
                            Asset_Ref: 01-ANNC
                        </div>

                        <div className="relative group">
                            {/* Precision Corners */}
                            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-black z-20" />
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-black z-20" />

                            {/* Main Container */}
                            <div className="bg-black p-[2px] shadow-[20px_20px_60px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="bg-white p-1">
                                    <div className="aspect-video bg-zinc-100 overflow-hidden relative">
                                        {/* Scanning Overlay Effect */}
                                        <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,3px_100%]" />

                                        <img
                                            src={getAnnouncementAsset()}
                                            alt="Announcement"
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                                        />

                                        {/* Inner Corner Accents */}
                                        <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/50 z-20" />
                                        <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/50 z-20" />
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Status Bar */}
                            <div className="mt-2 flex justify-between items-center font-mono text-[8px] text-zinc-400 uppercase tracking-widest px-1">
                                <span>Scan_Rate: 60Hz</span>
                                <span>Direct_Access_Enabled</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* DARK INDUSTRIAL SECTION */}
            <section className="relative min-h-screen bg-[#050505] flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-6xl w-full relative z-10">
                    <div className="flex justify-between items-end mb-4 px-2 font-mono text-[10px] uppercase">
                        <div className="text-cyan-500/50 tracking-[0.3em]">System_Version: 2.0.26 // {activeFile.id}</div>
                        <div className="text-fuchsia-500/50 animate-pulse">● Transmission_Active</div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[600px]">
                        <div className="lg:col-span-4 flex flex-col gap-3">
                            {projects.map((proj) => (
                                <button
                                    key={proj.id}
                                    onClick={() => setActiveFile(proj)}
                                    className={`relative p-6 border transition-all duration-300 ${activeFile.id === proj.id ? 'bg-cyan-500/10 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.2)]' : 'bg-black/40 border-white/10 hover:border-white/30'}`}
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)' }}
                                >
                                    <div className="flex flex-col items-start text-left">
                                        <span className={`text-[8px] font-bold ${activeFile.id === proj.id ? 'text-cyan-400' : 'text-zinc-600'}`}>ID_REF: {proj.id.toUpperCase()}</span>
                                        <span className={`text-sm font-black uppercase ${activeFile.id === proj.id ? 'text-white' : 'text-zinc-400'}`}>{proj.name}</span>
                                    </div>
                                    {activeFile.id === proj.id && <motion.div layoutId="navActive" className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500" />}
                                </button>
                            ))}
                        </div>

                        <div className="lg:col-span-8 relative bg-black/60 border border-white/10 p-8 flex flex-col justify-between overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-fuchsia-500/40" />

                            <AnimatePresence mode="wait">
                                <motion.div key={activeFile.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                                    <h3 className="text-5xl font-black text-white italic uppercase tracking-tighter mb-2">{activeFile.name}</h3>
                                    <p className="text-zinc-500 font-mono text-[11px] max-w-md uppercase">{activeFile.desc}</p>
                                </motion.div>
                            </AnimatePresence>

                            <div className="relative w-full h-64 bg-zinc-900/50 border-2 border-cyan-500/20 rounded-lg p-1">
                                <div className="w-full h-full overflow-hidden flex gap-1">
                                    <AnimatePresence mode="wait">
                                        <motion.div key={activeFile.id} className="flex w-full h-full gap-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            {suffixes.slice(0, activeFile.imgCount).map((suffix) => (
                                                <div key={suffix} className="flex-1 overflow-hidden">
                                                    <img src={getImagePath(activeFile.id, suffix)} alt="" className="w-full h-full object-cover brightness-[0.8] hover:brightness-100 transition-all duration-500" />
                                                </div>
                                            ))}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                                <div className="flex gap-2">
                                    {activeFile.tech.map(t => <span key={t} className="px-3 py-1 bg-white/5 border border-white/10">{t}</span>)}
                                </div>
                                <div className="flex gap-4 text-zinc-600 font-mono">
                                    <span>Enc_Type: AES-256</span>
                                    <span>Status: Deployed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectSection;