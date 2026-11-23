import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What services does Vraks Cloud offer?",
        answer:
            "We build full-stack SaaS applications and custom web platforms (React, Next.js, Node.js, Express, MongoDB), configure cloud infrastructure and CI/CD pipelines on AWS (EC2, S3, IAM, Docker, Nginx, GitHub Actions), and provide managed web hosting and ongoing maintenance.",
    },
    {
        question: "Will I work directly with the founder or get passed to junior freelancers?",
        answer:
            "You work directly with Apurava Anand, the founder and lead engineer, from initial architecture and UI/API development through cloud deployment and post-launch support—ensuring fast communication and zero handoff delays.",
    },
    {
        question: "How long does it take to build and deploy a SaaS MVP or web application?",
        answer:
            "A focused landing page or business web platform typically takes 1 to 2 weeks, while a full-stack SaaS MVP with authentication, dashboards, APIs, and automated cloud deployment usually takes 3 to 6 weeks depending on feature scope.",
    },
    {
        question: "Can you deploy or optimize an existing app on AWS or Docker?",
        answer:
            "Yes. If you already have a codebase, we can containerize it with Docker, configure Nginx reverse proxies and SSL certificates, set up automated GitHub Actions CI/CD deployments, and optimize your AWS server setup for reliability and cost.",
    },
    {
        question: "Do you provide post-launch support and managed hosting?",
        answer:
            "Yes. We offer ongoing maintenance, server monitoring, security updates, domain/SSL management, and feature iterations so your application stays fast and online without you having to manage servers yourself.",
    },
    {
        question: "How do we get started and how does pricing work?",
        answer:
            "Reach out via the Contact page or email with a brief overview of your project goals. We offer transparent fixed-price milestones for well-defined builds and flexible monthly retainers for ongoing cloud management and development.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="relative mb-10 text-gray-100 py-20 px-6 md:px-16 overflow-hidden">
            {/* Soft background glow matching Footer */}
            <div className="absolute w-72 h-72 blur-3xl rounded-full top-12 right-10 opacity-10 bg-green-400 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: "some" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 space-y-3"
                >

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-600">
                        Frequently Asked <span className="text-green-500">Questions</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Everything you need to know about working with Vraks Cloud, our tech stack, timelines, and cloud deployments.
                    </p>
                </motion.div>

                {/* Accordion List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: "some" }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className={`rounded-xl border transition-colors ${isOpen
                                    ? "bg-zinc-900/90 border-green-500/40"
                                    : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={isOpen}
                                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                                >
                                    <span className="text-base md:text-lg font-medium text-gray-100">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        size={20}
                                        className={`text-green-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 pb-5 text-gray-300 leading-relaxed border-t border-zinc-800/80 pt-3">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}