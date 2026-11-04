import {
    Target,
    Layers3,
    Rocket,
    Search,
    ClipboardList,
    PencilRuler,
    Code2,
    RocketIcon,
} from "lucide-react";

const approach = [
    {
        icon: Target,
        title: "Strategy",
        text: "Every project starts with understanding business goals before writing a single line of code.",
    },
    {
        icon: Layers3,
        title: "Architecture",
        text: "Scalable systems designed for growth, performance and long-term maintainability.",
    },
    {
        icon: Rocket,
        title: "Execution",
        text: "Fast iteration, transparent communication and production-ready delivery.",
    },
];

const process = [
    {
        no: "01",
        icon: Search,
        title: "Discover",
        desc: "Understand business goals and technical requirements.",
    },
    {
        no: "02",
        icon: ClipboardList,
        title: "Scope",
        desc: "Define roadmap, architecture and delivery milestones.",
    },
    {
        no: "03",
        icon: PencilRuler,
        title: "Design",
        desc: "Craft interfaces that balance usability and functionality.",
    },
    {
        no: "04",
        icon: Code2,
        title: "Build",
        desc: "Develop scalable software with continuous updates.",
    },
    {
        no: "05",
        icon: RocketIcon,
        title: "Launch",
        desc: "Deployment, optimization and ongoing support.",
    },
];

export default function ApproachSection() {
    return (
        <section className="py-24 px-6 bg-white mb-10">

            {/* Added responsive pl-0 md:pl-28 lg:pl-20 to clear fixed navbar dock on desktop */}
            <div className="max-w-7xl mx-auto relative pl-0 md:pl-28 lg:pl-20">

                {/* floating badge */}
                <div className="absolute -top-12 right-6 hidden lg:flex w-32 h-32 rounded-full border-4 border-white shadow-xl bg-green-500 items-center justify-center z-20">
                    <Target
                        size={46}
                        className="text-white"
                    />
                </div>

                {/* header */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">

                    <div
                        className="bg-black text-white p-6 sm:p-10"
                        style={{
                            clipPath:
                                "polygon(0 0,100% 0,100% 85%,90% 100%,0 100%)",
                        }}
                    >
                        <div className="grid lg:grid-cols-12 gap-8 items-center">

                            {/* Left Text Content */}
                            <div className="lg:col-span-8">
                                <div className="w-2 h-10 rounded-full bg-green-500 mb-5"></div>

                                <p className="uppercase tracking-[0.3em] text-green-400 text-xs font-bold">
                                    OUR APPROACH
                                </p>

                                <h2 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
                                    Product-Minded.
                                    <br />
                                    Systems-Focused.
                                    <br />
                                    Execution-Driven.
                                </h2>

                                <p className="mt-6 max-w-3xl text-white/70 text-sm sm:text-base leading-relaxed">
                                    Every engagement balances usability,
                                    business objectives,
                                    scalable architecture,
                                    and engineering excellence—
                                    ensuring products are built to last.
                                </p>
                            </div>

                            {/* Right GIF Container */}
                            <div className="lg:col-span-4 flex justify-center items-center">
                                <div className="relative w-48 sm:w-60 lg:w-full max-w-xs rounded-2xl overflow-hidden p-2">
                                    <img
                                        src="/robort_ball.gif"
                                        alt="Robot Ball Animation"
                                        className="w-full h-auto object-cover rounded-xl"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* three columns */}
                    <div className="grid md:grid-cols-3">
                        {approach.map((item, i) => (
                            <div
                                key={item.title}
                                className={`p-8 sm:p-10 ${i !== 2
                                    ? "border-b md:border-b-0 md:border-r border-gray-200"
                                    : ""
                                    }`}
                            >
                                <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
                                    <item.icon className="text-green-600" />
                                </div>

                                <h3 className="mt-6 text-xl sm:text-2xl font-black">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* engagement */}
                <div className="grid lg:grid-cols-2 gap-8 mt-16">

                    <div className="border border-gray-200 rounded-2xl p-6 sm:p-8">
                        <div className="w-2 h-8 rounded-full bg-green-600 mb-5"></div>

                        <h3 className="font-black text-2xl sm:text-3xl">
                            Engagement Models
                        </h3>

                        <div className="mt-8 space-y-5">
                            {[
                                "End-to-End Product Development",
                                "MVP Development",
                                "Custom Internal Software",
                                "Technical Collaboration",
                                "Ongoing Engineering Support",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex gap-4 items-center"
                                >
                                    <div className="w-3 h-3 rounded-full bg-green-600 shrink-0"></div>
                                    <span className="font-medium text-sm sm:text-base">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-2xl p-6 sm:p-8">
                        <div className="w-2 h-8 rounded-full bg-green-600 mb-5"></div>

                        <h3 className="font-black text-2xl sm:text-3xl">
                            Who We Work With
                        </h3>

                        <div className="mt-8 space-y-5">
                            {[
                                "Startups",
                                "Growing Businesses",
                                "Institutions",
                                "Founders",
                                "Internal Product Teams",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex gap-4 items-center"
                                >
                                    <div className="w-3 h-3 rounded-full bg-green-600 shrink-0"></div>
                                    <span className="font-medium text-sm sm:text-base">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* process */}
                <div className="mt-24">

                    <div className="flex items-center gap-4 mb-14">
                        <div className="w-2 h-10 bg-green-600 rounded-full"></div>
                        <div>
                            <p className="uppercase tracking-[0.3em] text-xs text-green-600 font-bold">
                                PROCESS
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-black">
                                How We Work
                            </h2>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="hidden lg:block absolute left-0 right-0 top-7 h-[2px] bg-gray-200"></div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
                            {process.map((step) => (
                                <div
                                    key={step.no}
                                    className="relative"
                                >
                                    <div className="relative z-10 w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg">
                                        <step.icon size={22} />
                                    </div>

                                    <div className="mt-6">
                                        <span className="text-green-600 font-black">
                                            {step.no}
                                        </span>

                                        <h3 className="mt-2 font-black text-xl sm:text-2xl">
                                            {step.title}
                                        </h3>

                                        <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}