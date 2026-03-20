import React from "react";
import { ShieldCheck, Database, Globe } from "lucide-react";

const Service = () => {
    return (
        <section className="bg-gray-50 py-16 px-6 md:px-20">
            {/* Section Header */}
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    My <span className="text-green-600">Services</span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    I build secure, scalable, and production-ready web applications
                    using modern MERN stack architecture and best practices.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {/* Authentication Systems */}
                <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition duration-300">
                    <div className="bg-green-100 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                        <ShieldCheck className="text-green-600" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Authentication Systems
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>✔ JWT + Refresh Token</li>
                        <li>✔ Role-Based Authorization</li>
                        <li>✔ Secure HTTP-only Cookies</li>
                        <li>✔ OAuth (Google Login)</li>
                    </ul>
                </div>

                {/* Backend Architecture */}
                <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition duration-300">
                    <div className="bg-green-100 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                        <Database className="text-green-600" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Backend Architecture
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>✔ REST APIs</li>
                        <li>✔ Scalable Server Setup</li>
                        <li>✔ Database Optimization</li>
                        <li>✔ Load-Balancing Ready Design</li>
                    </ul>
                </div>

                {/* Full Stack Apps */}
                <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition duration-300">
                    <div className="bg-green-100 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                        <Globe className="text-green-600" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Full Stack Applications
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                        <li>✔ MERN Applications</li>
                        <li>✔ Admin Dashboards</li>
                        <li>✔ SaaS Platforms</li>
                        <li>✔ Portfolio & Business Websites</li>
                    </ul>
                </div>

            </div>

            {/* Call To Action */}
            <div className="text-center mt-14">
                <a
                    href="#contact"
                    className="inline-block bg-green-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-green-700 transition duration-300"
                >
                    Let’s Build Something Secure 🚀
                </a>
            </div>
        </section>
    );
};

export default Service;