import { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';
// Import the sticker from your assets folder
import contactSticker from '../assets/contact.png';

const TelegramContact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    const instagramUrl = import.meta.env.VITE_INSTAGRAM || "https://www.instagram.com/vraks.cloud/";
    const linkedinUrl = import.meta.env.VITE_LINKEDIN || "https://www.linkedin.com/company/vraks/";

    const handleSend = async (e) => {
        e.preventDefault();
        if (!botToken || !chatId) {
            alert("Configuration missing. Please check your .env file and restart the server.");
            return;
        }

        setLoading(true);
        setSubmitted(false);
        const text = `
🌿 *New Portfolio Message*
──────────────────
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
💬 *Message:* ${formData.message}
──────────────────`;

        try {
            await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                chat_id: chatId,
                text: text,
                parse_mode: 'Markdown',
            });
            setFormData({ name: '', email: '', message: '' });
            setSubmitted(true);
        } catch (error) {
            console.error("Error:", error);
            alert(`Failed: ${error.response?.data?.description || "Check connection"}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative min-h-screen bg-gray-400 text-zinc-100 flex items-center justify-center sm:p-8 font-sans overflow-hidden">
            {/* Background Ambient Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start lg:items-center z-10">

                {/* Left Column: Agency Branding, Contact Details & Trust Value Props */}
                <div className="lg:col-span-5 space-y-6 lg:pr-4 p-10">
                    {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold tracking-wide uppercase">
                        Available for New Projects
                    </div> */}

                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                        Schedule a <span className='text-green-600'>Meeting</span>
                    </h2>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
                        Whether you&apos;re launching a startup, scaling an existing business, or building custom internal software.          </p>

                    {/* Direct Contact & Social Links */}
                    <div className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm space-y-3.5">
                        <a
                            href="mailto:erapurava@gmail.com"
                            className="flex items-center gap-3 text-sm text-gray-800 hover:text-green-600 transition"
                        >
                            <span className="p-2 rounded-lg bg-green-50 text-green-700 shrink-0">
                                <Mail size={16} />
                            </span>
                            <span className="font-medium break-all">vrakscloud@outlook.com</span>
                        </a>

                        <a
                            href="tel:+916026260030"
                            className="flex items-center gap-3 text-sm text-gray-800 hover:text-green-600 transition"
                        >
                            <span className="p-2 rounded-lg bg-green-50 text-green-700 shrink-0">
                                <Phone size={16} />
                            </span>
                            <span className="font-medium">+91 6026260030</span>
                        </a>

                        <div className="pt-2 border-t border-gray-100 flex items-center gap-3">
                            <a
                                href={instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gray-50 hover:bg-green-50 border border-gray-200 text-xs font-semibold text-gray-800 hover:text-green-700 transition"
                            >
                                <Instagram size={16} />
                                <span>Instagram</span>
                            </a>

                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gray-50 hover:bg-green-50 border border-gray-200 text-xs font-semibold text-gray-800 hover:text-green-700 transition"
                            >
                                <Linkedin size={16} />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                            <h3 className="text-gray-900 font-bold text-lg">24h</h3>
                            <p className="text-xs text-gray-500">
                                Average Response Time
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                            <h3 className="text-gray-900 font-bold text-lg">100%</h3>
                            <p className="text-xs text-gray-500">
                                Commitment to Quality
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Adjusted Form Card */}
                <div className="lg:col-span-7 relative w-full">
                    {/* Sticker Image Positioned Nicely Above/Beside Card */}
                    {contactSticker && (
                        <img
                            src={contactSticker}
                            alt="Contact Sticker"
                            className="absolute -top-14 right-6 w-28 sm:w-32 h-auto z-20 drop-shadow-2xl hover:scale-110 transition-transform duration-300 pointer-events-none sm:pointer-events-auto hidden sm:block"
                        />
                    )}

                    <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xl relative w-full">
                        <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-200">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                                    Start a Conversation
                                </h3>
                                <p className="text-xs text-gray-500 mt-0.5">
                                    Fill out the details below to discuss your project requirements.
                                </p>
                            </div>

                            <div className="h-2.5 w-2.5 rounded-full bg-green-600 shadow-[0_0_12px_rgba(22,163,74,0.35)]" />
                        </div>

                        {submitted && (
                            <div className="mb-4 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-xs font-medium text-green-800">
                                Message sent successfully. We&apos;ll get back to you shortly.
                            </div>
                        )}

                        <form onSubmit={handleSend} className="space-y-4 sm:space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                <div>
                                    <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all"
                                        required
                                    />
                                </div>

                            </div>

                            <div>
                                <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                                    Project Scope / Message
                                </label>

                                <textarea
                                    placeholder="Tell me about your project, goals, timeline, or technical requirements..."
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all min-h-[140px] resize-y"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 ${loading
                                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                    : "bg-black text-white hover:bg-green-600 active:scale-[0.99] shadow-lg"
                                    }`}
                            >
                                {loading ? (
                                    <>
                                        <span className="w-4 h-4 border-2 border-gray-400 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Project Brief"
                                )}
                            </button>

                            <div className="flex items-center justify-between pt-2 text-[10px] text-gray-500 uppercase tracking-wider">
                                <span>Secure Communication</span>

                                <span className="flex items-center gap-1">
                                    We will response soon
                                </span>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TelegramContact;