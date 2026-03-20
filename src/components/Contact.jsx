import { motion } from "framer-motion";
import { Bell } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative py-10 sm:py-15 md:py-18 px-4 sm:px-6 md:px-16 bg-white-200 overflow-hidden"
        >
            {/* Soft Background Glow */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 blur-3xl rounded-full top-10 left-5 opacity-10 bg-green-400" />
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 blur-3xl rounded-full bottom-10 right-5 opacity-10 bg-gray-300" />

            <div className="relative z-10 max-w-6xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">

                    {/* LEFT CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                        whileHover={{ y: 0 }}
                        className="rounded-3xl p-6 sm:p-8 shadow-md bg-white border border-gray-200"
                    >
                        <div className="space-y-4">
                            <h1 className="text-2xl bold">Do You have some Idea !</h1>
                            {[
                                "Have a project in mind? Let’s talk.",
                                "Reach out and let’s create impact.",
                                "Let’s build something amazing together.",
                                "Turn your vision into a powerful digital experience.",
                            ].map((text, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ x: 6 }}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200 transition"
                                >
                                    <Bell size={20} className="text-green-600" />
                                    <span className="text-gray-700 text-sm sm:text-base">{text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: false }}
                        className="rounded-3xl p-6 sm:p-8 shadow-md bg-white border border-gray-200"
                    >
                        <form className="space-y-4 sm:space-y-5">
                            <h1 className="text-2xl bold">Send a Message</h1>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 sm:p-4 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 sm:p-4 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-3 sm:p-4 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                            />

                            <textarea
                                rows="3"
                                placeholder="Your Message"
                                className="w-full p-3 sm:p-4 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition"
                            />

                            <button
                                type="submit"
                                className="w-full py-3 sm:py-4 rounded-xl font-semibold transition hover:scale-105 bg-green-600 text-white"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
