import React, { useState } from 'react';
import axios from 'axios';
// Import the sticker from your assets folder
import contactSticker from '../assets/contact.png';

const TelegramContact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    const handleSend = async (e) => {
        e.preventDefault();
        if (!botToken || !chatId) {
            alert("Configuration missing. Please check your .env file and restart the server.");
            return;
        }

        setLoading(true);
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
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error("Error:", error);
            alert(`Failed: ${error.response?.data?.description || "Check connection"}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white p-6 font-sans">
            {/* Wrapper for the card and the sticker */}
            <div className="relative w-full max-w-md mt-12">

                {/* Sticker Image */}
                <img
                    src={contactSticker}
                    alt="Contact Sticker"
                    className="absolute -top-16 right-4 w-32 h-auto z-10 drop-shadow-xl hover:scale-110 transition-transform duration-300 pointer-events-none sm:pointer-events-auto"
                />

                <form
                    onSubmit={handleSend}
                    className="relative w-full bg-white border border-gray-200 p-8 rounded-xl shadow-lg z-0"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-8 bg-green-600 rounded-full"></div>
                        <h2 className="text-2xl font-black text-black uppercase tracking-tighter">
                            Contact Me
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg text-black focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg text-black focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Message</label>
                            <textarea
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg text-black focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all min-h-[120px] resize-none"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full mt-8 p-4 rounded-lg font-black uppercase tracking-widest text-sm transition-all ${loading
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-black text-white hover:bg-green-700 active:scale-95 shadow-md'
                            }`}
                    >
                        {loading ? 'Processing...' : 'Send Message'}
                    </button>

                    <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest">
                        Secure Telegram Protocol
                    </p>
                </form>
            </div>
        </div>
    );
};

export default TelegramContact;