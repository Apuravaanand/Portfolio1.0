import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{
                boxShadow: [
                    "0 0 0px rgba(34,197,94,0.0)",
                    "0 0 40px rgba(34,197,94,0.15)",
                    "0 0 0px rgba(34,197,94,0.0)"
                ]
            }}
            transition={{
                opacity: { duration: 0.6 },
                boxShadow: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
            className="relative bg-white text-gray-800 py-16 px-6 md:px-16 overflow-hidden rounded-t-3xl"
        >
            {/* Soft background glows */}
            <div className="absolute w-64 h-64 blur-3xl rounded-full top-10 left-10 opacity-10 bg-green-400"></div>
            <div className="absolute w-64 h-64 blur-3xl rounded-full bottom-10 right-10 opacity-10 bg-gray-300"></div>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* About Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <h3 className="text-xl font-semibold text-green-600">About Me</h3>
                    <p className="text-gray-700">
                        I don’t just build websites — I engineer scalable web systems designed for growth, efficiency, and long-term impact.
                    </p>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-4"
                >
                    <h3 className="text-xl font-semibold text-green-600">Contact</h3>

                    <div className="flex items-center gap-3">
                        <Mail size={20} className="text-green-600" />
                        <span className="text-gray-700">erapuravaanand@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Phone size={20} className="text-green-600" />
                        <span className="text-gray-700">+91 xxxxxxxxxx</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <MapPin size={20} className="text-green-600" />
                        <span className="text-gray-700">Guwahati, India</span>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-4"
                >
                    <h3 className="text-xl font-semibold text-green-600">Follow Me</h3>

                    <div className="flex gap-6 mt-2">
                        <a
                            href="https://github.com/Apuravaanand/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-green-600 transition hover:scale-110"
                        >
                            <Github size={22} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/apurava-anand-/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-green-600 transition hover:scale-110"
                        >
                            <Linkedin size={22} />
                        </a>

                        <a
                            href="mailto:erapuravaanand@gmail.com"
                            className="text-gray-700 hover:text-green-600 transition hover:scale-110"
                        >
                            <Mail size={22} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
}