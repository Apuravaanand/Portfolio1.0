import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X, Activity, Terminal, ArrowUpRight, Box, Check } from 'lucide-react';

const MyServices = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    // Environment variables for Telegram
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    const handleSend = async (e) => {
        e.preventDefault();
        setLoading(true);
        const payload = `⚡ *NODE_INQUIRY*\n👤 *NAME:* ${formData.name}\n📧 *NET:* ${formData.email}\n💬 *DATA:* ${formData.message}`;
        try {
            await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                chat_id: chatId,
                text: payload,
                parse_mode: 'Markdown',
            });
            setFormData({ name: '', email: '', message: '' });
            setModalOpen(false);
        } catch (err) {
            console.error("Transmission Error");
        } finally {
            setLoading(false);
        }
    };

    const services = [
        {
            title: "MVP Development",
            desc: "High-velocity builds for founders launching fast without accumulating technical debt.",
            specs: ["MERN", "Auth", "2-4w"]
        },
        {
            title: "Full-Scale Apps",
            desc: "End-to-end production systems built for long-term stability and massive user growth.",
            specs: ["Modular", "API Sec", "4-8w"]
        },
        {
            title: "UI/UX & Product Design",
            desc: "High-fidelity interfaces engineered for maximum user retention and seamless navigation flows.",
            specs: ["Figma", "Motion", "Prototyping"]
        },
        {
            title: "Frontend Engineer",
            desc: "Crafting pixel-perfect, highly interactive user experiences using React and modern CSS frameworks.",
            specs: ["React", "Tailwind", "Framer"]
        },
        {
            title: "Backend Systems",
            desc: "Robust architectural design focusing on data integrity, high-performance APIs, and server logic.",
            specs: ["Node.js", "MongoDB", "SaaS"]
        },
        {
            title: "Business & Enterprise Sites",
            desc: "Professional, high-converting digital footprints optimized for SEO, speed, and brand authority.",
            specs: ["Next.js", "SEO", "CMS"]
        }
    ];

    const pricing = [
        { tier: "Fast-Track", cost: "₹20K-40K", target: "Startups/MVPs", features: ["Single Core Feature", "Telegram/API Integration", "2 Weeks Support"] },
        { tier: "Production", cost: "₹60K-1.5L", target: "Scale-ups", features: ["Full Auth System", "Custom Dashboard", "Cloud Deployment", "Database Architecture"] },
        { tier: "Enterprise", cost: "Variable", target: "Complex Systems", features: ["Microservices", "High-Availability", "Security Audits", "24/7 Priority"] }
    ];

    return (
        <section className="relative z-20 overflow-visible bg-gray-300 pb-20 md:pb-32">
            {/* Dynamic Geometric Border - Scaled for Mobile */}
            <div className="absolute top-0 left-0 w-full h-12 md:h-20 bg-gray-300 -translate-y-full"
                style={{ clipPath: "polygon(0% 100%, 15% 100%, 20% 60%, 40% 60%, 45% 100%, 70% 100%, 75% 60%, 95% 60%, 100% 100%, 0% 100%)" }} />

            <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-12 md:pt-20">

                {/* Header Section: Responsive Flex Direction */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16 md:mb-20">
                    <div className="max-w-2xl">
                        <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-700 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-full mb-4 md:mb-6">
                            Service Modules_v2.0
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 leading-[0.95] md:leading-[0.9] tracking-tighter uppercase italic">
                            Production <br /> <span className="text-green-600 not-italic">Infrastructure</span>
                        </h2>
                    </div>
                    <div className="bg-white p-5 border border-gray-400 rounded-2xl shadow-sm hidden sm:block max-w-[280px]">
                        <p className="text-[9px] font-bold text-gray-400 uppercase leading-relaxed italic">
                            "Scaling digital products isn't just about code—it's about measurable efficiency."
                        </p>
                    </div>
                </div>

                {/* Services Grid: Responsive Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-20 md:mb-24">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-gray-400/50 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 md:p-8 text-green-500/10 group-hover:text-green-500/20 transition-colors">
                                <Box className="w-10 h-10 md:w-16 md:h-16" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-black text-gray-900 uppercase italic leading-none mb-4 md:mb-6">{s.title}</h3>
                            <p className="text-[11px] md:text-sm text-gray-500 mb-6 md:mb-8 max-w-xs leading-relaxed uppercase font-bold tracking-tight">{s.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {s.specs.map(tag => (
                                    <span key={tag} className="text-[8px] md:text-[9px] font-black text-green-600 bg-green-50 px-2 md:px-3 py-1 rounded-md border border-green-100 uppercase">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Pricing Tiers: Full Width on Mobile, 3 Cols on Large Screens */}
                <div className="mb-20 md:mb-32">
                    <div className="text-center mb-10 md:mb-12">
                        <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[0.8em] text-gray-400 mb-4 italic">Investment_Benchmarks</h4>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                        {pricing.map((p, i) => (
                            <div key={i} className="bg-gray-900/5 border border-gray-400/30 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] flex flex-col justify-between">
                                <div>
                                    <span className="text-[8px] md:text-[9px] font-black text-gray-500 uppercase tracking-widest">{p.target}</span>
                                    <h5 className="text-xl md:text-2xl font-black text-gray-900 uppercase italic mb-1">{p.tier}</h5>
                                    <div className="text-2xl md:text-3xl font-black text-green-600 mb-4 md:mb-6">{p.cost}</div>
                                    <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                                        {p.features.map((feat, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="h-1 w-1 bg-green-500 rounded-full mt-1.5" />
                                                <span className="text-[9px] md:text-[10px] font-bold text-gray-600 uppercase tracking-tight leading-tight">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Diagnostics / FAQ: Max-width for readability */}
                <div className="max-w-3xl mx-auto mb-20 md:mb-32">
                    <div className="text-center mb-12 md:mb-16">
                        <h4 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] md:tracking-[0.8em] text-gray-400 mb-4 italic">Project_Diagnostics</h4>
                        <div className="h-1 w-12 bg-green-500 mx-auto rounded-full" />
                    </div>

                    <div className="space-y-3 md:space-y-4 px-2">
                        {[{
                            q: "01. What is the Core Problem your MVP solves?",
                            a: "Focusing on the primary value proposition ensures your MERN stack build remains lean and market-ready."
                        },
                        {
                            q: "02. Do you have a defined User Flow?",
                            a: "Development speed increases by 40% when logic is mapped. If missing, we start with Scope Definition."
                        },
                        {
                            q: "03. What is your projected User Load?",
                            a: "This determines whether we build a standard monolithic API or a modular architecture for horizontal scaling."
                        },
                        {
                            q: "04. Is there an existing Legacy Database?",
                            a: "I perform a structural audit on existing data to ensure seamless migration into the new Node environment."
                        },
                        {
                            q: "05. Which Third-Party APIs are non-negotiable?",
                            a: "Identifying integrations like Stripe, Twilio, or AWS early prevents mid-sprint architecture shifts and budget bloat."
                        },
                        {
                            q: "06. How critical is Real-Time Data Sync?",
                            a: "For apps requiring live updates (chat, dashboards), I implement WebSockets or Socket.io to ensure sub-millisecond latency."
                        },
                        {
                            q: "07. What is your plan for Post-Launch Maintenance?",
                            a: "Code is a living organism. I provide documentation and modular structures so your team can scale the product without me."
                        },
                        {
                            q: "08. Are there specific Compliance or Security needs?",
                            a: "Whether it's JWT-based authentication or data encryption, I bake security into the middleware from day one."
                        }
                        ].map((f, i) => (
                            <div key={i} className="bg-white border border-gray-400/30 rounded-xl md:rounded-2xl overflow-hidden shadow-sm">
                                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-5 md:p-7 text-left flex justify-between items-center group">
                                    <span className="text-[10px] md:text-[12px] pr-4 font-black text-gray-800 uppercase italic tracking-wider group-hover:text-green-600 transition-colors">{f.q}</span>
                                    <div className={`p-1.5 md:p-2 rounded-lg bg-gray-50 transition-transform duration-300 ${activeFaq === i ? 'rotate-180 bg-green-50' : ''}`}>
                                        <ChevronDown className={`w-3 h-3 md:w-4 md:h-4 ${activeFaq === i ? 'text-green-600' : 'text-gray-400'}`} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                            <div className="px-5 md:px-7 pb-5 md:pb-7 pt-2 border-t border-gray-50">
                                                <p className="text-[10px] md:text-[11px] text-gray-500 uppercase font-bold leading-relaxed tracking-tight">
                                                    <span className="text-green-500 mr-2">▶</span> {f.a}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA: Centered and Scaled */}
                <div className="text-center px-4">
                    <button
                        onClick={() => setModalOpen(true)}
                        className="w-full sm:w-auto px-10 md:px-16 py-6 md:py-8 bg-gray-900 text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.6em] hover:bg-green-600 hover:shadow-2xl transition-all transform hover:-translate-y-1"
                    >
                        [ Start Project ]
                    </button>
                </div>
            </div>

            {/* Responsive Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setModalOpen(false)} className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" />
                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            className="relative w-full max-w-lg bg-white border-t sm:border border-gray-200 p-6 md:p-10 rounded-t-[2rem] sm:rounded-[3rem] shadow-2xl"
                        >
                            <div className="flex justify-between items-start mb-6 md:mb-8">
                                <h2 className="text-2xl md:text-3xl font-black italic uppercase text-gray-900 tracking-tighter">Initialize_Project</h2>
                                <button onClick={() => setModalOpen(false)} className="p-2 text-gray-400 hover:text-red-500"><X /></button>
                            </div>
                            <form onSubmit={handleSend} className="space-y-3 md:space-y-4">
                                <input required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl md:rounded-2xl text-[10px] md:text-xs outline-none focus:border-green-500 font-bold" placeholder="IDENT_NAME" />
                                <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl md:rounded-2xl text-[10px] md:text-xs outline-none focus:border-green-500 font-bold" placeholder="NET_ADDRESS" />
                                <textarea required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl md:rounded-2xl text-[10px] md:text-xs outline-none focus:border-green-500 font-bold min-h-[100px] md:min-h-[120px]" placeholder="PROJECT_SCOPE" />
                                <button disabled={loading} className="w-full py-5 md:py-6 bg-gray-900 text-white font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] rounded-xl md:rounded-2xl hover:bg-green-600 transition-colors">
                                    {loading ? 'TRANSMITTING...' : '[ TRANSMIT_DATA ]'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default MyServices;