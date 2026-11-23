import {
    Briefcase,
    Rocket,
    ShieldCheck,
    Users,
    Workflow,
    Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
    {
        icon: <Briefcase className="text-green-500" size={26} />,
        title: "Business-Driven Solutions",
        desc: "Software engineered to solve operational challenges, improve efficiency, and support long-term business growth.",
    },
    {
        icon: <Rocket className="text-green-500" size={26} />,
        title: "Scalable Architecture",
        desc: "Applications designed to handle increasing users, features, and business expansion without major rewrites.",
    },
    {
        icon: <ShieldCheck className="text-green-500" size={26} />,
        title: "Quality Engineering",
        desc: "Clean, maintainable code with strong emphasis on performance, reliability, and security best practices.",
    },
    {
        icon: <Workflow className="text-green-500" size={26} />,
        title: "Transparent Process",
        desc: "Clear milestones, continuous communication, and regular progress updates throughout development.",
    },
    {
        icon: <Users className="text-green-500" size={26} />,
        title: "Long-Term Partnership",
        desc: "Beyond development, I help businesses improve, scale, and evolve their software products over time.",
    },
    {
        icon: <Headphones className="text-green-500" size={26} />,
        title: "Reliable Support",
        desc: "Post-launch assistance, feature enhancements, maintenance, and technical guidance whenever needed.",
    },
];

export default function About_company() {
    return (
        <section className="relative py-24 bg-white overflow-hidden w-full">
            {/* Symmetrical mobile padding (px-4), with desktop-only left offset for the navigation dock (md:pl-28) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:pl-28 lg:pl-28 pr-4 sm:pr-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">

                    <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-[0.25em]">
                        Who We Are & How We Work
                    </span>

                    <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                        Engineering Reliable <br />
                        <span className="text-green-600">  SaaS & Cloud Provider</span>
                    </h2>

                    <p className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed">
                        Vraks Cloud is an independent software and cloud engineering studio founded by <span className="text-black">Apurava Anand</span>. We partner with startup founders, businesses, and growing teams to design, build, and deploy fast, production-ready web applications and automated cloud backends.
                    </p>

                </div>
            </div>
        </section>
    );
}