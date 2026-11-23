import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, MapPin, MessageSquare, Briefcase, Instagram } from "lucide-react";
import { CgCommunity } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
    const instagramUrl = "https://www.instagram.com/vraks.cloud/";
    const linkedinUrl = "https://www.linkedin.com/company/vraks/home/?viewAsMember=true";
    const discordUrl = "https://discord.com/invite/hthSU6nT";
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ opacity: { duration: 0.6 } }}
            className="relative bg-black text-gray-100 py-16 px-6 md:px-16 overflow-hidden"
        >
            {/* Soft background glows */}
            <div className="absolute w-64 h-64 blur-3xl rounded-full top-10 left-10 opacity-10 bg-green-400 pointer-events-none" />
            <div className="absolute w-64 h-64 blur-3xl rounded-full bottom-10 right-10 opacity-10 bg-gray-300 pointer-events-none" />

            <div className="relative ml-0 lg:ml-18 z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* About Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: "some" }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4"
                >
                    <div className="flex items-center gap-3">
                        <img
                            src="/logo.jpg"
                            alt="Vraks Cloud logo"
                            className="h-9 w-auto object-contain rounded-md"
                        />
                        <h3 className="text-xl font-semibold text-green-500">Vraks Cloud</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                        Building production SaaS applications, reliable backends, and automated cloud deployments for founders and teams worldwide.
                    </p>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: "some" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-4"
                >
                    <h3 className="text-xl font-semibold text-green-500">Contact</h3>

                    <div className="flex items-center gap-3">
                        <Mail size={20} className="text-green-500 shrink-0" />
                        <a
                            href="mailto:erapurava@gmail.com"
                            className="text-gray-200 hover:text-green-400 transition"
                        >
                            vrakscloud@outlook.com
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <Phone size={20} className="text-green-500 shrink-0" />
                        <a
                            href="tel:+916026260030"
                            className="text-gray-200 hover:text-green-400 transition"
                        >
                            +91 6026260030
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <MapPin size={20} className="text-green-500 shrink-0" />
                        <span className="text-gray-200">Tezpur, India </span>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: "some" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-4"
                >
                    <h3 className="text-xl font-semibold text-green-500">Connect</h3>

                    <div className="flex gap-6 mt-2">
                        <a
                            href={instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-gray-200 hover:text-green-500 transition hover:scale-110"
                        >
                            <Instagram size={22} />
                        </a>
                        <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-gray-200 hover:text-green-500 transition hover:scale-110"
                        >
                            <Linkedin size={22} />
                        </a>

                        <a
                            href={discordUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Discord"
                            className="text-gray-200 hover:text-green-500 transition hover:scale-110"
                        >
                            <FaDiscord size={22} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
}