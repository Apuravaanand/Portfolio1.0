import React from "react";
import { ShieldCheck, Lock, RefreshCw, Mail, FileText } from "lucide-react";
import Navbar from "../components/Navbar";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white text-gray-900 py-16 px-6 sm:px-10 lg:px-16">

            {/* Main container with responsive padding to clear the fixed desktop navbar dock */}
            <div className="max-w-4xl mx-auto pl-0 md:pl-28 lg:pl-20">

                {/* Header Badge & Title */}
                <div className="mb-12">
                    <div className="inline-block px-4 py-1 bg-green-500/10 border border-green-500/20 text-green-700 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                        Legal & Trust
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                        Privacy Policy
                    </h1>
                    <p className="mt-3 text-sm sm:text-base text-gray-500">
                        Effective Date: October 2026
                    </p>
                    <div className="h-1.5 w-16 bg-green-500 rounded-full mt-6" />
                </div>

                {/* Content Body */}
                <div className="space-y-10 text-gray-600 text-sm sm:text-base leading-relaxed">

                    {/* Introduction */}
                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3">
                            <FileText className="text-green-600 shrink-0" size={24} />
                            1. Introduction
                        </h2>
                        <p>
                            Welcome to our platform. We respect your privacy and are committed to protecting your personal and business data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our enterprise-grade cloud infrastructure, SaaS automation tools, and associated web applications.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3">
                            <ShieldCheck className="text-green-600 shrink-0" size={24} />
                            2. Information We Collect
                        </h2>
                        <p>
                            We collect information to provide, maintain, and improve our high-availability cloud and SaaS solutions:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-gray-900">Information You Provide Directly:</strong> Account details, professional email addresses, organization names, and communications when reaching out for technical support or project collaboration.
                            </li>
                            <li>
                                <strong className="text-gray-900">Technical & Infrastructure Data:</strong> Automated logs capturing IP addresses, browser types, operating systems, API request metadata, performance metrics, and system telemetry generated during interaction with our cloud architecture.
                            </li>
                        </ul>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3">
                            <RefreshCw className="text-green-600 shrink-0" size={24} />
                            3. How We Use Your Information
                        </h2>
                        <p>
                            We utilize the collected data strictly for operational and developmental purposes, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provisioning, maintaining, and scaling cloud infrastructure and automated workflows.</li>
                            <li>Monitoring system health, protecting against unauthorized access, and ensuring enterprise-grade data integrity.</li>
                            <li>Providing critical system notifications, security alerts, updates, and responding to support requests.</li>
                        </ul>
                    </section>

                    {/* Data Security */}
                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3">
                            <Lock className="text-green-600 shrink-0" size={24} />
                            4. Data Security
                        </h2>
                        <p>
                            We implement robust administrative, technical, and physical security measures—including encrypted data transmission, secure token-based session management, and restricted access controls—to protect your infrastructure and proprietary data from unauthorized disclosure or breach.
                        </p>
                    </section>

                    {/* Third-Party Integrations */}
                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                            5. Third-Party Integrations & Services
                        </h2>
                        <p>
                            Our platform may integrate with third-party cloud providers, APIs, or authentication services to deliver seamless automation. These third-party services operate under their own privacy policies, and we encourage you to review them independently.
                        </p>
                    </section>

                    {/* Policy Changes */}
                    <section className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                            6. Changes to This Privacy Policy
                        </h2>
                        <p>
                            We may update this Privacy Policy periodically to reflect technological advancements, architectural changes, or regulatory updates. Any modifications will be posted directly on this page with an updated effective date.
                        </p>
                    </section>

                    {/* Contact Us */}
                    <section className="space-y-3 bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 mt-12">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3">
                            <Mail className="text-green-600 shrink-0" size={24} />
                            7. Contact Us
                        </h2>
                        <p>
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out directly:
                        </p>
                        <div className="pt-2">
                            <a
                                href="mailto:erapurava@gmail.com"
                                className="inline-flex items-center gap-2 text-green-600 font-bold hover:underline text-base sm:text-lg"
                            >
                                erapurava@gmail.com
                            </a>
                        </div>
                    </section>

                </div>

            </div>
        </div>
    );
}