import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        setSuccess(true);
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

        setTimeout(() => setSuccess(false), 3000);
    };

    return (<>
        <section className="min-h-screen bg-gray-50 py-20 px-6 md:px-16">
            <Navbar />

            {/* Heading */}
            <div className="text-center mb-16">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                    Let’s Work Together
                </h1>
                <p className="text-gray-600 text-center max-w-2xl mx-auto">
                    I'm open to freelance projects, collaborations, and full-time
                    opportunities. If you have an idea in mind, let’s build something meaningful.
                </p>
            </div>

            {/* Layout */}
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Send a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />

                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
                        >
                            Send Message
                        </button>

                        {success && (
                            <p className="text-green-600 text-center mt-4 transition">
                                Message sent successfully 🌿
                            </p>
                        )}
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
                        <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                        <p className="text-gray-600 mt-2">erapuravaanand@gmail.com</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
                        <h3 className="font-semibold text-lg text-gray-800">Location</h3>
                        <p className="text-gray-600 mt-2">Guwahati | India</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
                        <h3 className="font-semibold text-lg text-gray-800">Availability</h3>
                        <p className="text-green-600 mt-2 font-medium">
                            Open to Work & Freelance
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 pt-4 text-2xl text-gray-700">
                        <a href="https://github.com/Apuravaanand/" target="_blank" className="hover:text-green-600 transition">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/apurava-anand-/" target="_blank" className="hover:text-green-600 transition">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:erapuravaanand@gmail.com" target="_blank" className="hover:text-green-600 transition">
                            <FaEnvelope />
                        </a>
                    </div>

                    {/* Resume Button */}
                    <a
                        href="/resume.pdf"
                        download
                        className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
                    >
                        Download CV
                    </a>

                </div>
            </div>
        </section>
        <Footer />
    </>
    );
};

export default ContactPage;
