import {
    Briefcase,
    Rocket,
    ShieldCheck,
    Users,
    Workflow,
    Headphones,
} from "lucide-react";

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

export default function WhyChooseMe() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">

                    <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-[0.25em]">
                        Why Businesses Choose Me
                    </span>

                    <h2 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                        Building Software That
                        <span className="text-green-600"> Creates Business Value</span>
                    </h2>

                    <p className="mt-6 text-gray-500 text-lg leading-relaxed">
                        I partner with startups, growing companies, and organizations to
                        deliver reliable software solutions that are scalable, maintainable,
                        and aligned with business objectives.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:bg-black hover:border-black transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-800 transition-all">
                                {item.icon}
                            </div>

                            <h3 className="mt-8 text-2xl font-black text-gray-900 group-hover:text-white transition-colors">
                                {item.title}
                            </h3>

                            <p className="mt-4 text-gray-500 group-hover:text-gray-400 leading-8">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>

                {/* Bottom CTA */}
                <div className="mt-20 rounded-[2rem] bg-black p-10 md:p-14 text-center">

                    <h3 className="text-3xl md:text-5xl font-black text-white">
                        Ready to Build Your Next Software Product?
                    </h3>

                    <p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-8">
                        Whether you're launching a startup, modernizing an existing system,
                        or building custom business software, let's turn your ideas into
                        reliable digital products.
                    </p>

                    <button className="mt-8 px-8 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold uppercase tracking-widest transition-all">
                        Start a Project
                    </button>

                </div>

            </div>

        </section>
    );
}